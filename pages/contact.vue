<template>
  <div>
    <div class="base-container">
      <section class="home-hero app-section">
        <div class="content-contact lg:max-w-lg p-0 md:pr-2 lg:mt-14">
          <h1 class="text-6xl font-semibold mb-6">
            {{ contactData.hero.title }}
          </h1>
          <p class="mb-8 text-xl">
            {{ contactData.hero.description }}
          </p>
          <button class="btn-primary flex items-center">
            <nuxt-link :to="contactData.hero.button.link">
              {{ contactData.hero.button.label }}
              <i class="ml-3" :class="contactData.hero.button.icon"
            /></nuxt-link>
          </button>
        </div>
        <div
          class="
            content-large-contact
            p-0
            lg:pl-2
            flex
            items-center
            justify-center
            mt-16
            lg:mt-0
          "
        >
          <!-- Calendly inline widget begin -->
          <div
            class="calendly-inline-widget h-[600px] lg:h-[900px]"
            data-url="https://calendly.com/kaya-ismail/quick-call?hide_event_type_details=1"
            style="min-width: 100%;"
          ></div>

          <!-- <div
            class="calendly-inline-widget"
            data-url="https://calendly.com/kaya-ismail/quick-call?hide_event_type_details=1"
            style="position: relative; min-width: 520px; height: 900px"
          >
          </div> -->
        </div>
      </section>
      <section ref="contactBanner" class="app-banner">
        <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
          <h2 class="text-white text-4xl font-semibold mb-4">
            {{ contactData.banner.title }}
          </h2>
          <p class="text-white text-lg">{{ contactData.banner.description }}</p>
        </div>

        <div
          class="
            cta-button
            flex
            justify-start
            md:justify-end
            basis-full
            md:basis-1/2
          "
        >
          <button class="btn-primary relative z-10">
            <span>{{ contactData.banner.button.label }}</span>
            <i class="ml-3" :class="contactData.banner.button.icon" />
            <!-- <nuxt-link :to="button.link">

            </nuxt-link> -->
          </button>
          <img
            class="hidden lg:block absolute bottom-0 h-full"
            :class="titleCharCount >= 24 ? 'right-[-80px]' : 'right-0'"
            src="/img/banner_lines.svg"
            alt="lines"
          />
        </div>
      </section>
      <!-- <AppBanner
        :title="contactData.banner.title"
        :description="contactData.banner.description"
        :button="contactData.banner.button"
      /> -->
    </div>
  </div>
</template>
<script setup>
import { generateMetaTags } from "../helpers/useGenerateMetaTags.js";

const { data } = await useAsyncData("contact", () => {
  return queryContent("contentrain", "contact").findOne();
});
const contactData = data.value.body[0];
const { metaTags } = generateMetaTags(contactData.metaData.tags);

const titleCharCount = computed(() => {
  return contactData.banner.title.length;
});

const contactBanner = ref(null)

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
  observer.observe(contactBanner.value);
});

useHead({
  title: contactData.metaData.title,
  meta: metaTags,
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<script>
export default {
  head() {
    return {
      script: [
        {
          type: "text/javascript",
          src: "https://assets.calendly.com/assets/external/widget.js",
          async: true,
        },
      ],
    };
  },
};
</script>
<style lang="postcss" scoped>
.app-banner {
  @apply w-full bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl p-8 lg:p-20 flex flex-wrap items-center justify-between max-w-5xl mx-auto  relative mb-40;
}
</style>
