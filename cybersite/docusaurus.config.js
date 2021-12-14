// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WWU Cybersecurity Club',
  tagline: 'Welcome to the website!',
  url: 'https://wwucyber.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  organizationName: 'wwucyber', // Usually your GitHub org/user name.
  projectName: 'wwucyber.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        colorMode: {
            defaultMode: 'dark',
        },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Home Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Posts', position: 'left'},
          {to: '/schedule', label: 'Schedule', position: 'left'},
          {
              label: 'About',
              position: 'left',
              type: 'dropdown',
              items: [
                  {
                      label: 'About The Club',
                      href: '/info',
                  },
                  {
                      label: 'Officers',
                      href: '/officers',
                  },
                  {
                      label: 'About WWU Cybersecurity',
                      href: '/about_wwu'
                  },
                  {
                      label: 'Contact Us',
                      href: '/contact',
                  },
              ],
          },
          /*{
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
        ],
      },
      footer: {
        //commented out so override in custom.css works
        //style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Western Involvement Network',
                href: 'https://win.wwu.edu/organization/cyber',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/hXs2NgTYP5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                  label: 'Contact Us',
                  to: '/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wwucyber',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WWU Cybersecurity Club. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
