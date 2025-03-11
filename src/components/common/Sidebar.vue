<template>
  <aside class="col-12 col-md-12 col-lg-2">
    <div class="sidebar box sticky-column">
      <!-- Nav -->
      <ul class="nav">
        <li class="nav__item">
          <router-link :to="{ name: 'about' }" active-class="active">
            <i class="icon-user"></i>{{ t('nav.about') }}
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'resume' }" active-class="active">
            <i class="icon-file-text"></i>{{ t('nav.resume') }}
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'projects' }" active-class="active">
            <i class="icon-book-open"></i>{{ t('nav.projects') }}
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
