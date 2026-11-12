# Export an .xlsx to PDF via Excel (recalculated) and render each page to PNG for QA.
#   powershell -File render-xlsx.ps1 <file.xlsx> <pngOutDir>
param([string]$Xlsx, [string]$OutDir)
$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force $OutDir | Out-Null
$pdf = Join-Path $OutDir 'preview.pdf'
$x = New-Object -ComObject Excel.Application; $x.Visible = $false; $x.DisplayAlerts = $false
try { $wb = $x.Workbooks.Open($Xlsx); $x.CalculateFull(); $wb.ExportAsFixedFormat(0, $pdf); $wb.Close($false) } finally { $x.Quit() }
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTask = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
function Await($op, [Type]$t) { $task = $asTask.MakeGenericMethod($t).Invoke($null, @($op)); $task.Wait(); $task.Result }
function AwaitA($op) { $m = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' } | Select-Object -First 1; $m.Invoke($null, @($op)).Wait() }
[void][Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
[void][Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
[void][Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdf)) ([Windows.Storage.StorageFile])
$doc = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$list = if ($false) { $null.Split(',') | ForEach-Object { [int]$_ } } else { 1..$doc.PageCount }
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
