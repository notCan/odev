<template>
  <header>
    <div
      v-if="!mobileNav"
      class="header-desktop base-container py-4 mb-6 md:mb-12"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <nuxt-link :to="headerData.logo.link">
            <img class="w-24 md:w-36 h-auto text-2xl" src="/img/1671662417277_logo.png" :alt="headerData.logo.alt">
          </nuxt-link>
        </div>
        <nav class="hidden md:flex items-center">
          <div v-for="nav in headerData.navigation.list" :key="nav">
            <nuxt-link
              :to="nav.link"
              class="nav-link px-3 py-1"
              exact-active-class="text-primary"
            >
              {{ nav.name }}
            </nuxt-link>
          </div>
          <nuxt-link v-if="headerData.button" class="btn-primary ml-3" :to="headerData.button.link">
            {{ headerData.button.label }}
          </nuxt-link>
        </nav>
        <button
          class="block md:hidden btn-primary-outline"
          @click="mobileNav = true"
        >
          <i class="ri-menu-line" />
        </button>
      </div>
    </div>
    <div
      v-if="mobileNav"
      class="header-mobile flex flex-col fixed md:hidden w-screen h-screen bg-white z-10 p-4"
    >
      <div class="flex justify-between w-full">
        <div class="flex items-center">
          <nuxt-link to="/">
            <img class="w-24 md:w-36 h-auto text-2xl" :src="headerData.logo.src.split('public')[1]" :alt="headerData.logo.alt">
          </nuxt-link>
        </div>
        <button class="block md:hidden app-link" @click="mobileNav = false">
          <i class="ri-close-line text-2xl" />
        </button>
      </div>
      <nav class="flex flex-col mt-4">
        <div v-for="nav in headerData.navigation.list" :key="nav">
          <nuxt-link
            :to="nav.link"
            class="nav-link block p-3 text-lg"
            exact-active-class="text-primary"
          >
            {{ nav.name }}
          </nuxt-link>
        </div>
        <nuxt-link
          class="nav-link block p-3 text-lg"
          exact-active-class="text-primary"
          :to="headerData.button.link"
        >
          {{ headerData.button.label }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
const { data } = await useAsyncData('header', () =>
  queryContent('contentrain', 'header').findOne()
)
const headerData = data.value.body[0]

const route = useRoute()
const mobileNav = ref(false)
watch(
  () => mobileNav.value,
  (val) => {
    if (val) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
)
watch(
  () => route.path,
  (val) => {
    if (val) {
      mobileNav.value = false
    }
  }
)
</script>
