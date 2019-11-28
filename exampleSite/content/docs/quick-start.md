---
title: "Quick Start"
date: 2019-09-02T00:57:04-04:00
copyright: 2019 Daniel F. Dickinson
author: Daniel F. Dickinson <cshored@thecshore.com>
description:
licenses:
  - CC-BY-4.0
categories: [theme, documentation, quick-start]
tags: [theme, website, docs, manual, quick-start]
weight: -1
---

1.  Obtain the code in one of the following ways:
    *   Grab a release tarball from <https://github.com/cshoredaniel/new-oldnew-mashup/releases>
        and place it in your site's ``themes`` directory
    *   ``hugo mod get https://github.com/cshoredaniel/new-oldnew-mashup``
        to define the use of a [Hugo Module](https://gohugo.io/hugo-modules/)
        correctly.
2.  Add ``theme = "new-oldnew-mashup"`` to your ``config.toml`` (or the
    equivalent for YAML or JSON if you use one of those).
3.  Generate and view the site:
    *   Generate your site with ``hugo``, and copy the `public``
        directory to a web server and browse to the appropriate location
        on the server.
    *   Generate and serve a local live version with ``hugo server -b http://localhost:1313/``,
        and browse to <http://localhost:1313>.
4.  For configuration and options see [OldNew Mashup](docs).
