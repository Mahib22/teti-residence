<template>
  <section class="min-h-screen">
    <div
      class="flex space-x-12 py-4 2xl:py-6 px-8 border-b overflow-x-auto hide-scroll-bar font-inter 2xl:text-2xl"
    >
      <p
        @click="filterArticle()"
        class="cursor-pointer whitespace-nowrap text-gray-400 hover:text-gray-900"
        :class="[activeCategory === '' ? 'text-gray-900' : '']"
      >
        Lastest
      </p>
      <p
        v-for="item in categories"
        :key="item.id"
        @click="filterArticle(item.id)"
        class="cursor-pointer whitespace-nowrap text-gray-400 hover:text-gray-900"
        :class="[item.id === activeCategory ? 'text-gray-900' : '']"
      >
        {{ item.name }}
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-3 py-8 px-4 md:px-8"
    >
      <div v-for="item in articles" :key="item.id" class="mb-4">
        <router-link :to="{ name: 'ArticleDetail', params: { id: item.slug } }">
          <img
            class="object-cover rounded-2xl"
            :src="[
              item.yoast_head_json.og_image
                ? item.yoast_head_json.og_image[0]['url']
                : 'https://dummyimage.com/720x400',
            ]"
            alt="img"
          />
          <div class="flex items-center space-x-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#BBBBBB"
              class="w-4 h-4 2xl:w-6 2xl:h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p class="font-inter text-sm 2xl:text-lg text-gray-500">
              {{ formatDate(item.date) }}
            </p>
          </div>
          <h1 class="font-inter font-semibold lg:text-xl 2xl:text-2xl">
            {{ item.title.rendered }}
          </h1>
        </router-link>
      </div>
    </div>

    <div v-if="articles.length === 0">
      <h1 class="text-xl md:text-2xl 2xl:text-4xl font-bold text-center">
        Article not found
      </h1>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import moment from "moment";

export default {
  name: "Articles",

  data() {
    return {
      categories: ref([]),
      articles: ref([]),
      activeCategory: "",
      base_url: "https://thetetiresidence.com/articles/wp-json/wp/v2",
    };
  },

  methods: {
    async fetchCategory() {
      const response = await fetch(`${this.base_url}/categories`);
      this.categories = await response.json();
    },

    async filterArticle(id) {
      if (id) {
        const response = await fetch(`${this.base_url}/posts?categories=${id}`);
        this.articles = await response.json();
        this.activeCategory = id;
      } else {
        const response = await fetch(`${this.base_url}/posts`);
        this.articles = await response.json();
        this.activeCategory = "";
      }
    },

    formatDate(date) {
      return moment(new Date(date)).fromNow();
    },
  },

  mounted() {
    this.fetchCategory();
    this.filterArticle();
  },
};
</script>
