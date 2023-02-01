const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Swimm Developer Community',
  tagline: 'Swimm Dev Docs',
  url: 'https://docs.swimm.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'swimmio', // Usually your GitHub org/user name.
  projectName: 'docs.swimm.io', // Usually your repo name.
  titleDelimiter: '🏊',
  customFields: {},
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/swimmio/docs.swimm.io/edit/main/',
        },
        blog: {
          id: 'changelog',
          routeBasePath: 'changelog',
          path: './changelog',
          showReadingTime: true,
          blogTitle: 'Swimm Changelog And Announcements',
          blogDescription: 'Changelog',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Previous Posts',
          editUrl: 'https://github.com/swimmio/docs.swimm.io/edit/main/changelog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'UA-140447049-1',
          anonymizeIP: false,        
        },
      }),
    ],
  ],
  // see https://docusaurus.io/docs/api/docusaurus-config#scripts
  scripts: 
  [
    {
      src:
        '/js/tags.js',
        async: false,
    }
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: '/',
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/faq',
            from: '/frequentlyaskedquestions',
          },
          {
            to: '/security',
            from: '/privacyandsecurity',
          },
          {
            to: '/new-to-swimm/demo-repo',
            from: '/new-to-swimm/demo-workspace',
          },
        ],
        createRedirects(existingPath) {
          return [
            '/docs' + existingPath
          ];
        },
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      /*
      announcementBar: {
        id: 'wip',
        content:
          '<b>This is a preview of Swimm\'s new documentation portal. It is not yet ready for use.</b>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      */
      navbar: {
        title: '',
        logo: {
          alt: 'Swimm Documentation',
          src: 'img/logo.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          //{type: 'doc',docId: 'Welcome', label: 'Documentation', position: 'left',},
          //{to: '/faq',label: 'FAQ',position: 'left',},
          //{to: '/security',label: 'Privacy & Security',position: 'left',}
          //{to: '/support',label: 'Support', position: 'right'},
          //{to: '/community',label: 'Community',position: 'right',},
          {
            to: '/changelog', 
            label: 'Changelog', 
            position: 'right'
          },
          {
            href: 'https://github.com/swimmio/docs.swimm.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://app.swimm.io',
            label: 'Log In',
            position: 'right',
          },
          //{href: 'https://swimm.io/blog/',label: 'Blog',position: 'right',},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Using Swimm',
            items: [
              {
                label: 'Quickstart',
                to: '/getting-started-guide',
              },
              {
                label: 'Case Studies',
                href: 'https://swimm.io/case-studies',
              },
              {
                label: 'Pricing',
                href: 'https://swimm.io/pricing',
              },
              {
                label: 'Support',
                to: '/support',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Portal',
                to: '/community',
              },
              {
                label: 'Community Slack Channel',
                href: 'https://swimm.io/slack',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/swimm',
              },
            ],
          },
          {
            title: 'Swimm Socially',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/swimm_io',
              },
              {
                label: 'Github',
                href: 'https://github.com/swimmio'
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC-icYrmhtL3yYxaI0TnL7Lg'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/swimm-io/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Swimm.io',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/swimm.io/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms Of Service',
                href: 'https://swimm.io/legal/terms-of-service/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://swimm.io/legal/privacy-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Swimm Logo',
          src: 'img/swimm_logo_white.svg',
          href: 'https://swimm.io',
        },
        copyright: `
        Copyright © ${new Date().getFullYear()} Swimm, Inc. Built with Docusaurus and automatically kept up to date using <a href ="https://swimm.io/">Swimm</a>.<br />
        Text Content Licensed Under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a> 
        with <a href="https://wiki.creativecommons.org/wiki/best_practices_for_attribution">Attribution Required</a>.<br />
        Code Snippets & Configuration Examples Are Also Licensed Under <a href="https://opensource.org/licenses/MIT">The MIT License</a>.<br />`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      /*
      googleAnalytics: {
        trackingID: 'UA-140447049-1',
        anonymizeIP: true,
      },
      */
    }),
});