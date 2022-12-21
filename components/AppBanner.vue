<template>
  <section class="app-banner">
    <div class="content max-w-md pb-8 lg:pb-0 basis-full md:basis-1/2">
      <h2 class="text-white text-4xl font-semibold mb-4">
        {{ title }}
      </h2>
      <p class="text-white text-lg">{{ description }}</p>
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
        <nuxt-link :to="button.link" class="btn-link-primary relative z-10">
          <span>{{ button.label }}</span>
          <i class="ml-3" :class="button.icon" /></nuxt-link>
      <img
        class="hidden lg:block absolute bottom-0 h-full"
        :class="titleCharCount >= 24 ? 'right-[-80px]' : 'right-0'"
        src="/img/banner_lines.svg"
        alt="lines"
      />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: {
    default: "Level up your content",
    type: String,
  },
  description: {
    default: "Ready to talk your content strategy",
    type: String,
  },
  button: {
    default: () => {},
    type: Object,
  },
  // backgroundUrl: {
  //   default:
  //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //   type: String,
  // },
  // logoUrl: {
  //   default: "/img/logo.png",
  //   type: String,
  // },
});
const titleCharCount = computed(() => {
  return props.title.length;
});
</script>
<style lang="postcss" scoped>
.app-banner {
  @apply w-full max-w-5xl bg-gradient-to-tl from-primary-900 via-primary-800 to-primary-700 rounded-3xl p-8 lg:p-20 flex flex-wrap items-center justify-between mx-auto my-40 relative;
}
/* .test-banner {
  @apply rounded-3xl;
  background: url(img/banner_lines.svg) right bottom no-repeat,
    linear-gradient(
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
  url(paper.gif) left top repeat;
} */
</style>
