<template>
  <section class="w-full lg:w-4/5 mx-auto min-h-screen p-4 2xl:p-8">
    <div class="flex mb-4 2xl:mb-8">
      <div class="bg-gray-100 w-auto rounded-md">
        <div class="flex items-center space-x-2 p-2 2xl:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#BBBBBB"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <router-link
            :to="{ name: 'Articles' }"
            class="font-inter 2xl:text-2xl text-gray-400"
            >Back</router-link
          >
        </div>
      </div>
    </div>

    <img
      :src="article.imageUrl1"
      :alt="article.altImage1"
      class="h-screen w-full object-cover rounded-2xl"
    />

    <div class="py-4 lg:py-8 2xl:py-12 font-inter">
      <div class="flex gap-x-4">
        <span
          class="bg-gray-200 font-medium text-sm 2xl:text-xl tracking-widest py-2 px-8 rounded-full"
        >
          {{ category }}
        </span>
      </div>

      <div class="my-6 2xl:my-8">
        <h1
          class="text-gray-900 text-3xl 2xl:text-6xl font-bold tracking-widest"
        >
          {{ article.title }}
        </h1>
        <div class="flex items-center justify-end space-x-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#BBBBBB"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="font-inter text-sm 2xl:text-2xl text-gray-400">
            {{ formatTime(article.publishedDate) }}
          </p>
        </div>
      </div>

      <p
        v-html="article.content"
        class="my-2 2xl:my-4 text-gray-500 leading-relaxed font-medium 2xl:text-3xl"
      ></p>
    </div>

    <img
      :src="article.imageUrl2"
      :alt="article.altImage2"
      class="h-screen w-full object-cover rounded-2xl mb-12"
    />
  </section>
</template>

<script>
import { ref, onUnmounted } from "vue";
import db from "../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";
import moment from "moment";

export default {
  name: "ArticleDetail",

  data() {
    return {
      article: ref([]),
      category: "",
    };
  },

  methods: {
    formatTime(time) {
      return moment(new Date(time)).fromNow();
    },

    categoryName(slug) {
      const getCategory = query(collection(db, "categories"));
      onSnapshot(getCategory, (snapshot) => {
        const foundCategory = snapshot.docs.find(
          (doc) => doc.data().slug === slug
        );
        if (foundCategory) {
          this.category = foundCategory.data().name;
        }
      });
    },
  },

  mounted() {
    const article = query(collection(db, "articles"));
    const getArticle = onSnapshot(article, (snapshot) => {
      const slugToFind = this.$route.params.id;
      const foundArticle = snapshot.docs.find(
        (doc) => doc.data().slug === slugToFind
      );
      if (foundArticle) {
        this.article = foundArticle.data();
        this.categoryName(foundArticle.data().category);
      }
    });
    onUnmounted(getArticle);
  },
};
</script>
