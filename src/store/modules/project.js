import { defineStore } from 'pinia'
import i18n from '@/i18n'
import { watch } from 'vue'

const projects = JSON.parse(localStorage.getItem('projects'))

const useProjectStore = defineStore('project', {
  state: () => ({
    projects: projects || [],
  }),
  actions: {
    initializeProjects() {
      this.projects = i18n.global.tm('projects.items')
      localStorage.setItem('projects', JSON.stringify(this.projects))
      console.log(
        '🎯🎯🎯 this.projects: ',
        JSON.parse(JSON.stringify(this.projects))
      )
    },
  },
})

// 监听语言变化
watch(
  () => i18n.global.locale.value,
  () => {
    const store = useProjectStore()
    store.initializeProjects()
  }
)

export default useProjectStore
