---
title: "About OldNew Mashup"
copyright: 2018-2019 Daniel F. Dickinson
license: CC-BY-4.0
weight: -20
categories:
  - about
  - documentation
tags:
  - about
  - docs
  - documentation
  - introduction
---
## About OldNew Mashup

Version 0.9.0

Modern high-contrast CSS3 & HTML5 Hugo theme inspired by old-school themes.

It attempts to be accessible, private, and responsive (in progress).

The theme is currently a work in progress, and has not yet been released since refactoring.

You can view the [documentation for New OldNew Mashup Theme](docs)

## Examples of Sites Using This Theme
*   TODO: [The C Shore](https://www.thecshore.com)
*   Old version: [CShore's Maker Workshops](https://maker-workshops.thecshore.com)

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

## Development

If wish to submit a Pull Request for a submission please do so!
