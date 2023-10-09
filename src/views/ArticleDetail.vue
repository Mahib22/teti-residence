<template>
  <section class="w-full lg:w-4/5 mx-auto min-h-screen p-4 2xl:p-8">
    <div class="flex mb-4 2xl:mb-8">
      <div class="bg-lime w-auto rounded-md">
        <router-link
          :to="{ name: 'Articles' }"
          class="flex items-center space-x-2 p-2 2xl:p-4 font-inter 2xl:text-2xl text-white font-medium"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="#ffff"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span> Back</span>
        </router-link>
      </div>
    </div>

    <div class="py-4 lg:py-8 2xl:py-12 font-inter">
      <div class="flex gap-x-4">
        <span
          class="bg-gray-200 font-medium text-sm 2xl:text-xl tracking-widest py-2 px-8 rounded-full"
        >
          {{ article.category }}
        </span>
      </div>

      <div class="my-6 2xl:my-8">
        <h1
          class="text-gray-900 text-3xl 2xl:text-6xl font-bold leading-relaxed"
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
            {{ formatTime(article.date) }}
          </p>
        </div>
      </div>

      <p
        v-html="article.content"
        class="my-2 2xl:my-4 text-gray-500 leading-relaxed font-medium 2xl:text-3xl"
      ></p>
    </div>

    <div class="flex mb-12">
      <div class="bg-lime w-auto rounded-md">
        <router-link
          :to="{ name: 'Articles' }"
          class="flex items-center space-x-2 p-2 2xl:p-4 font-inter 2xl:text-2xl text-white font-medium"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="#ffff"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <span> Back</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "ArticleDetail",

  data() {
    return {
      article: {
        title: "",
        content: "",
        date: "",
        category: "",
      },
      base_url: "https://thetetiresidence.com/articles/wp-json/wp/v2",
    };
  },

  methods: {
    formatTime(time) {
      return moment(new Date(time)).fromNow();
    },

    categoryName(id) {
      axios
        .get(`${this.base_url}/categories/${id}`)
        .then((res) => (this.article.category = res.data.name));
    },

    getData(data) {
      this.article.title = data.title.rendered;
      this.article.content = data.content.rendered;
      this.article.date = data.date;
      this.categoryName(data.categories[0]);

      document.title = data.yoast_head_json.og_title;
      document.getElementsByTagName("meta")["description"].content =
        data.yoast_head_json.og_description;
    },
  },

  mounted() {
    axios
      .get(`${this.base_url}/posts?slug=${this.$route.params.id}`)
      .then((res) => this.getData(res.data[0]));
  },
};
</script>
