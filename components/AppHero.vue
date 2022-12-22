<template>
  <section class="app-hero" style="background-image: url('/img/1671693681771_hero banner.png');">
    <div class="hero-background-image" />
    <div class="flex justify-between flex-wrap relative">
      <div class="content w-full lg:w-1/2">
        <h3 v-if="subtitle" class="font-medium text-2xl text-primary-300 mb-4">
          {{ subtitle }}
        </h3>
        <h1 v-if="title" class="font-semibold text-5xl text-white mb-6">
          {{ title }}
        </h1>
        <p v-if="description" class="text-secondary-50 text-lg">
          {{ description }}
        </p>
      </div>
      <div
        class="
          media
          flex
          justify-start
          lg:justify-end
          items-end
          w-full
          lg:w-1/2
          pt-12
        "
      >
        <nuxt-link to="/" class="text-2xl">
          <img class="w-24 md:w-36 h-auto" src="/img/1671662417277_logo.png" alt="image" />

        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    default: "",
    type: String,
  },
  subtitle: {
    default: "",
    type: String,
  },
  description: {
    default: "",
    type: String,
  },
  logo: {
    type: Object,
    default: () => {},
  },
  media: {
    type: Object,
    default: () => {
      return {
        src: "",
        alt: "",
      };
    },
  },
  // logoUrl: {
  //   default: "/img/logo.svg",
  //   type: String,
  // },
});
// const cssVars = computed(() => {
//   return {
//     "--background-url": `url(${imageItem})`,
//   };
// });
</script>

<style lang="postcss" scoped>
.app-hero {
  @apply bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl lg:min-h-[600px] flex items-center p-8 lg:p-24 relative;
}
.hero-background-image::before {
  @apply content-['image'] block absolute left-0 top-0 w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl opacity-10;
  background-image: var(--background-url);
}
</style>
