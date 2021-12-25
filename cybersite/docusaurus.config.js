// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WWU Cybersecurity Club',
  tagline: 'Official Website of the WWU Cybersecurity Club',
  url: 'https://wwucyber.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
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
        highlightSearchTermsOnTargetPage: true,
        hashed: true,
        language: ["en"],
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
          editUrl: 'https://github.com/wwucyber/wwucybersite/edit/main/cybersite',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/wwucyber/wwucybersite/edit/main/cybersite/blog',
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
            defaultMode: 'light',
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
                      href: 'https://www.wwu.edu/majors/cybersecurity'
                  },
              ],
          },
          {to: '/blog/tags/announcement', label: 'Announcements', position: 'right'},
          {to: '/achievements', label: 'Achievements', position: 'right'},
          {to: '/contact', label: 'Contact Us', position: 'right'},
        ],
      },
      footer: {
        //commented out so override in custom.css works
        //style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Utility Cheat Sheets',
                to: '/docs/cheatsheet/intro',
              },
              {
                label: 'System Hardening Checklist',
                to: '/docs/checklist/intro',
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
                label: 'Discord Server',
                href: 'https://discord.com/invite/hXs2NgTYP5',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'WWUCSC on GitHub',
                href: 'https://github.com/wwucyber',
              },
              {
                label: 'Study Cybersecurity at WWU',
                href: 'https://www.wwu.edu/majors/cybersecurity',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'What is Cybersecurity?',
                href: 'https://www.ibm.com/topics/cybersecurity',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} WWU Cybersecurity Club • Generated with <a href="https://docusaurus.io"> Docusaurus </a> • Last Built ${new Date().toJSON().slice(0,10).replace(/-/g,'.')} UTC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'], //add support for powershell code highlighting
      },
    }),
};

module.exports = config;
