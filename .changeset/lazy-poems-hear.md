---
'search-packages': minor
---

Replace the `npm search` shell-out with a direct `fetch()` against the npm registry search API.

`searchByKeywords()` no longer spawns a child process, so it no longer needs `npm` on `PATH` — it
works for standalone CLI installs and under bun/deno, and it drops the ~100ms process-spawn cost
that made this package a measurable share of a consuming CLI's startup time.

The public API is source-compatible: `searchByKeywords(keywords)` and
`searchByKeywords(keywords, fields)` behave as before. New in this release:

- An optional third `options` argument: `registry`, `maxResults`, `signal`, and `fetch`.
- `fetchPackagesByKeywords()` is exported for callers that want the raw registry packages plus a
  `truncated` flag. `hasAllKeywords` and `pickPackagesWithKeywords` are exported too.
- Results are paged 250 at a time up to a documented default cap of 1000; pass
  `{ maxResults: Number.POSITIVE_INFINITY }` to page through everything.
- The second overload's return type is corrected from
  `Promise<Record<string, any> & { name: string }[]>` to
  `Promise<(Record<string, any> & { name: string })[]>`, which is what it always returned at runtime.

`engines.node` is now `>= 18` for the global `fetch`.
