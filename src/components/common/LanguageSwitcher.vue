<template>
  <div class="language-switcher" ref="dropdownRef">
    <button class="dropdown-toggle" @click="toggleDropdown">
      {{ currentLocale === 'en' ? t('language.en') : t('language.zh') }}
      <i class="icon-chevron-down"></i>
    </button>
    <ul class="dropdown-menu" :class="{ show: isOpen }">
      <li>
        <button
          class="dropdown-item"
          :class="{ active: currentLocale === 'en' }"
          @click="changeLocale('en')"
        >
          {{ t('language.en') }}
        </button>
      </li>
      <li>
        <button
          class="dropdown-item"
          :class="{ active: currentLocale === 'zh' }"
          @click="changeLocale('zh')"
        >
          {{ t('language.zh') }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isOpen = ref(false)
const dropdownRef = ref(null)

const currentLocale = computed(() => locale.value)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
  isOpen.value = false
}

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 4px 10px;
  color: #666;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 90px;
  justify-content: space-between;
}

.dropdown-toggle:hover {
  background: #f5f5f5;
  border-color: #d0d0d0;
}

.icon-chevron-down {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.dropdown.show .icon-chevron-down {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  display: none;
  min-width: 90px;
  margin-top: 5px;
  padding: 8px 0;
  list-style: none;
}

.dropdown-menu.show {
  display: block;
  animation: fadeIn 0.2s ease;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  border: none;
  background: none;
  color: #666;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  color: #0d86ff;
}

.dropdown-item.active {
  color: #0d86ff;
  background-color: #e6f2ff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 移动端优化 */
@media (max-width: 767px) {
  .language-switcher {
    top: 10px;
    right: 10px;
  }

  .dropdown-toggle {
    padding: 3px 8px;
    font-size: 12px;
    min-width: 80px;
  }
}
</style>
