<template>
  <header class="header box">
    <!-- Language Switcher -->
    <div class="header__lang">
      <LanguageSwitcher />
    </div>

    <div class="header__main">
      <!-- Left -->
      <div class="header__left">
        <div class="header__photo">
          <img
            class="header__photo-img"
            :src="profileImage"
            alt="Chaoyu Chen"
          />
        </div>
        <div class="header__base-info">
          <h4 class="title titl--h4">{{ t('header.title') }}</h4>
          <div class="status">{{ t('header.status') }}</div>
        </div>
      </div>

      <!-- Right -->
      <div class="header__right">
        <ul class="header__contact">
          <li>
            <span class="overhead">{{ t('header.email') }}</span>
            chaoyuchen0705@gmail.com
          </li>
          <li>
            <span class="overhead">{{ t('header.location') }}</span>
            {{ t('header.locationValue') }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { getAssetUrl } from '@/utils/image'

const { t } = useI18n()
const profileImage = getAssetUrl('img/IMG_4890_HEIC.avif')
</script>

<style scoped>
.header {
  position: relative;
  padding-top: 40px; /* 为语言切换器留出空间 */
}

.header__lang {
  position: absolute;
  top: 15px;
  right: 30px;
}

.header__main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.header__contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header__contact li {
  margin-bottom: 8px;
}

.status {
  white-space: nowrap; /* 添加这行确保状态文本不换行 */
}

/* 响应式调整 */
@media (max-width: 767px) {
  .header {
    padding-top: 30px;
  }

  .header__lang {
    top: 10px;
    right: 20px;
  }

  .header__main {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header__right {
    margin-top: 20px;
  }
}
</style>
