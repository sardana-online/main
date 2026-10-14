import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sardana Online",
  description: "Онлайн-школа бисероплетения",
  lang: 'ru-RU',
  base: '/main/',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Уроки', link: '/lessons/' },
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Жми уже быстрее!',
        items: [
          { text: 'НАЖМИ СЮДА', link: '/' },
        ]
      }
    ]
  }
})
