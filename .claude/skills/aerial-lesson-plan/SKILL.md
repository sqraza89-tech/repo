---
name: aerial-lesson-plan
description: Create aerial yoga (aerial hammock) lesson plans for Sana's classes at Dynamik and Asana Wellness — single classes, weekly plans, multi-week progressions, themed classes, and printable one-page plans with cues, regressions, progressions and a safety block. Use this whenever the user asks for a lesson plan, class plan, sequence, flow, drills, "plan for Tuesday's class", a beginner course, a theme class, or wants to adapt a class for a studio or level. Not for Instagram content (use instagram-posts).
---

# Aerial lesson plans

Plans must be teachable as written: timed, sequenced so the body is warm before it's loaded,
and safe for a mixed beginner–intermediate room. Sana teaches from them, so keep them scannable.

## Step 1 — Load context

1. Read `Projects/aerial-yoga/context.md` (studios, hammock counts, levels, class structure).
2. Read `Projects/aerial-yoga/safety.md` (safety source; Sana is not certified, so it is built from common studio practice — keep the safety block in every plan and default to the easier option).
   Use `pose-library.md` for pose names and cues, `teaching-handbook.md` for cue wording and scripts,
   and `program-12-weeks.md` for this week's skill of the month, strength and mobility focus.
3. Check `Projects/aerial-yoga/lesson-plans/` for recent plans so drills progress week to week and
   flows don't repeat.
4. If class length is still `TODO`, ask once and save the answer in `context.md`.

## Step 2 — Confirm the brief (ask only what's missing)

- Studio (Dynamik / Asana) · date · length · level mix
- Focus or theme (e.g. first inversion, hip openers, grip strength, stress release)
- Anything known about students that day (new joiners, injuries, pregnancy — Sana handles screening)

## Step 3 — Build the plan

Default structure (from `context.md`):

| Block | Dynamik | Asana Wellness |
|---|---|---|
| Arrival | — | herbal tea, intention setting |
| Warm-up (mat) | cardio/pilates or partner warm-up | gentle yoga flow, breath |
| Flow 1 | simple aerial flow | slow aerial flow |
| Drills | core/grip/upper body: inversions, flips, straddle drills | lighter strength, longer supported stretches |
| Flow 2 | builds on drills | restorative-leaning |
| Partner pose | yes | optional / gentle |
| Savasana | hammock or mat | cocoon in hammock, cold towels after |

Rules:
- Time every block; the total must equal the class length
- Give each pose: setup → 2–3 key cues → regression (beginner) → progression (intermediate)
- Warm wrists, shoulders, core and hips before grip or inversion work
- Inversions: always offer a non-inverted option; never the first thing after the warm-up
- Drills progress across weeks (link the previous plan); don't jump steps
- Partner poses: pair by size/level, say who bases and who flies
- 8 hammocks at Dynamik, 9 at Asana: say what any extra students do if the class is over capacity
- Write the actual words Sana will say (scripts + cues), not just pose names; she is building her teaching vocabulary
- Only use skills from pose-library.md; anything new must also be added there
- Keep pose names consistent across plans (English name, plus Sanskrit/aerial name if common)

## Step 4 — Output

Save to `Projects/aerial-yoga/lesson-plans/YYYY-MM-DD-<studio>-<theme>.md` with frontmatter.
Layout:

```
# <Studio> · <date> · <theme> · <length>
**Level:** … **Focus:** … **Peak pose/skill:** …

## Plan
| Time | Block | Poses / drills | Key cues | Regression / progression |

## Safety check
- Rig + hammock inspection, hammock height (hip height unless the pose says otherwise)
- Pre-class screening questions (from safety.md)
- Inversion and spotting notes for today's peak

## Music / mood (optional)
## Notes for next class
```

For a printable version, offer a one-page PDF or DOCX (docx/pdf skills).
For multi-week courses, write a course overview first (week → focus → peak skill), get approval,
then the individual plans.
