# Reference dump — aannemersysteem.com (Dutch parent site)

This folder is a **temporary** reference dump of the Dutch parent site
(`bouw-flow-boost` repo, deployed to aannemersysteem.com).

## Purpose

Compare Dutch homepage / components / pages with vekst-systemet.no
to identify good design, conversion and content patterns that didn't
make it across in the initial Norwegian translation.

## How to use

1. On GitHub, open this folder.
2. Click **Add file → Upload files**.
3. Drag the entire `bouw-flow-boost` repo (or specific folders like
   `src/pages`, `src/components/home`) into the upload area.
4. Commit directly to `main`.

Claude will then read the files from here, extract the high-leverage
patterns, port them to `src/` (with Norwegian copy), and **delete this
folder** when done.

## Do NOT

- Reference anything in this folder from `src/`. It's read-only scratch.
- Leave this folder in the repo long-term — it bloats `git log` and
  confuses the build (Vite will try to bundle anything reachable).
- Worry about overwriting — every file here is just a copy from the
  Dutch repo.

## Cleanup

Once the comparison is done, this entire folder gets removed in a
single commit.
