<template>
  <div>
    <div class="base-container">
      <AppHero
        class="mb-32"
        :title="servicesData.appHero.title"
        :subtitle="servicesData.appHero.subtitle"
        :description="servicesData.appHero.description"
        :logo="servicesData.appHero.logo"
        :media="servicesData.appHero.media"
      />
      <AppCounter class="mb-40" :cards="detailsCards" />
    </div>
    <div class="small-container">
      <div ref="servicesSection">
        <AppSection
          v-for="section in servicesData.sections"
          ref="sSections"
          :key="section.ID"
          :reverse="section.index % 2 === 0"
          class="mb-40"
          :section="section"
        />
      </div>

      <div ref="servicesBanner">
        <AppBanner
          :title="servicesData.banner.title"
          :description="servicesData.banner.description"
          :button="servicesData.banner.button"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateMetaTags } from "../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("services", () => {
  return queryContent("contentrain", "services").findOne();
});

const servicesData = data.value.body[0];
const detailsCards = servicesData.details;
const { metaTags } = generateMetaTags(servicesData.metaData.tags);

delete detailsCards.ID;
delete detailsCards.updatedAt;
delete detailsCards.createdAt;

const servicesBanner = ref(null);
const servicesSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        entry.target.classList.add("wordify-scroll-animation");
        if (intersecting) {
          entry.target.classList.add("active");
        } else {
          // entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(servicesBanner.value);
  observer.observe(servicesSection.value);
});

useHead({
  title: servicesData.metaData.title,
  meta: metaTags,
  htmlAttrs: {
    lang: "en",
  },
});
</script>
