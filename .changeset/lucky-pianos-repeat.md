---
'search-packages': patch
---

Update repository URLs after the repo moved from `unional/search-packages` to
`cyberuni/search-packages`. GitHub redirects the old paths, but `repository`,
`homepage`, and `bugs` now point at the real location — `repository` in particular is
read when generating provenance attestations.
