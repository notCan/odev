<template>
  <div>
    <div class="base-container">
      <AppHero
        class="mb-32"
        :title="strategyData.appHero.title"
        :subtitle="strategyData.appHero.subtitle"
        :description="strategyData.appHero.description"
        :logo="strategyData.appHero.logo"
        :media="strategyData.appHero.media"
      />
    </div>
    <div class="small-container">
      <AppCounter class="mb-32" :cards="detailsCards" />
      <div ref="strategySection">
        <AppSection
          v-for="section in strategyData.sections"
          :key="section"
          :reverse="section.index % 2 === 0"
          class="mb-40"
          :section="section"
        />
      </div>
      <div ref="strategyBanner">
        <AppBanner
          :title="strategyData.banner.title"
          :description="strategyData.banner.description"
          :button="strategyData.banner.button"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateMetaTags } from "../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("strategyContentStrategy", () => {
  console.log("just fetch!!");
  return queryContent("contentrain", "content-strategy").findOne();
});
const strategyData = data.value.body[0];
const detailsCards = strategyData.details;
const { metaTags } = generateMetaTags(strategyData.metaData.tags);

delete detailsCards.ID;
delete detailsCards.updatedAt;
delete detailsCards.createdAt;

const strategySection = ref(null);
const strategyBanner = ref(null);

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
  observer.observe(strategySection.value);
  observer.observe(strategyBanner.value);
  // observer.observe(document.getElementById("index-banner"));
  // observer.observe(document.getElementById("quotes"));
});

useHead({
  title: strategyData.metaData.title,
  meta: metaTags,
  htmlAttrs: {
    lang: "en",
  },
});
</script>
