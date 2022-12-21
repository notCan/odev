import { defineNuxtConfig } from 'nuxt'
import homeData from "./content/contentrain/Home/Home.json"
import { generateMetaTags } from "./helpers/useGenerateMetaTags.js";

const { metaTags } = generateMetaTags(homeData[0].metaData.tags)

// const createSitemapRoutes = async () => {
//   const routes = [];
//   const { $content } = require('@nuxt/content')
//   const articles = await $content('case-studies/', {deep: true}).fetch();
//   for (const post of articles) {
//     routes.push(`${post.path}`);
//   }
//   return routes;
// }

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    lang: "en",
    meta: metaTags,
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/pwa/192x192.png' },
      { rel: 'manifest', href: '/pwa/manifest.json' }
    ]
  },
  css: ['remixicon/fonts/remixicon.css', '~/assets/css/tailwind.css'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss','@nuxtjs/sitemap' ],
  // https://content.nuxtjs.org
  content: {
    // navigation: {
    //   fields: ['navTitle']
    // },
    // highlight: {
    //   // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
    //   theme: 'dracula'
    // }
  },
  // sitemap: {
  //   hostname: 'https://.',
  //   gzip: true,
  //   routes: createSitemapRoutes,
  // }
})
