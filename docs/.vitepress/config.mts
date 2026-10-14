import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Онлайн-школа Sardana",
  description: "Добро пожаловать!",
  lang: 'ru-RU',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Уроки', link: '/lections/' },
    ],
    search: {
      provider: 'local'
    }
  }
})
