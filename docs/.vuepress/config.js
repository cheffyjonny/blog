const routes = [
  "Vue",
  "React",
  "TS",
  "etc",
  "Playground",
  "Logic"
];

const createSidebar = () => {
  const sidebar = {};
  for (const route of routes) {
    Object.assign(sidebar, require("../" + route));
  }
  return sidebar;
};


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Step By Step',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Personal notepad for understanding than memorizing',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'React',
        link: '/React/',
      },
      {
        text: 'TS',
        link: '/TS/'
      },
      {
        text: 'Vue',
        link: '/Vue/'
      },
      {
        text: 'Playground',
        link: '/Playground/'
      },
      {
        text: 'Logic',
        link: '/Logic/'
      },
      {
        text: 'etc',
        link: '/etc/'
      },
      {
        text: 'Info',
        items: [
          { text: 'Github', link: 'https://v1.vuepress.vuejs.org' },
          { text: 'Contact', link: 'https://github.com/cheffyjonny/blog/issues'  }
        ]
      }
    ],
    sidebar: createSidebar(),
    lastUpdated: "Last updated"
  },
  base: "/blog/",
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/plugin-back-to-top'],
    ['@vuepress/plugin-medium-zoom'],
    ['@vuepress/last-updated'],
    ['@vuepress/back-to-top'],
    [
      '@adamdehaven/vuepress-plugin-custom-tooltip',
      {
        name: 'VueCustomTooltip',
        color: '#fff',
        background: '#000',
        borderRadius: 100,
        fontWeight: 400,
      },
    ],
  ]
}
