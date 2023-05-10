import { navbar } from 'vuepress-theme-hope'

export const enNavbar = navbar([
  '/',
  { text: '技术方案', icon: 'discover', link: '/technical_proposal/' },
  {
    text: '技术拓展',
    icon: 'edit',
    prefix: '/technical_expansion/',
    children: [
      {
        text: 'TypeScript',
        icon: 'edit',
        prefix: 'typescript/',
        children: [{ text: 'Apple1', icon: 'edit', link: '1' }, '3']
      }
      // { text: 'Cherry', icon: 'edit', link: 'cherry' },
      // { text: 'Dragon Fruit', icon: 'edit', link: 'dragonfruit' },
      // 'tomato',
      // 'strawberry'
    ]
  },
  {
    text: '代码仓库',
    icon: 'github',
    children: [
      {
        text: 'Github',
        link: 'https://github.com/Xilin05'
      },
      {
        text: 'Gitee',
        link: 'https://gitee.com/ling0512'
      }
    ]
  }
])
