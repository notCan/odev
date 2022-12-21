<template>
  <div>
    <div class="base-container">
      <AppHero
        class="mb-32"
        :title="impactfulData.appHero.title"
        :subtitle="impactfulData.appHero.subtitle"
        :description="impactfulData.appHero.description"
        :logo="impactfulData.appHero.logo"
        :media="impactfulData.appHero.media"
      />
    </div>
    <div class="small-container">
      <AppCounter class="mb-32" :cards="detailsCards" />
      <div ref="impactfulSection">
        <AppSection
          v-for="section in impactfulData.sections"
          :key="section"
          :reverse="section.index % 2 === 0"
          class="mb-40"
          :section="section"
        />
      </div>
      <div ref="impactfulBanner">
        <AppBanner
          :title="impactfulData.banner.title"
          :description="impactfulData.banner.description"
          :button="impactfulData.banner.button"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateMetaTags } from "../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("strategyContentMarketing", () => {
  return queryContent("contentrain", "impactful-content").findOne();
});
const impactfulData = data.value.body[0];
const detailsCards = impactfulData.details;
const { metaTags } = generateMetaTags(impactfulData.metaData.tags);

delete detailsCards.ID;
delete detailsCards.updatedAt;
delete detailsCards.createdAt;

const impactfulSection = ref(null);
const impactfulBanner = ref(null);

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
  // observer.observe(document.getElementById("services-hero"));
  observer.observe(impactfulSection.value);
  observer.observe(impactfulBanner.value);
  // observer.observe(document.getElementById("index-banner"));
  // observer.observe(document.getElementById("quotes"));
});

useHead({
  title: impactfulData.metaData.title,
  meta: metaTags,
  htmlAttrs: {
    lang: "en",
  },
});
</script>
