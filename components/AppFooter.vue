<template>
  <footer class="bg-slate-50 py-12">
    <div class="base-container flex justify-between flex-wrap w-full">
      <div class="footer-section w-full md:w-1/3 md:max-w-xs">
        <h3 class="font-semibold text-xl mb-4">
          {{ footerData.summary.title }}
        </h3>
        <div class="font-normal max-w-xs" v-html="footerData.summary.description" />
      </div>
      <div class="footer-section w-full md:w-1/3 md:max-w-xs py-12 md:py-0 text-left md:text-center">
        <h3 class="font-semibold text-xl mb-4">
          {{ footerData.socialLinks.title }}
        </h3>
        <div class="flex flex-row justify-start lg:justify-center items-center">
          <div v-for="item in footerData.socialLinks.list" :key="item">
            <a class="social-link  mr-4 md:p-2 text-2xl" :href="item.URL" target="_blank" rel="noopener noreferrer" >
              <i :class="item.icon"><span class="sr-only">{{item.icon.split('-')[1]}}</span></i>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="footer-section w-full md:w-1/3 md:max-w-xs md:flex md:flex-col md:items-end">
        <div>
          <h3 class="font-semibold text-xl mb-4 md:w-max">
            {{ footerData.siteMap.title }}
          </h3>
          <ul class="sm:w-max">
            <li v-for="item in list.data.value[0].body" :key="item">
              <nuxt-link :to="`/case-studies/${item.slug}`">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div> -->
    </div>
  </footer>
</template>
<script setup>
const { data } = await useAsyncData('footer', () =>
  queryContent('contentrain', 'footer').findOne()
)
const footerData = data.value.body[0]

const list = await useAsyncData('list', () =>
  queryContent('contentrain', 'case-studies').find()
)

</script>

<style scoped></style>
