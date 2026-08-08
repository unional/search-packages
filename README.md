# search-packages

Monorepo for [`search-packages`](./packages/search-packages).

| Package                                              | Description             |
| ---------------------------------------------------- | ----------------------- |
| [`search-packages`](./packages/search-packages)      | Search packages on NPM. |

## Development

```sh
pnpm install
pnpm verify   # lint + build + coverage + depcheck
```

Releases are cut by [changesets](https://github.com/changesets/changesets) from GitHub Actions.
Add a changeset with `pnpm cs` in any PR that changes a published package.

<!-- queue validation B -->
