import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: localStorage.getItem('locale') || 'en', // 默认语言改为英文
  fallbackLocale: 'en', // 回退语言
  messages: {
    en,
    zh,
  },
})

export default i18n
