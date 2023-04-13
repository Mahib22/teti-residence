<template>
  <section class="py-4 md:py-8" @scroll="handleScroll">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="flex flex-row">
        <div class="-mt-12 md:-mt-36 ml-4 md:mx-16 2xl:mx-28">
          <img
            src="img/icon/spin-text.svg"
            class="animate-spin-slow h-28 md:h-60 2xl:h-80"
            alt="spin text"
          />
        </div>
        <p class="px-6 text-2xl font-italian md:hidden">
          Comfort is Our Priority
        </p>
      </div>

      <div
        class="w-full md:border-b border-gray-300 flex flex-col md:flex-row items-center justify-between py-5 md:pt-0 2xl:py-6 2xl:ml-16"
      >
        <div
          class="w-60 md:w-56 2xl:w-80 text-center md:text-left hidden md:flex"
        >
          <p class="text-4xl 2xl:text-6xl font-italian">
            Comfort is Our Priority
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center border-t md:border-t-0 border-gray-300 md:grid md:grid-cols-4 md:divide-x text-center font-inter md:px-8 2xl:px-24"
        >
          <div
            class="px-6 md:px-8 py-4 2xl:py-8"
            v-for="(item, index) in items"
            :key="index"
          >
            <h1 class="font-bold text-4xl 2xl:text-7xl">
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="item.number"
                :duration="10"
              />
              <span class="text-blue-700">+</span>
            </h1>
            <p class="text-gray-500 2xl:text-3xl">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue3autocounter from "vue3-autocounter";

export default {
  name: "Stats",
  components: {
    "vue3-autocounter": Vue3autocounter,
  },
  data() {
    return {
      items: [
        {
          number: 6,
          title: "Room Choice",
        },
        {
          number: 30,
          title: "People Capacity",
        },
        {
          number: 100,
          title: "Nearest Place",
        },
        {
          number: 7,
          title: "Room Facilites",
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      this.$refs.counter.start();
    },
  },
};
</script>
