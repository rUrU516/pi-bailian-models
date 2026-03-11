# AGENTS.md

## Release procedure

When publishing a new release for this package, follow this order:

1. Commit and push functional/documentation changes to Git first.
2. Update the package version in:
   - `package.json`
   - `package-lock.json`
3. Publish the new version to npm:
   ```bash
   npm publish
   ```
4. Commit the version bump to Git and push it to remote.

## Notes

- Keep Git and npm in sync.
- Do not publish to npm without updating the version first.
- After `npm publish`, make sure the version bump is also committed and pushed.
