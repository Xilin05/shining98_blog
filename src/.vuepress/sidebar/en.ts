import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/': [
    '',
    {
      icon: 'discover',
      text: '技术拓展',
      prefix: 'technical_expansion/',
      link: 'technical_expansion/',
      children: 'structure'
    },
    {
      icon: 'discover',
      text: '技术方案',
      prefix: 'technical_proposal/',
      link: 'technical_proposal/',
      children: 'structure'
    }
    // {
    //   icon: "discover",
    //   text: "Demo",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Articles",
    //   icon: "note",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // 'intro',
    // 'slides'
  ]
})
