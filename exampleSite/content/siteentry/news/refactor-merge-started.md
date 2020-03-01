---
title: "Refactor Merge Started"
date: 2020-02-29T21:00:37-05:00
copyright: Copyright © 2020 Daniel F. Dickinson
author: Daniel F. Dickinson
description: "A great deal of work has gone into a refactor/redesign of the theme, and now it is being merged into the development branch for eventual merge into mainline."
licenses:
  - CC-BY-4.0
categories:
  - news
  - refactor
  - theme
tags:
  - news
  - refactor
  - theme
draft: false
---

After a great deal of experimental effort with a refactor/redesign of
theme, it's time to start merging into the development branch for
eventual inclusion into mainline.

## Merged into devel-1.3.0 to date

### Behind-the-scenes

* We 'vendor' the various third-party modules we use so that all the
  code used by the theme is now in the theme repo.

### Theme-user Facing

* We improve the usage of ToCSS so that SCSS proccessing now gives
  useful filenames and line numbers in addition to eliminating the
  SCSS partials (as templates) and moving them to actual SCSS in
  assets.
* We've added three 'linters' (SCSS/SASS, Javascript, and Markdown)
  which are available as 'sass-lint', 'eslint', and 'markdownlint'.
* sass-lint and eslint have been integrated into the CI process.
* We've made Hugo Extended optional for most users.  There are some
  uses that still require the extended version of Hugo, but most users
  will find Hugo Basic is enough for their needs.
* We've increased the size of the summary returned by search as well as
  ensured the search results have the right styling to be displayed.
* We've implemented Hugo render hooks so that we now have Github
  Flavoured Markdown compatibility.
* We've added a number of dummy pages for testing the menus

