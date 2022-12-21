<template>
  <div>
    <div class="base-container">
      <AppHero
        class="mb-32"
        :title="repurposingData.appHero.title"
        :subtitle="repurposingData.appHero.subtitle"
        :description="repurposingData.appHero.description"
        :logo="repurposingData.appHero.logo"
        :media="repurposingData.appHero.media"
      />
    </div>
    <div class="small-container">
      <AppCounter class="mb-32" :cards="detailsCards" />
      <div ref="repurposingSection">
        <AppSection
          v-for="section in repurposingData.sections"
          :key="section"
          :reverse="section.index % 2 === 0"
          class="mb-40"
          :section="section"
        />
      </div>
      <div ref="repurposingBanner">
        <AppBanner
          :title="repurposingData.banner.title"
          :description="repurposingData.banner.description"
          :button="repurposingData.banner.button"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateMetaTags } from "../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("strategyContentRepurpising", () => {
  return queryContent("contentrain", "content-repurposing").findOne();
});
const repurposingData = data.value.body[0];
const detailsCards = repurposingData.details;
const { metaTags } = generateMetaTags(repurposingData.metaData.tags);

delete detailsCards.ID;
delete detailsCards.updatedAt;
delete detailsCards.createdAt;

const repurposingSection = ref(null)
const repurposingBanner = ref(null)

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
  observer.observe(repurposingSection.value);
  observer.observe(repurposingBanner.value);
  // observer.observe(document.getElementById("index-banner"));
  // observer.observe(document.getElementById("quotes"));
});

useHead({
  title: repurposingData.metaData.title,
  meta: metaTags,
  htmlAttrs: {
    lang: "en",
  },
});
</script>
