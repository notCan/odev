<template>
  <section class="app-hero" :style="cssVars">
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
          <!-- <img class="w-24 md:w-36 h-auto" :src="logoUrl" alt="Wordify" /> -->
          <svg
            width="117"
            height="32"
            viewBox="0 0 117 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1053 23.7037H8.32749L0 0.311891H3.68031L9.26316 16.8109L15.1579 0.311891H16.9357L22.8304 16.8109L28.4133 0.311891H32.1248L23.7973 23.7037H22.0195L16.0624 7.26706L10.1053 23.7037ZM41.3879 10.6667C38.7368 10.6667 36.5848 12.8811 36.5848 16.0312C36.5848 19.1501 38.7368 21.3957 41.3879 21.3957C44.039 21.3957 46.191 19.1501 46.191 16.0312C46.191 12.8811 44.039 10.6667 41.3879 10.6667V10.6667ZM41.3879 8.01559C45.8168 8.01559 49.4035 11.4464 49.4035 16.0312C49.4035 20.616 45.8168 24.0156 41.3879 24.0156C36.9591 24.0156 33.3723 20.616 33.3723 16.0312C33.3723 11.4464 36.9591 8.01559 41.3879 8.01559V8.01559ZM62.0975 8.48343L61.4113 11.0097C61.193 10.885 60.5068 10.6667 59.9454 10.6667C57.2943 10.6667 56.0468 13.193 56.0468 16.3119V23.7037H52.8343V8.2963H56.0468V10.4795C56.4211 9.04483 58.0741 8.01559 59.9142 8.01559C60.7563 8.01559 61.6608 8.23392 62.0975 8.48343ZM63.345 16.0312C63.345 11.4464 66.6199 8.01559 71.0487 8.01559C72.577 8.01559 74.4483 8.67057 75.4776 9.51267V0.311891H78.7212V23.7037H75.4776V22.5497C74.2612 23.4542 72.577 24.0156 71.0487 24.0156C66.6199 24.0156 63.345 20.616 63.345 16.0312V16.0312ZM66.5887 16.0312C66.5887 19.1501 68.7407 21.3957 71.3606 21.3957C73.1072 21.3957 74.6667 20.5848 75.4776 18.9318C75.9142 18.0897 76.1637 17.0916 76.1637 16.0312C76.1637 14.9708 75.9142 13.9727 75.4776 13.0994C74.6667 11.4464 73.1072 10.6667 71.3606 10.6667C68.7407 10.6667 66.5887 12.8811 66.5887 16.0312V16.0312ZM86.768 8.2963V23.7037H83.5556V8.2963H86.768ZM86.924 2.65107C86.924 3.64912 86.1442 4.42885 85.1462 4.42885C84.1793 4.42885 83.3996 3.64912 83.3996 2.65107C83.3996 1.68421 84.1793 0.904483 85.1462 0.904483C86.1442 0.904483 86.924 1.68421 86.924 2.65107ZM100.086 2.96296C99.6179 2.74464 98.8382 2.46394 97.8402 2.8694C96.3119 3.55556 96.0624 4.17934 96.0624 6.73684V8.2963H100.086V10.9162H96.0624V23.7037H92.8499V10.9162H90.9786V8.2963H92.8499V6.73684C92.8499 4.30409 92.8499 3.74269 93.7856 2.21443C94.7836 0.561404 96.4055 0 98.2456 0C99.0877 0 99.6803 0.218323 100.086 0.467836V2.96296V2.96296ZM116.273 8.2963C116.273 8.2963 112.374 17.5283 109.786 23.7037C107.602 28.8811 105.887 32 102.986 32C102.082 32 100.928 31.5634 100.086 31.0643L101.053 28.2573C101.302 28.4756 101.864 28.7875 102.238 28.8811C104.639 29.5673 106.136 24.5458 107.166 22.0819L101.333 8.2963H104.577L108.819 18.4016L113.029 8.2963H116.273V8.2963Z"
              fill="#fff"
            />
          </svg>
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
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        alt: "",
      };
    },
  },
  // logoUrl: {
  //   default: "/img/logo.svg",
  //   type: String,
  // },
});
const cssVars = computed(() => {
  return {
    "--background-url": `url(${props.media.src.split("public")[1]})`,
  };
});
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
