<template>
  <div class="base-container">
    <ContentDoc v-slot="{ doc }">
      <section class="app-banner-big mb-32 flex flex-col" :style="cssVars">
        <div class="hero-background-image" />
        <div class="flex items-center justify-between flex-wrap relative">
          <div class="content w-full lg:w-1/2">
            <h1 class="font-semibold text-5xl text-white mb-6 lg:mb-0">
              {{ doc.appHero.title }}
            </h1>
          </div>
          <div class="media mx-auto lg:mx-0 hidden lg:block">
            <img
              :src="doc.appHero.media.src.split('public')[1]"
              :alt="doc.appHero.media.alt"
            />
          </div>
        </div>
        <div class="w-full flex justify-center mt-auto">
          <div class="flex flex-col items-center text-white z-20">
            <p class="text-white mb-4">{{ doc.appHero.button.label }}</p>
            <button class="text-2xl" @click="scrollArticle">
              <i :class="doc.appHero.button.icon"></i>
            </button>
          </div>
        </div>
      </section>
      <article class="prose mx-auto" ref="article">
        <ContentDoc />
      </article>
      <div ref="casesSlugBanner">
        <AppBanner
          :title="detailData.banner.title"
          :description="detailData.banner.description"
          :button="detailData.banner.button"
        />
      </div>
    </ContentDoc>
    <!-- <section
      class="app-banner p-20 flex items-center justify-between mt-16 max-w-5xl mx-auto flex-wrap mb-40"
    >
      <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
        <h2 class="text-white text-4xl font-semibold mb-4">
          Level up your content
        </h2>
        <p class="text-white text-lg">
          Ready to talk your content strategy
        </p>
      </div>

      <div class="cta-button flex justify-start md:justify-end basis-full md:basis-1/2">
        <button class="btn-primary">
          Schedule a call <i class="ri-arrow-right-up-line ml-3" />
        </button>
      </div>
    </section> -->
  </div>
</template>

<script setup>
definePageMeta({
  titleTemplate: () => `${doc.title}`,
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    lang: "en",
  },
});
const { data } = await useAsyncData("detail", () => {
  return queryContent("contentrain", "study-detail").findOne();
});
const detailData = data.value.body[0];

const backgroundUrl =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

const cssVars = computed(() => {
  return {
    "--background-url": `url(${backgroundUrl})`,
  };
});

const article = ref(null);
const casesSlugBanner = ref(null);

function scrollArticle() {
  article.value.scrollIntoView({ behavior: "smooth" });
}

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
  observer.observe(article.value);
  observer.observe(casesSlugBanner.value);
});
</script>

<style lang="postcss">
.app-banner-big {
  @apply bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl lg:min-h-[600px] p-8 lg:px-24 lg:pb-12 lg:pt-40 relative;
}
.hero-background-image::before {
  @apply content-['image'] block absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl opacity-5;
  background-image: var(--background-url);
}
</style>
