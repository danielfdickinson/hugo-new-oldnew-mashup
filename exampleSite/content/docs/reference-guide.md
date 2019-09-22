---
title: "Reference Guide"
date: 2019-09-02T01:20:56-04:00
copyright: 2019 Daniel F. Dickinson
author: Daniel F. Dickinson <cshored@thecshore.com>
description: Reference guide for using OldNew Mashup theme
license: CC-BY-4.0
categories: [theme, documentation, reference]
tags: [theme, website, docs, manual, reference-guide, reference]
weight: 10
---
# Reference Guide

## Site Params

Set these in your site configuration file in the ``params`` section.
E.g. for a ``config.toml`` you might have:

```toml
baseURL = 'https://example.com/'
languageCode = 'en-ca'
languageLang = 'en'
title = 'Site Title'
enableGitInfo = true
theme = 'new-oldnew-mashup'

[params]
  siteid = 'Site Title/ID'
  license = 'CC-BY-4.0'
  copyright = '© 2018 Daniel F. Dickinson'
  default_background_color = '#aba'
  default_text_color = '#454'
  ...

```
and so on.

### Table of Theme Params

| Param                               | Description                    |
|-------------------------------------|--------------------------------|
| sans_font_stack                     | Default sans-serif font selection preferences |
| mono_font_stack                     | Default monospace font selection preferences |
| default_background_color            | self-explanatory               |
| default_background_image            | ditto (default no image)       |
| default_pre_background_color        | default background for pre-formatted text boxes |
| default_hover_background_color      | default link hover background colour  |
| default_container_background_color  | default background for 'containers' (e.g. boxes) |
| default_text_color                  | default colour for any text not otherwise styled |
| default_link_color                  | default colour for non-visited (new) links |
| default_visited_link_color          | default colour for visited links |
| default_hover_color                 | default text colour for hovered over links |
| default_separator_color             | default colour for separating lines / borders |
| default_container_border            | default border for 'containers' (e.g. boxes) not including colour. E.g. '4px solid' |
| default_container_border_color      | default colour for 'containers' (e.g. boxes) borders |
| doc_date_background_color           | background colour for the document date information colophon hover block |

## Generic Styles Available

| Class Name          | Description                                   |
|---------------------|-----------------------------------------------|
| clear               | Causes HTML following to be rendered on the next line (never beside) the element with this class |
| label               | Element is intended as a label for following text (but is not necessarily in a form, so not label element |
| screen-reader-element | Element is for rending in screen readers but not regular pages |
| rollup-hoversite    | When this a block named with this class is hovered over, rollup-element gets ``display: block`` instead of ``display: none`` |
| rollup-element      | Is hidden (``display:none``) by default, but when a rollup-hoversite classed element is hovered over it is displayed (as block) |
| semiblock           | For paragraphs that need an initial indent    |
| semiblockwrapper    | For a wrapper around paragraphs that need an initial indent on every paragraph |
| start-para-pic      | For a an image intended to be at the start of a paragraph of text (but done as a div because p elements can't contain block-level elements) |

## Organization and Knobs

### Footer

*   contains 'footerlinks' and 'footercolophon' blocks
    *   for each of these, you may omit the section with a no&lt;block&gt;
        Site or Page Param (e.g. ``nofooterlinks`` would omit the
        footerlinks block in footer
    *   'footerlinks'
        *   just references 'footer/links' partial
        *   contains 'contact', 'sitemap', 'privacy', 'accessibility',
           'feed-link', and 'validator' blocks
        *   for each of these, you may omit the section with by setting
            a parameter of the same name with a 'no' prefix (e.g.
            ``nositemap = true``) in the site configuration file, or by
            setting 'no*block*: true' (e.g ``nositemap: true``) in the
            front-matter of the page (for per-page) settings.
        *   for 'contact', 'sitemap', 'privacy', and 'accessibility'
            blocks
            *   The default section expected for these pages is
              ``/siteentry``.
            *   The default section can be overridden by setting a
                parameter named ``footersection`` in the site config file,
                or by setting ``footersection: desired-section`` in the
                front-matter of the page (for per-page definitions).
            *   The default partial only displays the link if a
                content pages with the same name exists in the section
                as defined above.  E.g. the privacy page is only displayed
                if ``/contents/siteentry/privacy.md`` exists in the site,
                when using the default settings.  '.md' can be any page
                type supported by [Hugo](https://gohugo.io)).
        *   'feed-link' displays a links for the RSS feed for the current
            section (for sections) or is not displayed (for pages).  The
            link can be suppressed with a ``nofeedlink`` parameter set to
            true in either the site config file, or in the front-matter of
            the page (for per-page suppression).
        *   'validator' likewise can be suppressed with ``novalidator``.
            When present there will be a link to the the
            [W3C Unicorn Validator](https://validator.w3.org/unicorn/) set
            to automatically validate the page on which it appears.
    *   'footercolophon'
        *   just references 'footer/colophon' partial
            *   contains 'docdate' and 'license' blocks
                *   for each of these, you may omit the section with by
                    setting a parameter of the same name with a 'no' prefix
                   (e.g.``nodocdate = true``) in the site configuration
                   file, or by setting 'no*block*: true' (e.g
                   ``nodocdate: true``) in the front-matter of the page
                (for per-page) settings.
                *   See [A note on Licenses](siteentry#notelicenses) above
                    for information on setting the copyright and license
                    information to appear in the colophon.


## Styling

### Footer

*   Style name is 'footer'
    *   Smaller font size
    *   Uses entire width of page
    *   Is a flex item (``order: 999`` so that it normally appears last on
        the page, but can be overridden by having order greater than 999
        on elements under the 'default-body-wrapper' or 'homepage'
        top-level container (div)).
    *   Contains 'footer-links' and 'colophon'
        *   'footer-links'
            *   has a top border (2px grey) that acts a separator from the
                previous sections
            *   is slightly padded on all sides
            *   Text (contents) are centred within the 'footer-links' div.
            *   Contains 'contact', 'sitemap', 'privacy', 'accessibility',
                'feed-link', and 'validator' spans.  By default these are
                styled via the combination of the footer-links followed by
                a span, but the above classes may be used to override the
                default styling on a per-section basis.
        *   'colophon'

#### Colophon

*   Style name is 'colophon'
*   has a top border (2px grey) that acts a separator from the
    previous sections
*   is slightly padded on all sides
*   Text (contents) is left-justified within the 'colophon'
    div.
*   Contains 'doc-date' and 'license-block' classed divs
    *   'doc-date' contains 'doc-date-hoversite' and 'doc-date-block'
        *   'doc-date-hoversite' controls whether 'doc-date-block' is
            visible, when using the default styling (when
            'doc-date-hoversite' is hovered over, or is clicked, then
            'doc-date-block' gets ``display: block`` style, otherwise
            it is ``display: none``)
        *   'license-block' contains 'page-license' and 'site-license'
        *   Each of these is a div containing a span with class 'label',
              some text, and an unordered lists of licenses (generated
              from the parameters mentioned in
              [A note on Licenses](siteentry#notelicenses) above).
        *   The unordered list has been styled to appear as a
            comma-separated list as one line (i.e. as inline
            rather than block level elements) with wrapping.  It
            consists of a 'license-list' with 'license-item's.
