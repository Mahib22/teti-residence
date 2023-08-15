<template>
  <section class="min-h-screen">
    <div
      class="flex space-x-12 py-4 2xl:py-6 px-8 border-b overflow-x-auto hide-scroll-bar font-inter 2xl:text-2xl"
    >
      <p
        class="cursor-pointer whitespace-nowrap text-gray-400 hover:text-gray-900"
        v-scroll-to="'#lastest'"
      >
        Lastest
      </p>
      <p
        v-for="item in categories"
        :key="item.name"
        class="cursor-pointer whitespace-nowrap text-gray-400 hover:text-gray-900"
      >
        {{ item.name }}
      </p>
    </div>

    <div
      class="flex space-x-4 items-center py-4 2xl:py-6 px-4 md:px-8"
      id="lastest"
    >
      <h1 class="font-italian text-xl md:text-2xl 2xl:text-4xl font-medium">
        Lastest
      </h1>
      <img src="img/icon/line.svg" alt="line" />
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-3 pb-8 px-4 md:px-8"
    >
      <div v-for="n in 6" :key="n" class="mb-4">
        <router-link :to="{ name: 'RoomDetail', params: { id: n } }">
          <img
            class="h-48 w-full object-cover"
            src="img/img1.png"
            alt="card-image"
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
              10 mins ago
            </p>
          </div>
          <h1 class="font-inter font-semibold lg:text-xl 2xl:text-2xl">
            Big Mango Street Boarding House 2
          </h1>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onUnmounted } from "vue";
import db from "../firebase";
import { onSnapshot, collection, query } from "firebase/firestore";

export default {
  name: "Articles",

  data() {
    return {
      categories: ref([]),
    };
  },

  mounted() {
    const latestQuery = query(collection(db, "categories"));
    const livemessages = onSnapshot(latestQuery, (snapshot) => {
      this.categories = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.data().name,
        };
      });
    });
    onUnmounted(livemessages);
  },
};
</script>
