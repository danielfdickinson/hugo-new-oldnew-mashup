---
title: "Quick Start"
date: 2019-09-02T00:57:04-04:00
copyright: 2019 Daniel F. Dickinson
author: Daniel F. Dickinson <cshored@thecshore.com>
description:
license: CC-BY-4.0
categories: [theme, documentation, quick-start]
tags: [theme, website, docs, manual, quick-start]
weight: -1
---

1.  Grab a release tarball from <https://github.com/cshoredaniel/new-oldnew-mashup/releases>
    and place it in your site's ``themes`` directory OR
    ``git clone <https://github.com/cshoredaniel/new-oldnew-mashup>``
    within your themes directory,
    OR ``git submodule add <https://github.com/cshoredaniel/new-oldnew-mashup>``
    in your themes directory OR ``hugo mod get <https://github.com/cshoredaniel/new-oldnew-mashup>``
    define the use of a [Hugo Module](https://gohugo.io/hugo-modules/)
    correctly.
2.  Add ``theme = "new-oldnew-mashup"`` to your ``config.toml`` (or the
    equivalent for YAML or JSON if you use those).
3.  Generate your site with ``hugo`` (or a a local live version with
    ``hugo server``), and in the former case copy ``public`` to a web
    server and browse there, or for the latter browse to <http://localhost:1313>.
4.  For configuration and options see [OldNew Mashup](https://new-oldnew-mashup.thecshore.com/docs).
