<template>
  <div>
    <div class="base-container">
      <section class="home-hero app-section pb-36">
        <div
          class="content md:max-w-lg p-0 md:pr-2 flex flex-col justify-center"
        >
          <h1 class="text-5xl font-semibold mb-6">
            {{ homeData.hero.title }}
          </h1>
          <p class="mb-8 text-xl">
            {{ homeData.hero.description }}
          </p>
          <nuxt-link class="btn-link-primary cursor-pointer">
            {{ homeData.hero.button.label }}
            <i class="ml-3" :class="homeData.hero.button.icon"
          /></nuxt-link>

          <!-- <nuxt-link to="/contact">
            <button class="btn-primary flex items-center">
              Scedule a call <i class="ri-arrow-right-up-line ml-3" />
            </button>
          </nuxt-link> -->
        </div>
        <div class="media p-0 md:pl-2">
          <img
            class="w-full xl:min-w-[650px] h-auto rounded-2xl mt-12 md:mt-0"
            :src="homeData.hero.media.src.split('public')[1]"
            :alt="homeData.hero.media.alt"
          />
        </div>
      </section>
      <section
        ref="references"
        class="
          references
          grid grid-cols-2
          md:grid-cols-5
          gap-8
          md:gap-12
          lg:gap-16
        "
      >
        <p class="text-center lg:text-left text-xl col-span-2 md:col-span-1">
          Trusted by
        </p>
        <div
          v-for="(logo, index) in homeData.references.media"
          :key="index"
          class="reference-logo-container flex justify-center"
          :class="
            index === homeData.references.media - 1 ? 'lg:justify-end' : ''
          "
        >
          <img
            v-if="logo !== 0"
            :src="logo.src.split('public')[1]"
            :alt="logo.alt"
            class="reference-logo w-full h-auto"
          />
        </div>
      </section>
      <section class="features py-40">
        <div
          ref="featuresTitle"
          class="content max-w-2xl mx-auto text-center mb-16"
        >
          <h2 class="font-semibold text-4xl mb-6">
            {{ homeData.features.title }}
          </h2>
          <p>
            {{ homeData.features.description }}
          </p>
        </div>
        <div ref="featuresCards" class="app-cards">
          <div
            v-for="(feature, index) in homeData.features.cards"
            :key="index"
            class="app-card p-6"
          >
            <div class="icon mb-6">
              <!-- <i class="text-6xl text-primary-500" :class="service.icon" /> -->
              <img
                class="w-[40px] h-[40px]"
                :src="feature.media.src.split('public')[1]"
                :alt="feature.media.alt"
              />
            </div>
            <div class="content mb-8">
              <h3 class="font-semibold text-lg mb-2">{{ feature.title }}</h3>
              <p>
                {{ feature.description }}
              </p>
            </div>
            <div class="link">
              <nuxt-link class="app-link cursor-pointer">
                {{ feature.button.label }}
                <i class="ml-3" :class="feature.button.icon" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section ref="bigBanner" class="app-banner-full relative">
      <img
        class="relative z-10 hidden lg:block left-4"
        :src="homeData.bannerFull.media.src.split('public')[1]"
        :alt="homeData.bannerFull.media.alt"
      />
      <img
        class="
          absolute
          top-0
          left-0
          right-0
          lg:left-20
          mx-auto
          lg:mx-0
          hidden
          lg:block
        "
        src="/img/wordify-bg-logo.png"
        alt="wordify background logo"
      />
      <div class="text-white w-full lg:w-2/5 mb-8 lg:mb-0">
        <h3 class="mb-6 text-white text-4xl font-semibold">
          {{ homeData.bannerFull.title }}
        </h3>
        <ul class="mb-8 font-normal list-disc ml-4">
          <li
            v-for="listItem in homeData.bannerFull.list"
            :key="listItem"
            class="mb-4"
          >
            {{ listItem.description }}
          </li>
        </ul>
        <!-- <button class="btn-primary flex items-center"> -->
        <nuxt-link
          class="btn-link-primary cursor-pointer"
        >
          <span>{{ homeData.bannerFull.button.label }}</span>
          <i class="ml-3" :class="homeData.bannerFull.button.icon"></i
        ></nuxt-link>
        <!-- </button> -->
      </div>
    </section>
    <div class="base-container">
      <section class="studies">
        <div
          ref="studiesTitle"
          class="content max-w-2xl mx-auto text-center mb-10"
        >
          <h2 class="font-semibold text-4xl mb-6">
            {{ homeData.studies.title }}
          </h2>
          <p>
            {{ homeData.studies.description }}
          </p>
        </div>
        <div ref="studiesCards" class="app-cards">
          <div
            v-for="(study, index) in homeData.studies.cards"
            :key="index"
            class="app-card p-6"
          >
            <div class="image mb-4">
              <img
                class="w-full h-auto rounded-2xl"
                :src="study.media.src.split('public')[1]"
                :alt="study.media.alt"
              />
            </div>
            <div class="content mb-6">
              <h3 class="font-semibold text-lg">
                {{ study.title }}
              </h3>
            </div>
            <div class="button flex">
              <nuxt-link class="btn-primary-outline cursor-pointer">
                {{ study.button.label }}
                <i class="ml-3 align-middle" :class="study.button.icon" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
      <section class="services pt-40">
        <div
          ref="quotesTitle"
          class="content max-w-2xl mx-auto text-center mb-10"
        >
          <h2 class="font-semibold text-4xl mb-6">
            {{ homeData.testimonials.title }}
          </h2>
          <p>
            {{ homeData.testimonials.description }}
          </p>
        </div>
        <div ref="quotesCards" class="app-cards">
          <div
            v-for="(item, index) in homeData.testimonials.cards"
            :key="index"
            class="app-card p-6"
          >
            <div class="icon text-secondary-500">
              <i class="text-5xl" :class="item.icon" />
            </div>
            <div class="content mt-3">
              <h3 class="font-medium">
                {{ item.quote }}
              </h3>
            </div>
            <div class="mt-6">
              <p class="text-sm flex items-center">
                <span class="w-4 border-b border-2 border-primary mr-2" />
                {{ item.author }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div ref="indexBanner" class="pb-9">
        <AppBanner
          :title="homeData.banner.title"
          :description="homeData.banner.description"
          :button="homeData.banner.button"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateMetaTags } from "../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("home", () => {
  return queryContent("contentrain", "home").findOne();
});
const homeData = data.value.body[0];

const { metaTags } = generateMetaTags(homeData.metaData.tags);

const references = ref(null);
const featuresTitle = ref(null);
const featuresCards = ref(null);
const bigBanner = ref(null);
const indexBanner = ref(null);
const quotesTitle = ref(null);
const quotesCards = ref(null);
// const referenceLogos = ref(null);

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
    { threshold: 0.4 }
  );
  observer.observe(references.value);
  observer.observe(featuresTitle.value);
  observer.observe(featuresCards.value);
  observer.observe(bigBanner.value);
  observer.observe(indexBanner.value);
  observer.observe(quotesTitle.value);
  observer.observe(quotesCards.value);
});

useHead({
  title: homeData.metaData.title,
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<style lang="postcss" scoped>
.app-banner-full {
  @apply w-full max-w-[1440px] mx-auto flex flex-col-reverse justify-between lg:flex-row p-8 lg:pt-40 lg:pr-24 lg:pl-44 lg:pb-0 mb-40;
  background-image: linear-gradient(
    325deg,
    hsl(187deg 60% 6%) 0%,
    hsl(185deg 59% 8%) 30%,
    hsl(186deg 59% 10%) 43%,
    hsl(185deg 59% 11%) 52%,
    hsl(186deg 61% 13%) 59%,
    hsl(185deg 61% 15%) 65%,
    hsl(185deg 60% 17%) 70%,
    hsl(185deg 60% 19%) 75%,
    hsl(185deg 60% 20%) 79%,
    hsl(185deg 60% 22%) 84%,
    hsl(185deg 61% 24%) 88%,
    hsl(185deg 61% 26%) 93%,
    hsl(184deg 60% 28%) 100%
  );
}
@media screen and (min-width: 1441px) {
  .app-banner-full {
    border-radius: 24px;
  }
}
</style>
