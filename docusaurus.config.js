// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const spdColorTheme = {
  plain: {
    color: "#E3000F",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mitte II: Alexanderplatz',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/abteilungs-page-exp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JohannesRu/abteilungs-page-exp/edit/main',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Mitte II: Alexanderplatz',
        logo: {
          alt: 'My Site Logo',
          src: 'img/SPD-Logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'wir/intro',
            position: 'left',
            label: 'Wir',
          },
          {to: '/machmit', label: 'Mach mit!', position: 'left'},
          {
            type: 'dropdown',
            label: 'Mehr SPD',
            position: 'right',
            items: [
              {
                href: 'https://www.spd.de',
                label: 'Bundesverband',
              },
              {
                href: 'https://www.spd.berlin',
                label: 'Landesverband Berlin',
              },
              {
                href: 'https://www.spd-berlin-mitte.de',
                label: 'Berlin-Mitte',
              }
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `
          <a href="https://www.instagram.com/spdberlin_alex/"><img src="/abteilungs-page-exp/img/SPD_Instagram_rot-frei_RGB.png"></img></a>   
          <b>SPD Abteilung Mitte II Alexanderplatz</b><span>  </span>      
          <a href="/abteilungs-page-exp/docs/impressum">Impressum</a> - 
          <a href="/abteilungs-page-exp/docs/datenschutz">Datenschutz</a>`,
      },
      prism: {
        theme: spdColorTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    scripts: [{src: 'http://127.0.0.1:8000/js/script.local.js', defer: true, 'data-domain': 'localhost'}],
};

module.exports = config;
