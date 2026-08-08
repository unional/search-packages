# `search-packages`

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![GitHub Action][github-release]][github-action-url]
[![Codecov][codecov-image]][codecov-url]

[![Visual Studio Code][vscode-image]][vscode-url]

Search packages on NPM.

Queries the [npm registry search API][registry-api] over `fetch` — no `npm` binary on `PATH`, no
process spawn — and returns only the packages carrying *every* keyword you asked for.

Requires Node 18 or later for the global `fetch`.

## Usage

```ts
import { searchByKeywords } from 'search-packages'

(async () => {
  const packages = await searchByKeywords(['some-keyword', 'more-keywords']) // ['pkg-a', 'pkg-b']
}())

// get additional fields
(async () => {
  // [{ name: 'pkg-a', description: 'a' }, { name: 'pkg-b', description: 'b' }]
  const packages = await searchByKeywords(['some-keyword', 'more-keywords'], ['description'])
}())
```

### Options

A third argument tunes the request:

```ts
await searchByKeywords(['some-keyword'], undefined, {
  registry: 'https://registry.example.com', // defaults to https://registry.npmjs.org
  maxResults: 500,                          // defaults to 1000
  signal: controller.signal,                // aborts the in-flight requests
  fetch: myFetch                            // defaults to the global fetch
})
```

### The result cap

The registry pages results 250 at a time, and a broad keyword can match thousands of packages.
Paging all of them would mean dozens of sequential round trips, so `searchByKeywords` stops after
**1000 results** (4 requests) by default.

The cap is not silent — `fetchPackagesByKeywords` returns the same packages plus a `truncated` flag
telling you whether the registry had more:

```ts
import { fetchPackagesByKeywords } from 'search-packages'

const { packages, truncated } = await fetchPackagesByKeywords(['some-keyword'])
```

Pass `{ maxResults: Number.POSITIVE_INFINITY }` to page through everything.

Note that `hasAllKeywords` filtering happens client-side: the registry's `keywords:` qualifier
matches loosely, so a package matching only some of your keywords still comes back from the API and
is dropped here.

## Contribute

```sh
# after fork and clone
pnpm install

# begin making changes
git checkout -b <branch>
pnpm --filter search-packages watch

# after making change(s)
pnpm verify
git commit -m "<commit message>"
git push

# create PR
```

[codecov-image]: https://codecov.io/gh/cyberuni/search-packages/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/cyberuni/search-packages
[downloads-image]: https://img.shields.io/npm/dm/search-packages.svg?style=flat
[downloads-url]: https://npmjs.org/package/search-packages
[github-action-url]: https://github.com/cyberuni/search-packages/actions
[github-release]: https://github.com/cyberuni/search-packages/workflows/release/badge.svg
[npm-image]: https://img.shields.io/npm/v/search-packages.svg?style=flat
[npm-url]: https://npmjs.org/package/search-packages
[registry-api]: https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md#get-v1search
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/

