# Refresh mode

Use when the user gives a live post URL (or asks which posts need a refresh). A refresh is not a
rewrite: the URL has earned whatever ranking and links it has, so keep the URL and the parts that
work, and fix what's stale or missing.

## A. Triage — which posts to refresh (when asked for a list)

1. Pull the blog URL list from the sitemap (`<site>/sitemap.xml`) or the blog index.
2. If Search Console is reachable (see brand profile → Analytics access), export pages with
   impressions and clicks for the last 3 months. Otherwise triage on content alone and say so.
3. Score each post. Refresh first where several apply:
   - ranks position 5–20 (close to page 1, cheapest gain)
   - high impressions, CTR under ~1% (title/meta problem)
   - maps to a current ICP and live service, but has no CTA or a dead one
   - outdated facts, years, stats, product names, or old company facts (headcount, founding year)
   - no answer-first opening / no FAQ (AEO gap)
   - topic now duplicated by a newer post (merge + redirect candidate)
4. Output a table: URL · ICP · stage · issue · action (refresh / merge / redirect / leave) · priority.
   Reading 50+ posts is bulk work: use the `delegate` skill for the per-post content summaries,
   after doing 3–5 yourself.

## B. Refreshing one post

1. **Read the live page** (built-in browser `get_page_text`, or WebFetch). Save the current text
   into the output note under "Before" so changes are traceable.
2. **Diagnose** against `aeo-seo-checklist.md` and the brand's current claims/proof/ICPs. Typical finds:
   stale facts, missing answer-first intro, generic H2s, no FAQ, CTA to a page that moved, no internal
   links to new service pages, off-brand tone, British spelling on a US brand.
3. **Decide the level:**
   - *Light* — title/meta, intro, CTA, links, dates, facts. Keep 80%+ of the body
   - *Medium* — also restructure H2s as questions, add FAQ and a table/list, update examples
   - *Heavy* — angle is wrong for any current ICP: rewrite the body, keep URL + primary keyword
   - *Merge/redirect* — recommend it; don't write it until the user agrees
4. **Keep:** URL, primary keyword (unless data says otherwise), anything that earns clicks, original
   publish date. **Change:** `dateModified`, and show "Updated <Mon DD YYYY>" on the page.
5. **Output** to `Notes/YYYY-MM-DD-<brand>-blog-refresh-<slug>.md`:
   - diagnosis table (issue → fix)
   - new title tag + meta
   - the refreshed post, with changed sections marked `[UPDATED]` / `[NEW]` so the editor sees what moved
   - schema changes, redirects (if any), internal links to add *to* this post from other pages
   - open questions

## C. Weekly refresh track
If the brand's content plan has a weekly "update existing blogs" track (xLoop does), pick the next
post from it; if none is listed, pull the top item from the triage table.
