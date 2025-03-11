<template>
  <Preloader v-if="isLoading" />

  <!-- Scroll Line -->
  <div class="scroll-line" :style="{ width: `${scrollPercentage}%` }"></div>

  <main class="main">
    <!-- Header Image -->
    <div class="header-image">
      <div
        class="js-parallax"
        ref="parallaxEl"
        :style="{
          transform: `translateY(${parallaxY}px)`,
          backgroundImage: `url(${headerImage})`,
        }"
      ></div>
    </div>

    <!-- Container -->
    <div class="container gutter-top">
      <!-- Header -->
      <Header />

      <!-- Content -->
      <div class="row sticky-parent">
        <!-- Sidebar -->
        <Sidebar />

        <!-- Content -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useScroll } from '@vueuse/core'
import Header from './components/common/Header.vue'
import Sidebar from './components/common/Sidebar.vue'
import Preloader from './components/common/Preloader.vue'
import { getAssetUrl } from './utils/image'
import useProjectStore from '@/store/modules/project'

// 使用工具函数获取图片 URL
const headerImage = getAssetUrl('img/image_header.jpg')

// 预加载状态
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 2000)

// 滚动指示器
const { y } = useScroll(window)
const scrollPercentage = computed(() => {
  const height = document.documentElement.scrollHeight - window.innerHeight
  return Math.min(100, Math.max(0, (y.value / height) * 100))
})

// 视差效果
const parallaxEl = ref(null)
const parallaxY = ref(0)

const handleScroll = () => {
  const scrollPosition = window.scrollY
  parallaxY.value = scrollPosition * 0.3
}

const loadGlobalData = () => {
  const projectStore = useProjectStore()
  projectStore.initializeProjects()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  loadGlobalData()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
