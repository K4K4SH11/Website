module.exports = {
  title: 'RoWifi',
  tagline: 'The Bind-Oriented Roblox-Discord Verification Bot',
  url: 'https://rowifi.now.sh',
  baseUrl: '/',
  favicon: 'img/RoWifiLogo.ico',
  organizationName: 'RoWifi HQ',
  projectName: 'website',
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-166638278-1',
      anonymizeIP: true
    },
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
          href: 'https://github.com/RoWifi-HQ',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.com/oauth2/authorize?client_id=508968886998269962&scope=bot&permissions=402672704',
          label: 'Invite',
          position: 'right'
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
  ]
};
