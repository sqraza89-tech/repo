# Embed fonts + export PDF + render PNG pages for a TekRevol .docx (visual QA).
#   powershell -File render-check.ps1 <file.docx> <pngOutDir> [pagesToRender e.g. "1,2,3"]
param([string]$Docx, [string]$OutDir, [string]$Pages = "")
$ErrorActionPreference = 'Stop'
Add-Type -Namespace W -Name G -MemberDefinition '[DllImport("gdi32.dll", CharSet=CharSet.Unicode)] public static extern int AddFontResourceW(string f);'
Get-ChildItem "$env:LOCALAPPDATA\Microsoft\Windows\Fonts" -Include *.ttf,*.otf -Recurse | ForEach-Object { [void][W.G]::AddFontResourceW($_.FullName) }

New-Item -ItemType Directory -Force $OutDir | Out-Null
$pdf = [IO.Path]::ChangeExtension($Docx, '.pdf')
$w = New-Object -ComObject Word.Application
$w.Visible = $false
try {
  $d = $w.Documents.Open($Docx, $false, $false)
  $d.EmbedTrueTypeFonts = $true
  $d.SaveSubsetFonts = $false
  $d.Save()
  $d.SaveAs2($pdf, 17)
  "pages: " + $d.ComputeStatistics(2)
  $d.Close($false)
} finally { $w.Quit() }

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
function Await($op, [Type]$t) { $task = $asTask.MakeGenericMethod($t).Invoke($null, @($op)); $task.Wait(); $task.Result }
function AwaitA($op) { $m = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' } | Select-Object -First 1; $m.Invoke($null, @($op)).Wait() }
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
[void][Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
[void][Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdf)) ([Windows.Storage.StorageFile])
$doc = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$list = if ($Pages) { $Pages.Split(',') | ForEach-Object { [int]$_ } } else { 1..$doc.PageCount }
foreach ($n in $list) {
  $page = $doc.GetPage($n - 1)
  $opt = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $opt.DestinationWidth = 900
  $out = Join-Path $OutDir ("p{0:D2}.png" -f $n)
  $fs = [IO.File]::Create($out)
  $ras = [System.IO.WindowsRuntimeStreamExtensions]::AsRandomAccessStream($fs)
  AwaitA ($page.RenderToStreamAsync($ras, $opt))
  $ras.Dispose(); $fs.Close()
}
"rendered " + $list.Count + " of " + $doc.PageCount
