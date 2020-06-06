module.exports = {
  title: 'Pengu',
  tagline: 'a Library for Deep Learning in Computer Vision',
  url: 'https://peachang.github.io/pengu',
  baseUrl: '/pengu/',
  favicon: 'img/logo.png',
  organizationName: 'peachanG', // Usually your GitHub org/user name.
  projectName: 'pengu', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pengu TOP',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/peachanG/pengu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Pengu Docs, Built with Docusaurus v2.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
