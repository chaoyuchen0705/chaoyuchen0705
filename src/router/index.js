import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: ProjectDetailView,
      props: true,
    },
    // 添加一个通配符路由，重定向到首页
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
