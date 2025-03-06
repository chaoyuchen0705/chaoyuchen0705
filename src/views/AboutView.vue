<template>
  <div class="col-12 col-md-12 col-lg-10">
    <div class="box box-content">
      <!-- About -->
      <div class="pb-0 pb-sm-2">
        <h1 class="title title--h1 first-title title__separate">
          {{ t('about.title') }}
        </h1>
        <p>{{ t('about.introduction1') }}</p>
        <p>{{ t('about.introduction2') }}</p>
      </div>

      <!-- What -->
      <div class="mt-1">
        <h2 class="title title--h3">{{ t('about.whatImDoing') }}</h2>
        <div class="row">
          <!-- Case Item -->
          <div class="col-12 col-lg-6">
            <div class="case-item">
              <img
                class="case-item__icon"
                :src="getAssetUrl('icons/icon-planning.svg')"
                :alt="t('about.services.urbanPlanning.title')"
              />
              <div>
                <h3 class="title title--h4">
                  {{ t('about.services.urbanPlanning.title') }}
                </h3>
                <p class="case-item__caption">
                  {{ t('about.services.urbanPlanning.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Case Item -->
          <div class="col-12 col-lg-6">
            <div class="case-item">
              <img
                class="case-item__icon"
                :src="getAssetUrl('icons/icon-economic.svg')"
                :alt="t('about.services.economicAnalysis.title')"
              />
              <div>
                <h3 class="title title--h4">
                  {{ t('about.services.economicAnalysis.title') }}
                </h3>
                <p class="case-item__caption">
                  {{ t('about.services.economicAnalysis.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Case Item -->
          <div class="col-12 col-lg-6">
            <div class="case-item">
              <img
                class="case-item__icon"
                :src="getAssetUrl('icons/icon-modeling.svg')"
                alt=""
              />
              <div>
                <h3 class="title title--h4">
                  {{ t('about.services.dataModeling.title') }}
                </h3>
                <p class="case-item__caption">
                  {{ t('about.services.dataModeling.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Case Item -->
          <div class="col-12 col-lg-6">
            <div class="case-item">
              <img
                class="case-item__icon"
                :src="getAssetUrl('icons/icon-law.svg')"
                alt=""
              />
              <div>
                <h3 class="title title--h4">
                  {{ t('about.services.UrbanLaw.title') }}
                </h3>
                <p class="case-item__caption">
                  {{ t('about.services.UrbanLaw.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="mt-2">
        <h2 class="title title--h3">{{ t('about.testimonials') }}</h2>
        <div class="swiper-container js-carousel-review">
          <div class="swiper-wrapper">
            <!-- Item review -->
            <div class="swiper-slide review-item">
              <svg class="avatar avatar--80" viewBox="0 0 84 84">
                <g class="avatar__hexagon">
                  <image
                    :xlink:href="getAssetUrl('img/avatar-2.jpg')"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <div class="review-item__textbox">
                <h4 class="title title--h5">{{ t('about.name01') }}</h4>
                <p class="review-item__caption">
                  {{ t('about.evaluate01') }}
                </p>
              </div>
            </div>

            <!-- Item review -->
            <div class="swiper-slide review-item">
              <svg class="avatar avatar--80" viewBox="0 0 84 84">
                <g class="avatar__hexagon">
                  <image
                    :xlink:href="getAssetUrl('img/avatar-3.jpg')"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <div class="review-item__textbox">
                <h4 class="title title--h5">{{ t('about.name02') }}</h4>
                <p class="review-item__caption">
                  {{ t('about.evaluate02') }}
                </p>
              </div>
            </div>

            <!-- Item review -->
            <div class="swiper-slide review-item">
              <svg class="avatar avatar--80" viewBox="0 0 84 84">
                <g class="avatar__hexagon">
                  <image
                    :xlink:href="getAssetUrl('img/avatar-4.jpg')"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <div class="review-item__textbox">
                <h4 class="title title--h5">{{ t('about.name03') }}</h4>
                <p class="review-item__caption">
                  {{ t('about.evaluate03') }}
                </p>
              </div>
            </div>

            <!-- Item review -->
            <div class="swiper-slide review-item">
              <svg class="avatar avatar--80" viewBox="0 0 84 84">
                <g class="avatar__hexagon">
                  <image
                    :xlink:href="getAssetUrl('img/avatar-5.jpg')"
                    height="100%"
                    width="100%"
                  />
                </g>
              </svg>
              <div class="review-item__textbox">
                <h4 class="title title--h5">{{ t('about.name04') }}</h4>
                <p class="review-item__caption">
                  {{ t('about.evaluate04') }}
                </p>
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
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

const { t } = useI18n()
</script>
