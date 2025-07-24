import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenPSG Docs',
  tagline: 'A polysomnography platform for sleep research.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.openpsg.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        theme: {
         // customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OpenPSG Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs'},
        {href: 'https://github.com/OpenPSG/OpenPSG', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} The OpenPSG Authors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
