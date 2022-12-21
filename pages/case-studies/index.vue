<template>
  <div>
    <div class="base-container">
      <AppHero
        class="mb-32"
        :title="studiesData.appHero.title"
        :subtitle="studiesData.appHero.subtitle"
        :description="studiesData.appHero.description"
        :logo="studiesData.appHero.logo"
        :media="studiesData.appHero.media"
      />
    </div>
    <div class="small-container">
      <div ref="casesSection">
        <AppSection
          v-for="(section, index) in studiesData.sections"
          :key="index"
          class="mb-40"
          :section="section"
          content-large
        />
      </div>
    </div>
    <section
      class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap mb-40"
    >
      <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
        <h2 class="text-white text-4xl font-semibold mb-4">
          Let’s spark conversations together
        </h2>
        <p class="text-white text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
        <button class="btn-primary">
          Schedule a call <i class="ri-arrow-right-up-line ml-3" />
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { generateMetaTags } from "../../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("studies", () => {
  return queryContent("contentrain", "studies").findOne();
});
const studiesData = data.value.body[0];
const casesSection = ref(null);
const { metaTags } = generateMetaTags(studiesData.metaData.tags);

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
  observer.observe(casesSection.value);
});

useHead({
  title: studiesData.metaData.title,
  meta: metaTags,
  htmlAttrs: {
    lang: "en",
  },
});
</script>
