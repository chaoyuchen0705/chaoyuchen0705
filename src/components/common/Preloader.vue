<template>
  <div class="preloader">
    <div class="preloader__wrap">
      <div class="circle-pulse">
        <div class="circle-pulse__1"></div>
        <div class="circle-pulse__2"></div>
      </div>
      <div class="preloader__progress">
        <span :style="{ width: `${progress}%` }"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const progress = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    progress.value += 5
    if (progress.value >= 100) {
      clearInterval(interval)
    }
  }, 50)
})
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.preloader__spinner {
  width: 50px;
  height: 50px;
  border: 3px solid var(--secondary-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
