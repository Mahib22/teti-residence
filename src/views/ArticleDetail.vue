<template>
  <section class="w-full lg:w-4/5 mx-auto min-h-screen p-4 2xl:p-8">
    <img
      :src="article.imageUrl1"
      :alt="article.altImage1"
      class="h-80 w-full object-cover rounded-2xl"
    />

    <div class="py-4 lg:py-8 2xl:py-12 font-inter">
      <div class="flex gap-x-4">
        <span
          class="bg-gray-200 font-medium text-sm 2xl:text-xl tracking-widest py-2 px-8 rounded-full"
        >
          {{ article.category }}
        </span>
      </div>
      <h1
        class="text-gray-900 text-3xl 2xl:text-6xl font-bold uppercase my-6 2xl:my-8"
      >
        {{ article.title }}
      </h1>
      <p
        v-html="article.content"
        class="my-2 2xl:my-4 text-gray-500 leading-relaxed font-medium 2xl:text-3xl"
      ></p>
    </div>

    <img
      :src="article.imageUrl2"
      :alt="article.altImage2"
      class="h-80 w-full object-cover rounded-2xl mb-12"
    />
  </section>
</template>

<script>
import { ref, onUnmounted } from "vue";
import db from "../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";

export default {
  name: "ArticleDetail",

  data() {
    return {
      article: ref([]),
    };
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
      }
    });
    onUnmounted(getArticle);
  },
};
</script>
