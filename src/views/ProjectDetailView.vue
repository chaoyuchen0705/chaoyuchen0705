<template>
  <div class="col-12 col-md-12 col-lg-10">
    <div class="box box-content">
      <!-- Project -->
      <div class="pb-3">
        <header class="header-post">
          <h1 class="title title--h1">{{ projectTitle }}</h1>

          <div class="header-post__image-wrap">
            <img class="cover lazyload" :src="headerPoster" data-zoom alt="" />
          </div>
        </header>
        <div class="caption-post" v-for="text in projectDescriptions">
          <p>
            {{ text }}
          </p>
        </div>
        <div v-if="+projectId === 8" class="caption-post">
          <p>{{ t('projects.project08.p1') }}</p>
          <ul>
            <li>
              {{ t('projects.project08.li1') }}
            </li>
            <li>
              {{ t('projects.project08.li2') }}
            </li>
            <li>
              {{ t('projects.project08.li3') }}
            </li>
            <li>
              {{ t('projects.project08.li4') }}
            </li>
          </ul>
          <p>{{ t('projects.project08.p2') }}</p>
          <ul>
            <li>
              {{ t('projects.project08.li5') }}
            </li>
            <li>
              {{ t('projects.project08.li6') }}
            </li>
            <li>
              {{ t('projects.project08.li7') }}
            </li>
          </ul>
        </div>
        <div class="gallery-post">
          <img
            v-for="item in projectStore.projects[projectId - 1]
              .galleryPostListLength"
            :src="galleryPoster(item)"
            class="gallery-post__item cover lazyload"
            data-zoom
            alt=""
          />
          <i class="gallery-post__item cover lazyload"></i>
          <div class="gallery-post__caption">{{ t('projects.footer') }}</div>
        </div>
        <footer class="footer-post">
          <a class="footer-post__share" href="http://facebook.com"
            ><i class="font-icon icon-facebook"></i><span>Facebook</span></a
          >
          <a class="footer-post__share" href="http://twitter.com"
            ><i class="font-icon icon-twitter"></i><span>Twitter</span></a
          >
          <a class="footer-post__share" href="http://linkedin.com"
            ><i class="font-icon icon-linkedin"></i><span>Linkedin</span></a
          >
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import useProjectStore from '@/store/modules/project'
import { getAssetUrl } from '../utils/image'

const { t } = useI18n()
const projectStore = useProjectStore()

const route = useRoute()

const projectId = computed(() => route.params.id)

// 根据当前语言和项目ID获取项目标题
const projectTitle = computed(() => {
  return projectStore.projects[projectId.value - 1].title
})

// 根据当前语言和项目ID获取项目描述
const projectDescriptions = computed(() => {
  return projectStore.projects[projectId.value - 1].texts
})

// 项目图片路径
const headerPoster = computed(() => {
  return getAssetUrl(
    `img/project-${projectId.value.padStart(2, '0')}/poster.webp`
  )
})

const galleryPoster = computed(() => {
  return (i) => {
    const directoryNo = projectId.value.padStart(2, '0'),
      posterNo = i.toString().padStart(2, '0')
    return getAssetUrl(`img/project-${directoryNo}/${posterNo}.webp`)
  }
})

onMounted(() => {
  mediumZoom('[data-zoom]', {
    margin: 30,
  })
})
</script>

<style scoped>
.case-item-details__image {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
}

.case-item-details__description {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.case-item-details__content {
  margin-top: 30px;
}
</style>
