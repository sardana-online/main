import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Sardana Online",
  description: "Онлайн-школа бисероплетения",
  lang: 'ru-RU',
  base: '/main/',

  appearance: false, 

  themeConfig: {
    nav: [
      { text: 'Модули', link: '/lessons/' },
    ],
    search: {
      provider: 'local'
    }
  }
})
