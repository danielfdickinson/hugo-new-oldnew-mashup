# OldNew Mashup

Version 0.9.0

[![Travis CI results](https://travis-ci.org/cshoredaniel/new-oldnew-mashup.svg?branch=master)](https://travis-ci.org/cshoredaniel/new-oldnew-mashup?branch=master)

## Overview

Modern high-contrast CSS3 & HTML5 [Hugo](https://gohugo.io) theme
inspired by old-school themes.

It attempts to be accessible, private, and responsive (in progress).

The theme is currently a work in progress, and has not yet been released
since refactoring.

## Documentation

View the [OldNew Mashup Documentation](https://new-oldnew-mashup.thecshore.com/docs)
for detailed information on how to use the OldNew Mashup theme.

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

This theme has an archetype and layouts that make it easy to indicate
the copyright and licensing for your pages.  In the front-matter add
the license (or licenses, separated by &amp;) in a license field.

The copyright and license information will appear in the colophon in the
footer of the page.

You can mix and match licenses as you wish (in terms of the above scheme,
whether the licenses can actually work together is another story).

### Date and Time of Publishing

Three dates and times are available for every page and are included in
the footer by default: creation, modification, and site generation.

### RSS Feeds

Hugo's RSS feed generation is enabled and linked to from the footer.

### 100% W3C valid HTML5 and CSS3

Efforts are made to keep the theme 100% valid HTML5 and CSS3 according
the the <https://w3.org> [Unicorn validator](https://validator.w3.org/unicorn).

### Human-readable sitemap

A Human-readable sitemap shortcode is available.

### Taxonomies

Hugo Taxonomies are implemented.

## Quick Start

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

## Issues / Bugs / Enhancements

Go to the [OldNew Mashup issue tracker on GitHub](https://github.com/cshoredaniel/new-oldnew-mashup/issues).

## Development

If wish to submit a Pull Request for a submission please do so!

## Copyright & License

© 2009-2019 Daniel F. Dickinson
Licensed under the Creative Commons Attribution License:
[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)
