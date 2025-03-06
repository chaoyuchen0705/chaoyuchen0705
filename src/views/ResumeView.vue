<template>
  <div class="col-12 col-md-12 col-lg-10">
    <div class="box box-content">
      <div class="pb-2">
        <h1 class="title title--h1 first-title title__separate">
          {{ t('resume.title') }}
        </h1>
      </div>

      <!-- Experience -->
      <div class="row">
        <div class="col-12">
          <h2 class="title title--h3">
            <img
              class="title-icon"
              :src="getAssetUrl('icons/icon-education.svg')"
              alt=""
            />
            {{ t('resume.education.title') }}
          </h2>
          <div class="timeline">
            <!-- Item -->
            <article class="timeline__item">
              <h5 class="title title--h5 timeline__title">
                {{ t('resume.education.uiuc.name') }}
              </h5>
              <span class="timeline__period">{{
                t('resume.education.uiuc.major')
              }}</span>
              <p class="timeline__period">
                {{ t('resume.education.uiuc.period') }}
              </p>
              <p class="timeline__description">
                {{ t('resume.education.uiuc.courses') }}
              </p>
            </article>

            <!--									&lt;!&ndash; Item &ndash;&gt;-->
            <!--									<article class="timeline__item">-->
            <!--									    <h5 class="title title&#45;&#45;h5 timeline__title">New York Academy of Art</h5>-->
            <!--										<span class="timeline__period">2005 — 2007</span>-->
            <!--										<p class="timeline__description">Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..</p>-->
            <!--									</article>-->
            <!--                                        -->
            <!--									&lt;!&ndash; Item &ndash;&gt;-->
            <!--									<article class="timeline__item">-->
            <!--									    <h5 class="title title&#45;&#45;h5 timeline__title">High School of Art and Design</h5>-->
            <!--										<span class="timeline__period">2003 — 2005</span>-->
            <!--										<p class="timeline__description">Duis aute irure dolor in reprehenderit in voluptate, quila voluptas  mag odit aut fugit, sed consequuntur magni dolores eos.</p>-->
            <!--									</article>-->
          </div>
        </div>

        <div class="col-12">
          <h2 class="title title--h3">
            <img
              class="title-icon"
              :src="getAssetUrl('icons/icon-experience.svg')"
              alt=""
            />
            Experience
          </h2>
          <div class="timeline">
            <!-- Item -->
            <article class="timeline__item">
              <h5 class="title title--h5 timeline__title">
                {{ t('resume.experience.yuyuan.title') }}
              </h5>
              <span class="timeline__period">{{
                t('resume.experience.yuyuan.company')
              }}</span>
              <p class="timeline__period">
                {{ t('resume.experience.yuyuan.period') }}
              </p>
              <ul>
                <li>{{ t('resume.experience.yuyuan.responsibilities.1') }}</li>
                <li>{{ t('resume.experience.yuyuan.responsibilities.2') }}</li>
                <li>{{ t('resume.experience.yuyuan.responsibilities.3') }}</li>
                <li>{{ t('resume.experience.yuyuan.responsibilities.4') }}</li>
              </ul>
            </article>
            <!-- Item -->
            <article class="timeline__item">
              <h5 class="title title--h5 timeline__title">
                {{ t('resume.experience.sinolink.title') }}
              </h5>
              <span class="timeline__period">{{
                t('resume.experience.sinolink.company')
              }}</span>
              <p class="timeline__period">
                {{ t('resume.experience.sinolink.period') }}
              </p>
              <ul>
                <li>
                  {{ t('resume.experience.sinolink.responsibilities.1') }}
                </li>
                <li>
                  {{ t('resume.experience.sinolink.responsibilities.2') }}
                </li>
                <li>
                  {{ t('resume.experience.sinolink.responsibilities.3') }}
                </li>
                <li>
                  {{ t('resume.experience.sinolink.responsibilities.4') }}
                </li>
              </ul>
            </article>
            <!-- Item -->
            <article class="timeline__item">
              <h5 class="title title--h5 timeline__title">
                {{ t('resume.experience.minsheng.title') }}
              </h5>
              <span class="timeline__period">{{
                t('resume.experience.minsheng.company')
              }}</span>
              <p class="timeline__period">
                {{ t('resume.experience.minsheng.period') }}
              </p>
              <ul>
                <li>
                  {{ t('resume.experience.minsheng.responsibilities.1') }}
                </li>
                <li>
                  {{ t('resume.experience.minsheng.responsibilities.2') }}
                </li>
                <li>
                  {{ t('resume.experience.minsheng.responsibilities.3') }}
                </li>
              </ul>
            </article>
            <!-- Item -->
            <article class="timeline__item">
              <h5 class="title title--h5 timeline__title">
                {{ t('resume.experience.bijian.title') }}
              </h5>
              <span class="timeline__period">{{
                t('resume.experience.bijian.company')
              }}</span>
              <p class="timeline__period">
                {{ t('resume.experience.bijian.period') }}
              </p>
              <ul>
                <li>{{ t('resume.experience.bijian.responsibilities.1') }}</li>
                <li>{{ t('resume.experience.bijian.responsibilities.2') }}</li>
                <li>{{ t('resume.experience.bijian.responsibilities.3') }}</li>
              </ul>
            </article>
            <!--									&lt;!&ndash; Item &ndash;&gt;-->
            <!--									<article class="timeline__item">-->
            <!--									    <h5 class="title title&#45;&#45;h5 timeline__title">Art Director</h5>-->
            <!--										<span class="timeline__period">2013 — 2015</span>-->
            <!--										<p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>-->
            <!--									</article>-->
            <!--                                        -->
            <!--									&lt;!&ndash; Item &ndash;&gt;-->
            <!--									<article class="timeline__item">-->
            <!--									    <h5 class="title title&#45;&#45;h5 timeline__title">Web Designer</h5>-->
            <!--										<span class="timeline__period">2010 — 2013</span>-->
            <!--										<p class="timeline__description">Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>-->
            <!--									</article>-->
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="row">
        <div class="col-12">
          <h2 class="title title--h3">{{ t('resume.skills.title') }}</h2>
          <div class="box box__border">
            <!-- Progress -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-text">
                  <span>{{ t('resume.skills.msoffice.name') }}</span
                  ><span>90%</span>
                </div>
              </div>
              <div class="progress-text">
                <span>{{ t('resume.skills.msoffice.name') }}</span>
              </div>
            </div>

            <!-- Progress -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-text">
                  <span>{{ t('resume.skills.arcgis.name') }}</span
                  ><span>85%</span>
                </div>
              </div>
              <div class="progress-text">
                <span>{{ t('resume.skills.arcgis.name') }}</span>
              </div>
            </div>

            <!-- Progress -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-text">
                  <span>{{ t('resume.skills.illustrator.name') }}</span
                  ><span>80%</span>
                </div>
              </div>
              <div class="progress-text">
                <span>{{ t('resume.skills.illustrator.name') }}</span>
              </div>
            </div>

            <!-- Progress -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-text">
                  <span>{{ t('resume.skills.sketchup.name') }}</span
                  ><span>75%</span>
                </div>
              </div>
              <div class="progress-text">
                <span>{{ t('resume.skills.sketchup.name') }}</span>
              </div>
            </div>

            <!-- Progress -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-text">
                  <span>{{ t('resume.skills.rstudio.name') }}</span
                  ><span>70%</span>
                </div>
              </div>
              <div class="progress-text">
                <span>{{ t('resume.skills.rstudio.name') }}</span>
              </div>
            </div>

            <!-- Progress -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-text">
                  <span>{{ t('resume.skills.golf.name') }}</span
                  ><span>80%</span>
                </div>
              </div>
              <div class="progress-text">
                <span>{{ t('resume.skills.golf.name') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="footer">{{ t('footer.copyright') }}</footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getAssetUrl } from '@/utils/image'
import { onMounted } from 'vue'

const { t } = useI18n()
onMounted(() => {
  progressBar()
})
</script>
