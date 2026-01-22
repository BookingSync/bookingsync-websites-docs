// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
  /**
   * This is the main configuration object.
   * We'll import this into `src/pages/index.js` so that we can initialize
   * our theme extension only once.
   *
   * @see https://docusaurus.io/docs/api/docusaurus-config
   */
const config = {
  title: 'Smily Websites Docs',
  tagline: 'Themes, templates, and Liquid reference for Smily websites.',
  favicon: 'img/smily-icon.png',

  // Set the production url of your site here
  url: 'https://website.docs.bookingsync.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'BookingSync', // Usually your GitHub org/user name.
  projectName: 'bookingsync-websites-docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // Enable indexing in development
        indexDocs: true,
        indexPages: true,
        language: "en",
        hashed: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: 'docs',
          routeBasePath: '/',
          editUrl: 'https://github.com/BookingSync/bookingsync-websites-docs/edit/main/docs/',
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/smily-logo.svg',
      navbar: {
        title: 'Smily',
        logo: {
          alt: 'Smily logo',
          src: 'img/smily-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'referenceSidebar',
            position: 'left',
            label: 'Reference',
          },
          {
            label: 'Become a Partner',
            href: 'https://share.hsforms.com/1z4oOPKI6STG4UkfmpwJuTg312g0', 
            position: 'left', 
          },
          {
            label: 'Smily.com',
            href: 'https://smily.com', 
            position: 'left',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Website Themes Reference',
                href: 'https://developers.bookingsync.com',
              },
              {
                label: 'Smily API Docs',
                href: 'https://developers.bookingsync.com/smily-api-docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Engineering Blog',
                href: 'https://www.smily.com/engineering',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Become a Partner',
                href: 'https://share.hsforms.com/1z4oOPKI6STG4UkfmpwJuTg312g0',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Smily Website Docs`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
