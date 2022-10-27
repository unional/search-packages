# `search-packages`

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![GitHub NodeJS][github-release]][github-action-url]
[![Codecov][codecov-image]][codecov-url]

[![Visual Studio Code][vscode-image]][vscode-url]

Search packages on NPM.

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

## Contribute

```sh
# after fork and clone
npm install

# begin making changes
git checkout -b <branch>
npm run watch

# after making change(s)
git commit -m "<commit message>"
git push

# create PR
```

[codecov-image]: https://codecov.io/gh/unional/search-packages/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/search-packages
[downloads-image]: https://img.shields.io/npm/dm/search-packages.svg?style=flat
[downloads-url]: https://npmjs.org/package/search-packages
[github-action-url]: https://github.com/unional/search-packages/actions
[github-release]: https://github.com/unional/search-packages/workflows/release/badge.svg
[npm-image]: https://img.shields.io/npm/v/search-packages.svg?style=flat
[npm-url]: https://npmjs.org/package/search-packages
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
