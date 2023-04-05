<template>
  <section class="container py-8 mx-auto font-inter">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="-mt-20 md:-mt-36 ml-0 md:ml-16">
        <img
          src="img/icon/spin-text.svg"
          class="animate-spin-slow"
          alt="spin text"
        />
      </div>

      <div
        class="border-b border-gray-400 flex flex-col md:flex-row items-center justify-end py-3"
      >
        <div class="px-5 w-60 text-center md:text-left">
          <p class="text-5xl font-light font-italian">
            Comfort is Our Priority
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center md:grid md:grid-cols-4 md:divide-x text-center"
        >
          <div class="px-6 py-2" v-for="(item, index) in items" :key="index">
            <h1 class="font-bold text-4xl">
              {{ item.number }}<span class="text-blue-700">+</span>
            </h1>
            <p class="text-gray-500">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Stats",
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
};
</script>
