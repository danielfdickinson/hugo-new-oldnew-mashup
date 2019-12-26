# OldNew Mashup

Version 1.2.0

[![Travis CI results](https://travis-ci.org/cshoredaniel/new-oldnew-mashup.svg?branch=master)](https://travis-ci.org/cshoredaniel/new-oldnew-mashup?branch=master)

## Overview

Modern high-contrast CSS3 & HTML5 [Hugo](https://gohugo.io) theme
inspired by old-school themes.

It attempts to be accessible, private, and responsive.

The theme is currently a work in progress, but is still working well
at <https://thecshore.com>.

You can view the [documentation for New OldNew Mashup Theme](https://new-oldnew-mashup.thecshore.com/docs)

## Examples of Sites Using This Theme
*   [The C Shore](https://www.thecshore.com)
*   [New OldNew Mashup Demo Site](https://new-oldnew-mashup.thecshore.com)

## Example Site

``/exampleSite`` contains some example content as per
["Add a theme to hugoThemes list"](https://github.com/gohugoio/hugoThemes#adding-a-theme-to-the-list),
including the documentation and a sample of how to use the theme.

## Interesting Features

### Even Lazier Blogger Menus and Navigation

This theme implements menus and navigation without requiring additional
metadata (e.g. ``menu:`` entries).  First, it automatically creates a
menu bar based on the top level sections and their sibling pages and
sub-sections (from which individual pages or sections can be excluded).
Likewise, on each page we generate buttons for linear traversal
(Previous|Next) and Up.  That means, except for pages which are
intentionally excluded, that the entire site can be read from landing
page to last page of the last section by clicking 'Enter Site', and then
'Next' on every subsequent page.

Finally the right sidebar will contain a navigation menu for the
current section and one level of subsections.

#### A note on navigation and display order

The linear traversal mentioned above uses Hugo's default Page ordering,
which means you can set the 'weight' metadata in the front-matter of
pages that are not naturally in the order you wish (basic ordering
is by date).  Lower weight sorts earlier.

### Search

This theme implements a search functionality using Fuse.js, Mark.js, and
some custom code.

### Contact Form

The theme includes basic support for a contact form (given an
appropriate server-side POST receiver).

### A note on displaying copyright / licenses

This theme has an archetype and taxonomy that make it easy to indicate
the copyright and licensing for your pages.  In the front-matter add
the license (or licenses) as a list in a licenses field, and copyright
in a copyright field.

```yaml
---
copyright: © 2019 Daniel F. Dickinson
licenses:
  - CC-BY-4.0
---
```

The copyright and license information will appear in the colophon in the
footer of the page.

You can mix and match licenses as you wish (in terms of the above scheme,
whether the licenses can actually work together is another story).

### Date and Time of Publishing

Three dates and times are available for every page and are included in
the footer by default: creation, modification, and site generation.

### RSS Feeds

Hugo's RSS feed generation is enabled and linked to from the footer.

### Goal: 100% W3C valid HTML5 and CSS3

Efforts are made to keep the theme 100% valid HTML5 and CSS3 according
the the <https://w3.org> [Unicorn validator](https://validator.w3.org/unicorn).


At present, due to the requirement to support IE11, there are
non-compliant media queries used to detect IE11.

### Human-readable sitemap

A Human-readable sitemap shortcode is available.

### Taxonomies

Hugo Taxonomies are implemented.

## Quick Start

1.  Obtain the code in **one** of the following ways:
    *   Grab a release tarball from <https://github.com/cshoredaniel/new-oldnew-mashup/releases>
        and place it in your site's ``themes`` directory.  **NB** the
        theme directory must be named ``new-oldnew-mashup``.  If you
        extract from a ZIP or tarball you'll probably have ``new-oldnew-mashup-<version>`` and will need to rename it.
    *   ``hugo mod get github.com/cshoredaniel/new-oldnew-mashup``
        to define the use of a [Hugo Module](https://gohugo.io/hugo-modules/).  (Don't do this if you're using the ZIP above).
        correctly.
2.  Add ``theme = "new-oldnew-mashup"`` to your ``config.toml`` (or the
    equivalent for YAML or JSON if you use one of those).
3.  Generate and view the site:
    *   Generate your site with ``hugo``, and copy the `public``
        directory to a web server and browse to the appropriate location
        on the server.
    *   Generate and serve a local live version with ``hugo server -b http://localhost:1313/``,
        and browse to <http://localhost:1313>.
4.  For configuration and options see
    [OldNew Mashup](https://new-oldnew-mashup.thecshore.com/docs).

**NB** If you are deploying from ZIP or tarball and attempt to create
a site by copying the ``config.toml`` from ``exampleSite`` into the
theme, the build will fail complaining that it's not a git repository.
In that case remove ``enableGitInfo = true`` from your ``config.toml``.

## Some features require Hugo Extended

*   Changing the styling via Params (e.g. colour selection) requires
Hugo Extended as the CSS must be regenerated from the base SCSS, which
requires Hugo Extended not just Basic.

## Issues / Bugs / Enhancements

Go to the [OldNew Mashup issue tracker on GitHub](https://github.com/cshoredaniel/new-oldnew-mashup/issues).

## Development

If you wish to make submission to the repository, please send a pull
request.

## Copyright & License

© 2009-2019 Daniel F. Dickinson
Licensed under the [Creative Commons Attribution License 4.0](https://creativecommons.org/licenses/by/4.0/)
[![Creative Commons License](https://github.com/cshoredaniel/new-oldnew-mashup/raw/master/by.svg?sanitize=true)](https://creativecommons.org/licenses/by/4.0/)

The License Image (above) is Copyright Creative Commons and Licensed under the [Creative Commons Share-Alike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)
