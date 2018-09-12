module.exports = {
  base: '/',
  title: '岑超超的个人博客',
  description: '岑超超的个人博客 <Cen Chaochao\'s blog>',
  head: [
    ['link', { rel: 'icon', href: '/heroImage.png' }]
  ],

  host: 'localhost',
  port: 8080,
  serviceWorker: true, // need HTTPs

  themeConfig: {
    nav: [
      {
        text: '笔记',
        items: [
          { text: 'CSS', link: '/Note/CSSNote/' },
          { text: 'JavaScript', link: '/Note/JavaScriptNote/' },
          { text: 'Vue', link: '/Note/VueNote/test1' }
        ]
      },
      { text: '关于', link: '/About/' },
      { text: 'GitHub', link: 'https://github.com/cenchaochao'}
    ],
    sidebar: {
      '/Note/CSSNote/': [
        ''
      ],
      '/Note/JavaScriptNote/': [
        ''
      ],
      '/Note/VueNote/': [
        {
          title: 'group1',
          collapsable: false,
          children: [
            'test1',
            'test2'
          ]
        },
        {
          title: 'group2',
          collapsable: false,
          children: [
            'test3',
            'test4'
          ]
        }
      ]
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    lineNumbers: true
  }
}