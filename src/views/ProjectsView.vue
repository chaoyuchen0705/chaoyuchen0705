<template>
  <div class="col-12 col-md-12 col-lg-10">
    <div class="box box-content">
      <div class="pb-2">
        <h1 class="title title--h1 first-title title__separate">
          {{ t('projects.title') }}
        </h1>
      </div>

      <!-- News -->
      <div class="news-grid">
        <!-- Post -->
        <article
          class="news-item box"
          v-for="(project, index) in projectStore.projects"
          :key="index"
        >
          <div class="news-item__image-wrap overlay overlay--45">
            <div class="news-item__date">
              <span>{{ project.address }}</span>
            </div>
            <a
              class="news-item__link"
              @click="handleViewProjectDetails(index)"
            ></a>
            <img
              class="cover lazyload"
              :src="getAssetUrl(`img/project-0${index + 1}/poster.webp`)"
              :alt="project.title"
            />
          </div>
          <div class="news-item__caption">
            <h2 class="title title--h4">{{ project.title }}</h2>
          </div>
        </article>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">{{ t('footer.copyright') }}</footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getAssetUrl } from '../utils/image'
import { useRouter } from 'vue-router'
import useProjectStore from '@/store/modules/project'
import { onMounted } from 'vue'

const { t } = useI18n()
const projectStore = useProjectStore()
const router = useRouter()

onMounted(() => {
  projectStore.initializeProjects()
})

const handleViewProjectDetails = (index) => {
  router.push({
    path: `/project/${index + 1}`,
  })
}
</script>
