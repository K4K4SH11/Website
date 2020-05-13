module.exports = {
  title: 'RoWifi',
  tagline: 'The Bind-Oriented Roblox-Discord Verification Bot',
  url: 'https://rowifi.now.sh',
  baseUrl: '/',
  favicon: 'img/RoWifiLogo.ico',
  organizationName: 'RoWifi HQ',
  projectName: 'website',
  themeConfig: {
    navbar: {
      title: 'RoWifi',
      logo: {
        alt: 'RoWifi Logo',
        src: 'img/RoWifiLogo.svg',
      },
      links: [
        {
          to: 'docs/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/RoWifi-HQ/Docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/h4BGGyR',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://patreon.com/rowifi',
          label: 'Premium',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
