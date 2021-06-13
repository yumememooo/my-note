/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "YumeMemooo's Note",
  tagline: 'Dinosaurs are cool',
  url: 'https://yumememooo.github.io',
  baseUrl: '/my-note/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yumememooo', // Usually your GitHub org/user name.
  projectName: 'my-note', // Usually your repo name.
  themeConfig: {

    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        '☞這裡是暫存的隨筆草稿區，另有建立整理後的文章可以進入☆主網站 <a target="_blank" rel="noopener noreferrer" href="https://yumememooo.github.io/"☆> yumememooo</a>☆',
      backgroundColor: '#82e675', // Defaults to `#fff`.
      textColor: '#050505', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },

    navbar: {
      title: "YumeMemooo's Note",
      logo: {
        alt: 'My Note Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'All Notes',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/yumememooo',
          label: 'My Github',
          position: 'right',
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'About Me',
              href: 'https://yumememooo.github.io/about/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yumememooo',
            },
          ],
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
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              label: 'GitHub',
              href: 'https://github.com/yumememooo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} YumeMemooo, Inc. Built with Docusaurus.`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/yumememooo/my-note/edit/master/',
          showLastUpdateTime: true,

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yumememooo/my-note/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
