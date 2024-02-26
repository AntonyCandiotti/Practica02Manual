// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual Facturador',
  tagline: 'Cómo instalar un Facturador en Linux',
  favicon: '/static/img/Facturador.png',

  // Set the production url of your site here
  url: 'https://antonycandiotti.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Practica02Manual/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AntonyCandiotti', // Usually your GitHub org/user name.
  projectName: 'Practica02Manual', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Manual',
        logo: {
          alt: 'My Site Logo',
          src: 'data:image/jpeg;base64,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',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Autor',
            items: [
              {
                label: 'Github-Repositorio',
                href: 'https://github.com/AntonyCandiotti/Practica02Manual',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              
            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'GitHub',
                href: 'https://github.com/AntonyCandiotti',
              },
            ],
          },
        ],
        copyright: `Hecho por Antony Cristian Candiotti Maihua.`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
