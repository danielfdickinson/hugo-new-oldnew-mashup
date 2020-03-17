/* global expect test describe jest require global */

// Modified by Daniel F. Dickinson <cshored@thecshore.com>

// Requires vendored dist/fuse
// Requires fixtures/index.json

const executeSearch = require('./prepare-fuse.js').executeSearch

var documentBody = '<h1>Fusebar Search Test</h1>' +
'<form name="search_form" onSubmit="return doSearch()">' +
'  <input id="search-query" aria-label="Search box" type="search" name="s" size="20" /><input id="search-button" type="submit" value="Search" size="4" />' + 
'</form>' +
'\n' +
'<div id="search-results" class="search-results" onclick="doCloseSearch()" onkeypress="doCloseSearch">' +
' <h2>Search Results</h2>' +
'</div>'

// Set initial HTML document
document.body.innerHTML = documentBody

// We're going to mock the data request for performance reasons
// and to remove the need for an HTTP server to perform the tests
var jsonData = [
  {
    'categories': [
      'about',
      'documentation'
    ],
    'content': 'About New OldNew Mashup OldNew Mashup Version 1.3.0\nStatus If you wish you can view the Status of New OldNew Mashup on Github Examples of Sites Using This Theme  The C Shore  New OldNew Mashup Demo Site   Example Site /exampleSite contains some example content as per &ldquo;Add a theme to hugoThemes list&rdquo; , including the documentation and a sample of how to use the theme.\n',
    'permalink': 'https://new-oldnew-mashup.com/about/',
    'tags': [
      'about',
      'documentation',
      'introduction'
    ],
    'title': 'About New OldNew Mashup'
  },
  {
    'categories': [
      'theme',
      'documentation',
      'quick-start'
    ],
    'content': 'Quick Start  Obtain the code in one of the following ways:  Grab a release tarball from https://github.com/cshoredaniel/new-oldnew-mashup/releases and place it in your site&rsquo;s &lsquo;themes&rsquo; directory. NB the theme directory must be named &lsquo;new-oldnew-mashup&rsquo;. If you extract from a ZIP or tarball you&rsquo;ll probably have &lsquo;new-oldnew-mashup-&lt;version&gt;&rsquo; and will need to rename it. hugo mod get github.com/cshoredaniel/new-oldnew-mashup to define the use of a Hugo Module . correctly. (Don&rsquo;t do this if you&rsquo;re using the ZIP above).   Add theme = &quot;new-oldnew-mashup&quot; to your &lsquo;config.toml&rsquo; (or the equivalent for YAML or JSON if you use one of those). Generate and view the site:  Generate your site with hugo, and copy the public directory to a web server and browse to the appropriate location on the server. Generate and serve a local live version with',
    'permalink': 'https://new-oldnew-mashup.com/docs/quick-start/',
    'tags': [
      'theme',
      'website',
      'docs',
      'manual',
      'quick-start'
    ],
    'title': 'Quick Start'
  },
  {
    'categories': [
      'theme',
      'documentation',
      'manual'
    ],
    'content': 'Modern high-contrast CSS3 &amp; HTML5 Hugo theme inspired by old-school themes.\nIt attempts to be accessible, private, and responsive.\nThe theme is currently a work in progress, but there are still useful releases from time to time.\nExample Site /exampleSite contains some example content as per &ldquo;Add a theme to hugoThemes list&rdquo; , including the documentation and a sample of how to use the theme.\n',
    'permalink': 'https://new-oldnew-mashup.com/docs/',
    'tags': [
      'theme',
      'website',
      'documentation',
      'manual'
    ],
    'title': 'Docs'
  },
  {
    'categories': [
      'theme',
      'documentation',
      'reference'
    ],
    'content': 'Reference Guide Front Matter The following items in the front matter metdata are handled specially by this theme (in addition to the params further below which are for theming / layout):\n   Key Description     title Used as the tab title (title in &lsquo;head&rsquo; section in the html), as well as the H1 heading that is displayed in the page body as the page title.   date Besides the usual Hugo usage, this is used in the article header and is displayed below categories   copyright Displayed as the article copyright in the page footer   description Displayed below date as brief summary of the article   licenses a list (in YAML list format) of (copyright) license which apply to the article   categories a list of categories (taxonomy) to which the page belongs. Displayed below the article title (title metadata above)   tags A list of tags (taxonomy) which the page has. Displayed after the end of the article.    Enabling Search In your site configuration file add JSON as an output type, and in set the site parameter enable_search = true.\n',
    'permalink': 'https://new-oldnew-mashup.com/docs/reference-guide/',
    'tags': [
      'theme',
      'website',
      'documentation',
      'manual',
      'reference-guide',
      'reference'
    ],
    'title': 'Reference Guide'
  },
  {
    'categories': [
      'accessibility',
      'policy'
    ],
    'content': 'Accessibility Statement When located at primary location The following statements apply to this site when hosted at https://hugo-oldnew-mashup.thecshore.com\nColour Scheme The display colours have been chosen for high contrast. All combinations of foreground and background colour in the theme used on this site should meet or exceed the w3.org&rsquo;s WCAG 2.0 (Web Content Accessibility Guidelines) AAA standard for contrast. In addition, effort has been made to avoid the use of colour alone to provide information (that is colour is an enhancement not a requirement to effectively use and understand the site).\nFont Size Where possible the font size is responsive; on devices with higher resolutions the font size is automatically increased to compensate for what is often a higher DPI.\n',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/accessibility/',
    'tags': [
      'accessibility',
      'policy',
      'a11y',
      'statement',
      'features',
      'contrast',
      'colour'
    ],
    'title': 'Accessibility Statement'
  },
  {
    'categories': [
      'privacy',
      'policy',
      'gdpr'
    ],
    'content': 'Privacy / GDPR Statement When located at primary location The following statements apply to this site when hosted at https://new-oldnew-mashup.thecshore.com\nNo Cookies This site does not use cookies for any purpose.\nNB https://oldwww.thecshore.com does use a cookie in order to enable the high contrast and/or large print features. Once oldwww has been migrated into www.thecshore.com this will no longer be an issue.\n',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/privacy/',
    'tags': [
      'privacy',
      'policy',
      'gdpr',
      'statement'
    ],
    'title': 'Privacy / GDPR Statement'
  },
  {
    'categories': [
      'contact',
      'form'
    ],
    'content': 'Contact Site Operator No contact form available. Please send an email to user \'contact\' at this domain (thecshore.com). If the above form does not work for you please send an email to user &lsquo;contact&rsquo; at this domain (thecshore.com).\n',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/contact/',
    'tags': [
      'contact'
    ],
    'title': 'Contact Form'
  },
  {
    'categories': [
      'theme',
      'documentation',
      'reference'
    ],
    'content': 'Guide to OldNew Mashup Layout HTML HEAD    Part Description     Title Page title   head/theme partial BaseURL, CSS, JS, and metadata for all pages in theme   head/site partial Allows to override / extend head-theme partial for a particular site    head/theme partial    Part Description     rendering metadata charset, viewport, etc   metadata description, keywords, etc   BaseURL (optional) BaseURL definition   CSS links Pull in templatized SCSS to generate site CSS   JS links Javascript for site   Alternative output Non-HTML output    HTML BODY Page Header    Part Description     site-badge The site logo (if it exists) and title as a button that loads the landing page   menubar The dropdown/flyout menu and the search box and results element (the results element is hidden by default)    Site Badge for Page    Part Description     graphics-row The combined set of site-badge-graphic classed images and/or text (one row)   siteid The short text acting as user-visible site identifier (e.g. OldNew Mashup)    Top Bar Menubar    Part Description     menubar-site-menu-list The list that gets styled as a dropdown / flyout menu   search-query ',
    'permalink': 'https://new-oldnew-mashup.com/docs/guide-to-oldnew-mashup-layout/',
    'tags': [
      'theme',
      'website',
      'documentation',
      'manual',
      'reference-guide',
      'reference'
    ],
    'title': 'Guide to Layout'
  },
  {
    'categories': [
      'listing',
      'pages',
      'recent'
    ],
    'content': 'Recent Changes Search Setup Sep 25, 2019 13:47 EDT  Information on configuration of search Read full article for \'Search Setup\'   Guide to Layout Sep 22, 2019 03:06 EDT  Guide to OldNew Mashup Layout Read full article for \'Guide to Layout\'   Quick Start Sep 2, 2019 00:57 EDT  Quick Start Obtain the code in one of the following ways: Grab a release tarball from https://github.com/cshoredaniel/new-oldnew-mashup/releases and place it in your site&rsquo;s &lsquo;themes&rsquo; directory. NB the theme directory must be named &lsquo;new-oldnew-mashup&rsquo;. If you extract from a ZIP or tarball you&rsquo;ll probably have &lsquo;new-oldnew-mashup-&lt;version&gt;&rsquo; and will need to rename it. hugo mod get github.com/cshoredaniel/new-oldnew-mashup to define the use of a Hugo Module . Read full article for \'Quick Start\'',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/recent-additions/',
    'tags': [
      'listing',
      'pages',
      'recent'
    ],
    'title': 'Recent Additions'
  },
  {
    'categories': [
      'listing',
      'pages',
      'recent'
    ],
    'content': 'Recent Changes Search Setup Mar 5, 2020 09:17 EST  Information on configuration of search Read full article for \'Search Setup\'   Site Badge Description Mar 1, 2020 03:32 EST  A large black &lsquo;O&rsquo; with a black &lsquo;N&rsquo; in the middle of the &lsquo;O&rsquo; and black &lsquo;w&rsquo; straddling the right hand stroke of the &lsquo;O&rsquo;. In the landing page it is followed by large text which says, &ldquo;OldNew Mashup&rdquo;.    Guide to Layout Mar 1, 2020 03:32 EST  Guide to OldNew Mashup Layout Read full article for \'Guide to Layout\'   Privacy / GDPR Statement Mar 1, 2020 03:32 EST  Privacy / GDPR Statement When located at primary location The following statements apply to this site when hosted at https://new-oldnew-mashup.thecshore.com No Cookies This site does not use cookies for any purpose. NB https://oldwww.thecshore.com does use a cookie in order to enable the high contrast and/or large print features. Once oldwww has been migrated into www.thecshore.com this will no longer be an issue. Read full article for \'Privacy / GDPR Statement\' ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/recent-changes/',
    'tags': [
      'listing',
      'pages',
      'recent'
    ],
    'title': 'Recent Changes'
  },
  {
    'categories': [
      'theme',
      'documentation',
      'search'
    ],
    'content': 'Search Setup \nBased on information from https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae#gistcomment-2989041\nModified by Daniel F. Dickinson\nInitial setup Search depends on additional output content type of JSON in config.toml\n[outputs] home = [&#34;HTML&#34;, &#34;RSS&#34;, &#34;JSON&#34;] Searching additional fields To search additional fields defined in front matter, you must add it in 2 places.\n ',
    'permalink': 'https://new-oldnew-mashup.com/docs/search/',
    'tags': [
      'theme',
      'website',
      'documentation',
      'search',
      'documentation'
    ],
    'title': 'Search Setup'
  },
  {
    'categories': [
      'listing',
      'pages',
      'recent'
    ],
    'content': 'Recent News Refactor Merge Started Feb 29, 2020 21:00 EST  A great deal of work has gone into a refactor/redesign of the theme, and now it is being merged into mainline. Read full article for \'Refactor Merge Started\'   IE 11 &amp; Mobile Improvements Dec 24, 2019 21:12 EST  Vastly improved IE 11 and mobile styling Read full article for \'IE 11 &amp; Mobile Improvements\' ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/recent-news/',
    'tags': [
      'listing',
      'pages',
      'recent'
    ],
    'title': 'Recent News'
  },
  {
    'categories': [
      'listing',
      'pages',
      'recent'
    ],
    'content': 'Recently Published Events ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/recent-events/',
    'tags': [
      'listing',
      'pages',
      'recent'
    ],
    'title': 'Recent Events'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'A Collection of Lorem Ipsum Texts Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Lorem'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/news/',
    'tags': null,
    'title': 'News'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'A Second Collection of Lorem Ipsum Texts Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Ipsum'
  },
  {
    'categories': [
      'website',
      'theme'
    ],
    'content': 'IE 11 &amp; Mobile Improvements This release brings much better styling on IE 11 and modern mobile devices. The theme can now reasonably be classed as mobile-friendly and responsive. We&rsquo;ve also greatly improved support for the many people who are using the now ancient Internet Explorer 11.\n',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/news/ie11-mobile-improvements/',
    'tags': [
      'website',
      'theme'
    ],
    'title': 'IE 11 & Mobile Improvements'
  },
  {
    'categories': null,
    'content': 'Viverra Justo Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/',
    'tags': null,
    'title': 'Viverra Justo'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'Neque Convallis Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis nunc sed blandit libero volutpat. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Iaculis nunc sed augue lacus viverra vitae congue. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Habitant morbi tristique senectus et netus et. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor magna eget est lorem ipsum dolor. Laoreet id donec ultrices tincidunt arcu non sodales. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Convallis tellus id interdum velit laoreet id. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Neque aliquam vestibulum morbi blandit. Condimentum vitae sapien pellentesque habitant.\n ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/lorem1.3/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Neque Convallis'
  },
  {
    'categories': null,
    'content': 'Description of the Site Logo ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/',
    'tags': null,
    'title': 'Administrivia'
  },
  {
    'categories': [
      'navigation',
      'sitemap'
    ],
    'content': 'A listing of pages on this site.\nAbout New OldNew Mashup   Docs  Quick Start  Reference Guide  Guide to Layout  Search Setup    Lorem  Neque Convallis  Set Amet  Ipsum Dolor  Ullamcorper Dignissum    Ornare Massa  Consectetur Adipiscing    Ipsum  Justo  Facto  Vitae    Factum 13  Factum 10  Factum 11  Factum 12  Factum 7  Factum 8  Factum 9  Factum 5  Factum 6  Factum 2  Factum 3  Factum 4  Factum 1    Emptyfrontmatter  Nofrontmatter  Viverra Justo Nec    Viverra Justo  Suscipit 29  Suscipit 30  Suscipit 25  Suscipit 26  Suscipit 27  Suscipit 28  Suscipit 21  Suscipit 22  Suscipit 23  Suscipit 24  Suscipit 17  Suscipit 18  Suscipit 19  Suscipit 20  Suscipit 12  Suscipit 13  Suscipit 14  Suscipit 15  Suscipit 16  Suscipit 10  Suscipit 11  Suscipit 8  Suscipit 9  Suscipit 5 ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/sitemap/',
    'tags': [
      'navigation',
      'sitemap',
      'listing',
      'website'
    ],
    'title': 'Sitemap'
  },
  {
    'categories': [
      'news',
      'refactor',
      'theme'
    ],
    'content': 'After a great deal of experimental effort with a refactor/redesign of the theme, it&rsquo;s time to start merging into mainline.\nMerged into 1.3.0 to date Behind-the-scenes  We &lsquo;vendor&rsquo; the various third-party modules we use so that all the code used by the theme is now in the theme repo. We handle the &lsquo;meta refresh&rsquo; index.html files generated by the use of aliases when doing testing/CI (we skip them because tidy chokes on them). Reduce the chances of infinite recursion in sitemenu,localnav, etc tree walk and node filtering.  Theme-user Facing  We&rsquo;ve improved the usage of ToCSS so that SCSS proccessing now gives useful filenames and line numbers in addition to eliminating the SCSS partials (as templates) and moving them to actual SCSS in assets. We&rsquo;ve added three &lsquo;linters&rsquo; (SCSS/SASS, Javascript, and Markdown) which are available as &lsquo;sass-lint&rsquo;, &lsquo;eslint&rsquo;, and &lsquo;markdownlint&rsquo;. sass-lint and eslint have been integrated into the CI process. ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/news/refactor-merge-started/',
    'tags': [
      'news',
      'refactor',
      'theme'
    ],
    'title': 'Refactor Merge Started'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/tags/',
    'tags': null,
    'title': 'Tags'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/tags/theme/',
    'tags': null,
    'title': 'theme'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/categories/theme/',
    'tags': null,
    'title': 'theme'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/facto/vitae/',
    'tags': null,
    'title': 'Vitae'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/facto/',
    'tags': null,
    'title': 'Facto'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/factum-13/',
    'tags': null,
    'title': 'Factum 13'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/factum-10/',
    'tags': null,
    'title': 'Factum 10'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/factum-11/',
    'tags': null,
    'title': 'Factum 11'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/factum-12/',
    'tags': null,
    'title': 'Factum 12'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/justo/',
    'tags': null,
    'title': 'Justo'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-29/',
    'tags': null,
    'title': 'Suscipit 29'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-30/',
    'tags': null,
    'title': 'Suscipit 30'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-25/',
    'tags': null,
    'title': 'Suscipit 25'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-26/',
    'tags': null,
    'title': 'Suscipit 26'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-2/',
    'tags': null,
    'title': 'Suscipit 2'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-3/',
    'tags': null,
    'title': 'Suscipit 3'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-4/',
    'tags': null,
    'title': 'Suscipit 4'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/suscipit-1/',
    'tags': null,
    'title': 'Suscipit 1'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/mangi-dolores/quia-non-numquam/mauris/facto/',
    'tags': null,
    'title': 'Facto'
  },
  {
    'categories': null,
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/mangi-dolores/quia-non-numquam/mauris/',
    'tags': null,
    'title': 'Mauris'
  },
  {
    'categories': null,
    'content': 'Quia Non Numquam Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/mangi-dolores/quia-non-numquam/',
    'tags': null,
    'title': 'Quia Non Numquam'
  },
  {
    'categories': null,
    'content': 'Mangi Dolores Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/mangi-dolores/',
    'tags': null,
    'title': 'Mangi Dolores'
  },
  {
    'categories': null,
    'content': 'Dolorem Eum Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/corporis-suscipit/dolorem-eum/',
    'tags': null,
    'title': 'Dolorem Eum'
  },
  {
    'categories': null,
    'content': 'Volutpat Consequat Generated by Lorem Ipsum Generator Mauris nunc Volutpat consequat mauris nunc congue nisi vitae suscipit. Mauris a diam maecenas sed enim. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Massa ultricies mi quis hendrerit dolor magna eget. Tincidunt eget nullam non nisi est sit amet. Sagittis aliquam malesuada bibendum arcu vitae. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. Proin sagittis nisl rhoncus mattis.\nOdio euismod lacinia at quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Interdum velit euismod in pellentesque massa placerat duis. Faucibus scelerisque eleifend donec pretium vulputate. Nisl purus in mollis nunc sed id semper. Integer feugiat scelerisque varius morbi enim nunc. Tempus quam pellentesque nec nam aliquam sem et. Luctus accumsan tortor posuere ac. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Sit amet cursus sit amet dictum sit amet justo donec. Et sollicitudin ac orci phasellus egestas tellus. Imperdiet proin fermentum leo vel orci porta non pulvinar.\n',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/corporis-suscipit/volutpat-consequat/',
    'tags': null,
    'title': 'Valutpat Consequat'
  },
  {
    'categories': [
      'latin',
      'placeholder',
      'history'
    ],
    'content': 'Ut Enim Generated by Lorem Ipsum Generator Section 1.10.32 of Cicero&rsquo;s \u201cDe finibus bonorum et malorum\u201d Quoted from Lorem Ipsum Generator Original Latin text:  Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?\n ',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/quis-nostrum/ut-enim/',
    'tags': null,
    'title': 'Ut Enim'
  },
  {
    'categories': null,
    'content': 'Quis Nostrum Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/viverra-justo/quis-nostrum/',
    'tags': null,
    'title': 'Quis Nostrum'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'Ipsum Dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Nam at lectus urna duis convallis convallis. Est sit amet facilisis magna etiam tempor orci. Enim facilisis gravida neque convallis a cras semper. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Placerat duis ultricies lacus sed turpis tincidunt id. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Et netus et malesuada fames ac. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Hendrerit dolor magna eget est lorem ipsum dolor sit. Amet luctus venenatis lectus magna fringilla. Porttitor lacus luctus accumsan tortor posuere ac ut.\n ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/set-amet/lorem1-1.2/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Ipsum Dolor'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'Ullamcorper Dignissum Lorem Ipsum  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat lacus laoreet non curabitur gravida arcu ac.  Blandit cursus risus at ultrices mi tempus. Nibh tellus molestie nunc non blandit. Iaculis nunc sed augue lacus. Auctor urna nunc id cursus metus aliquam. Consectetur adipiscing elit ut aliquam purus sit amet. Pharetra vel turpis nunc eget lorem. Libero enim sed faucibus turpis in eu.   Id interdum velit laoreet id donec. A iaculis at erat pellentesque adipiscing commodo elit. Mauris pellentesque pulvinar pellentesque habitant.  Ulamcorper Dignissum Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Diam quis enim lobortis scelerisque. Tortor posuere ac ut consequat semper. Varius duis at consectetur lorem donec massa. Ante in nibh mauris cursus mattis molestie a. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Morbi leo urna molestie at. Urna nec tincidunt praesent semper feugiat. Id interdum velit laoreet id. Cras sed felis eget velit aliquet sagittis id consectetur. Odio euismod lacinia at quis risus sed vulputate odio. Volutpat est velit egestas dui id ornare arcu odio ut. Purus ut faucibus pulvinar elementum integer enim. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc.\nFeguiate nibh Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Non sodales neque sodales ut. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Cursus risus at ultrices mi. Bibendum neque egestas congue quisque. Facilisis leo vel fringilla est ullamcorper eget. Malesuada pellentesque elit eget gravida cum sociis. Posuere morbi leo urna molestie at elementum eu facilisis. Diam maecenas sed enim ut sem viverra aliquet eget sit. In est ante in nibh mauris cursus. Cursus euismod quis viverra nibh cras. Nunc mi ipsum faucibus vitae aliquet nec. Odio pellentesque diam volutpat commodo sed egestas egestas. In nibh mauris cursus mattis molestie a iaculis at erat. Purus non enim praesent elementum facilisis leo vel  ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/set-amet/lorem1-1.1/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Ullamcorper Dignissum'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'A Sub-Collection of Lorem Ipsum Texts Generated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/set-amet/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Set Amet'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'Ornare Massa Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras pulvinar mattis nunc sed blandit libero volutpat. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Iaculis nunc sed augue lacus viverra vitae congue. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Habitant morbi tristique senectus et netus et. Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dolor magna eget est lorem ipsum dolor. Laoreet id donec ultrices tincidunt arcu non sodales. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Convallis tellus id interdum velit laoreet id. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Neque aliquam vestibulum morbi blandit. Condimentum vitae sapien pellentesque habitant.\nOrnare massa eget egestas purus viverra accumsan in nisl. Ut tortor pretium viverra suspendisse potenti. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Metus aliquam eleifend mi in nulla. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Odio ut sem nulla pharetra diam sit. Mattis enim ut tellus elementum sagittis. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. \nGenerated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/lorem1.2/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Ornare Massa'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'Consectetur Adipiscing Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris. Vestibulum lorem sed risus ultricies tristique nulla. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ullamcorper a lacus vestibulum sed arcu non odio. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Laoreet non curabitur gravida arcu ac tortor dignissim. Auctor augue mauris augue neque gravida in fermentum. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Aenean vel elit scelerisque mauris. At erat pellentesque adipiscing commodo. Neque laoreet suspendisse interdum consectetur libero id faucibus. Ultrices gravida dictum fusce ut placerat. Enim ut sem viverra aliquet eget. Mauris a diam maecenas sed enim ut sem viverra aliquet. Sed vulputate mi sit amet mauris commodo quis imperdiet. Sodales ut eu sem integer vitae. Nec feugiat nisl pretium fusce id velit ut tortor. Elementum tempus egestas sed sed risus. Tristique senectus et netus et malesuada fames ac turpis egestas.\nGenerated by Lorem Ipsum Generator ',
    'permalink': 'https://new-oldnew-mashup.com/lorem/lorem1.1/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Consectetur Adipiscing'
  },
  {
    'categories': [
      'licenses',
      'legal'
    ],
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/licenses/cc0-1.0/',
    'tags': [
      'licenses',
      'open source'
    ],
    'title': 'CC0-1.0'
  },
  {
    'categories': [
      'hugo',
      'theme',
      'html',
      'css',
      'test'
    ],
    'content': '',
    'permalink': 'https://new-oldnew-mashup.com/',
    'tags': null,
    'title': 'CShore OldNew Mashup Theme Test Site'
  },
  {
    'categories': null,
    'content': 'Empty frontmatter This page has an empty frontmatter section.\n',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/emptyfrontmatter/',
    'tags': null,
    'title': ''
  },
  {
    'categories': null,
    'content': 'No frontmatter This page has no frontmatter section.\n',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/nofrontmatter/',
    'tags': null,
    'title': ''
  },
  {
    'categories': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'content': 'Screenshot of the OldNew Mashup Theme exampleSite About Page. It consists of a a header row which has a site badge on the left and text &lsquo;buttons&rsquo; with links to site sections on the right. The rest of the page is in three columns of text, the middle one being largest. The top of this larger section and the left column has a large title &lsquo;About The C Shore&rsquo; with ridged borders above and below. In the left column is a table of contents. Is a series of paragraphs. The smaller right side column contains a navigation menu, &lsquo;News&rsquo;, and &lsquo;Recent Changes&rsquo; section with titles and summaries from various pages on the site.\n   ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/splash-images/oldnew-mashup-about-page-description/',
    'tags': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'title': 'OldNew Mashup About Page Description'
  },
  {
    'categories': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'content': 'Screenshot of an current version of OldNew Mashup exampleSite Homepage which is various shades of grey, white, and black, with a header row which has a site badge on the left and text &lsquo;buttons&rsquo; with links to site sections. This homepage contains a large white serif font on a light grey background with the title of the site. Below that is a black box with light grey text with a one-liner and blurb about the the site. In the middle of page is a light grey text box with black text containing another blurb about the site. Further down, is a small medium grey text box with off white text that says &ldquo;Enter&rdquo;. At the bottom of the page is a placeholder for a catchy phrase with a footnote. The bottom of the screen is missing from the screenshot. The background is a medium dark grey.\n   ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/splash-images/oldnew-mashup-homepage-description/',
    'tags': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'title': 'OldNew Mashup Homepage Description'
  },
  {
    'categories': [
      'description',
      'image',
      'logo'
    ],
    'content': 'A large black &lsquo;O&rsquo; with a black &lsquo;N&rsquo; in the middle of the &lsquo;O&rsquo; and black &lsquo;w&rsquo; straddling the right hand stroke of the &lsquo;O&rsquo;. In the landing page it is followed by large text which says, &ldquo;OldNew Mashup&rdquo;.\n   ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/site-badge-description/',
    'tags': [
      'description',
      'image',
      'logo'
    ],
    'title': 'Site Badge Description'
  },
  {
    'categories': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'content': 'A screen shot of a recent version of The C Shore About Page. It consists of a a header row which has a site badge on the left and text &lsquo;buttons&rsquo; with links to site sections on the right. The rest of the page is in two columns of text, the leftmost being much larger. The top of this larger section has a large title &lsquo;About The C Shore&rsquo; with ridged borders above and below. In the main text area is a headshot of Daniel Dickinson, then a series of paragraphs. The smaller right side column contains a navigation menu, &lsquo;News&rsquo;, and &lsquo;Recent Changes&rsquo; section with titles and summaries from various pages on The C Shore.\n   ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/splash-images/thecshore-about-page-description/',
    'tags': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'title': 'The C Shore About Page Description'
  },
  {
    'categories': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'content': 'A screen shot of a recent version of a search on The C Shore. It consists of a a header row which has a site badge on the left and text &lsquo;buttons&rsquo; with links to site sections on the right. The rest of the page is a light purple-blue background with dark text. The text consists of headings which are links (underlined) combined with summaries of matches of pages from the site.\n   ',
    'permalink': 'https://new-oldnew-mashup.com/siteentry/splash-images/thecshore-search-results-description/',
    'tags': [
      'image',
      'description',
      'back-end',
      'screenshot'
    ],
    'title': 'The C Shore Search Results Description'
  },
  {
    'categories': [
      'demo',
      'placeholder'
    ],
    'content': 'Viverra Justo Nec Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit ut aliquam purus sit. Cras ornare arcu dui vivamus arcu felis bibendum ut. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Vitae tempus quam pellentesque nec. Consequat id porta nibh venenatis. Cursus sit amet dictum sit amet. Rhoncus urna neque viverra justo nec ultrices dui sapien. Sit amet mauris commodo quis imperdiet.\nLorem Ipsum Viverra justo nec ultrices dui sapien eget. Ut faucibus pulvinar elementum integer enim neque. Congue quisque egestas diam in arcu cursus. Nibh praesent tristique magna sit amet purus gravida quis blandit. Accumsan lacus vel facilisis volutpat est velit egestas dui. Tincidunt id aliquet risus feugiat in ante metus. Turpis massa tincidunt dui ut ornare lectus. Adipiscing elit pellentesque habitant morbi. Ullamcorper sit amet risus nullam. Turpis egestas integer eget aliquet nibh. Turpis nunc eget lorem dolor sed viverra. Interdum velit laoreet id donec ultrices tincidunt arcu non sodales.\n ',
    'permalink': 'https://new-oldnew-mashup.com/ipsum/lorem2.1/',
    'tags': [
      'demo',
      'lorem ipsum',
      'dummy',
      'placeholder'
    ],
    'title': 'Viverra Justo Nec'
  }
]

let XMLHttpRequestObj

let whendone = function () {
  return
}

const mockXHRsend = jest.fn().mockImplementation(function () {
  XMLHttpRequestObj.onload()
  whendone()
})

const mockXHRopen = jest.fn().mockImplementation(function (method, uri, async) { // eslint-disable-line no-unused-vars
  return
})

XMLHttpRequestObj = {
  open: mockXHRopen,
  send: mockXHRsend,
  onload: function () { return },
  onerror: function () { return },
  status: 200,
  responseText: JSON.stringify(jsonData)
}

const XMLHttpRequest = jest.fn().mockImplementation(function () { // eslint-disable-line no-redeclare
  return XMLHttpRequestObj
})

global.XMLHttpRequest = XMLHttpRequest

let indexurl = 'http://localhost:9000/index.json'
global.indexurl = indexurl

let fuseOptions = { // See Fuse.js for details
  distance: 1000,
  findAllMatches: true,
  shouldSort: true,
  includeMatches: true,
  minMatchCharLength: 1,
  threshold: 0.5,  // default of 0.6 matches too much
  tokenize: false,
  keys: [{
    name: 'title',
    weight: 0.3
  },
  {
    name: 'content',
    weight: 0.4
  },
  {
    name: 'tags',
    weight: 0.1
  },
  {
    name: 'categories',
    weight: 0.1
  }
  ]
}

describe('When searching website search contents', function() {
  test('Searching for \'lorem ipsum dolor sit amet\' should populate search-results', function(done) {
    whendone = done
    fuseOptions.minMatchCharLength =  (0.8 * ('lorem ipsum dolor sit amet'.length))
    executeSearch('lorem ipsum dolor sit amet', fuseOptions)
    expect(mockXHRsend).toHaveBeenCalled()
    expect(document.getElementById('search-result-0')).toBeDefined()
    expect(document.getElementById('search-result-0').innerHTML.toLowerCase()).toMatch(/lorem ipsum dolor sit amet/m)
    expect(document.getElementById('search-results').innerHTML.toLowerCase()).toMatch(/totam rem aperiam ea/m)
  })
})

