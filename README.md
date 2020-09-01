# search-packages

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![Github NodeJS][github-nodejs]][github-action-url]
[![Codecov][codecov-image]][codecov-url]
[![Codacy Badge][codacy-image]][codacy-url]

[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Semantic Release][semantic-release-image]][semantic-release-url]

[![Visual Studio Code][vscode-image]][vscode-url]
[![Wallaby.js][wallaby-image]][wallaby-url]

Search packages on npm.

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

[codacy-image]: https://api.codacy.com/project/badge/Grade/8793288ed6f54c74a9dc430b6a71476a
[codacy-url]: https://www.codacy.com/manual/homawong/search-packages?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=unional/search-packages&amp;utm_campaign=Badge_Grade
[codecov-image]: https://codecov.io/gh/unional/search-packages/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/unional/search-packages
[downloads-image]: https://img.shields.io/npm/dm/search-packages.svg?style=flat
[downloads-url]: https://npmjs.org/package/search-packages
[github-nodejs]: https://github.com/unional/search-packages/workflows/nodejs/badge.svg
[github-action-url]: https://github.com/unional/search-packages/actions
[greenkeeper-image]: https://badges.greenkeeper.io/unional/search-packages.svg
[greenkeeper-url]: https://greenkeeper.io/
[npm-image]: https://img.shields.io/npm/v/search-packages.svg?style=flat
[npm-url]: https://npmjs.org/package/search-packages
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
[wallaby-image]: https://img.shields.io/badge/wallaby.js-configured-green.svg
[wallaby-url]: https://wallabyjs.com
