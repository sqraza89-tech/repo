#!/usr/bin/env bash
# Har session ke aakhir mein vault ko git par mehfooz kar deta hai.
#
# Kyun: 20 Aug 2026 ko ek folder ghalti se delete hua aur koi backup na hone ki
# wajah se wapas nahi aaya. Ab har change khud-ba-khud history mein chala jata hai.
#
# Yeh sirf tab chalta hai jab Claude chal raha ho. Us se azad backup ke liye
# Tools/vault-autosave.ps1 hai, jo Windows Task Scheduler se har 10 minute chalti
# hai ("Obsidian Vault Auto-Save"). Dono ek doosre ko kaat te nahi.
#
# Usool: yeh hook kabhi fail nahi karta aur kabhi rokta nahi — agar internet na ho
# to commit local rehta hai aur agli dafa push ho jata hai.

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
[ -d .git ] || exit 0

# Agar koi aur git chala raha hai (scheduled task) to abhi chhor do
[ -f .git/index.lock ] && exit 0

# Kuch badla ho to commit karo
if ! { git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; }; then
  git add -A >/dev/null 2>&1
  n=$(git diff --cached --name-only | wc -l | tr -d ' ')
  git commit -q -m "Auto-save: $n file(s) — $(date '+%Y-%m-%d %H:%M')" >/dev/null 2>&1
fi

# Push hamesha check karo — pichhli baar internet na hone se ruka ho to ab chala
# jaye, chahe is baar koi nayi change na hui ho.
ahead=$(git rev-list --count '@{u}..HEAD' 2>/dev/null)
if [ -n "$ahead" ] && [ "$ahead" -gt 0 ] 2>/dev/null; then
  timeout 25 git push -q origin HEAD >/dev/null 2>&1 &
fi

exit 0
