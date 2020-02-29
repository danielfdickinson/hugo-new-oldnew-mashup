---
title: "Major Refactor for V2.0"
date: 2020-02-28T21:44:02-05:00
copyright: Copyright © 2020 Daniel F. Dickinson
author: Daniel F. Dickinson
description: "The New OldNew Mashup Theme has undergone a significant refactoring, so we're bumping to version 2.0."
licenses:
  - CC-BY-4.0
---

This version brings numerous improvements and bug fixes, as well as some
changes to the design.

Changes include:

*  Support for more browsers including some pre-HTML5 browsers like
   Internet Explorer 7.
*  Enhanced mobile support, including mobile-specific menu UI elements.
*  Added code for multiple styling schemes (mostly colour) which can be
   selected and used even with only Hugo Basic.
*  Refactored the SCSS so that it is better integrated with Hugo (and we
   can actually get useful error messages).
*  Introduces collapsing table of contents for pages written in
   Markdown.
*  Refresh of some design elements to make better use of screen real
   estate, and/or improve the look and feel of the site.
*  Deeply nested flyout menus are now available, including the use of
   columns for large menu lists, and scrollable lists when menus in
   columns would be too big for the screen.
*  Refactored SCSS to use media queries and @supports in order to create
   the best possible experience for many classes of browser.
*  Refactored linear navigation menu to be certain of avoiding infinite
   recursion.
*  Likewise the site menus (menubar and section navigation menu).
*  Various content improvements.

