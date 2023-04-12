<template>
  <section class="py-8" @scroll="handleScroll">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="-mt-20 md:-mt-36 ml-0 md:mx-16 2xl:mx-28">
        <img
          src="img/icon/spin-text.svg"
          class="animate-spin-slow 2xl:h-80"
          alt="spin text"
        />
      </div>

      <div
        class="w-full border-b border-gray-300 flex flex-col md:flex-row items-center justify-between py-5 md:pt-0 2xl:py-6 2xl:ml-16"
      >
        <div class="w-60 md:w-56 2xl:w-80 text-center md:text-left">
          <p class="text-4xl 2xl:text-6xl font-italian">
            Comfort is Our Priority
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center md:grid md:grid-cols-4 md:divide-x text-center font-inter md:px-8 2xl:px-24"
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
