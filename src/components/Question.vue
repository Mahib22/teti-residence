<template>
  <section class="bg-black py-12 2xl:py-16">
    <h1 class="text-white text-5xl 2xl:text-7xl font-light font-italian">
      <marquee-text :repeat="5">
        Frequently Asked Questions <span class="px-2">•</span>
      </marquee-text>
    </h1>
  </section>

  <section class="mx-5 py-8 2xl:p-9 px-4 font-inter">
    <details
      v-for="n in 4"
      :key="n"
      class="transition duration-150 ease-in-out"
    >
      <summary
        class="flex items-center justify-between w-full py-8 2xl:py-20 font-medium text-left text-gray-900 border-b border-gray-200 cursor-pointer 2xl:text-4xl"
      >
        Are the facilities provided in accordance with the price listed ?
      </summary>
      <p
        class="py-12 2xl:py-24 2xl:pr-60 border-b border-gray-200 text-gray-600 2xl:text-3xl"
      >
        We provide many facilities for you. There are facilities such as a AC,
        Wifi, Lemari, TV Cable, Spring Bed, Water Heater, Kamar Mandi Dalam,
        Dapur Bersama, Kulkas Bersama, Area Parkir Motor, Security 1 x 24 Jam,
        Laundry 2 Stell / Hari, dan lain - lain
      </p>
    </details>
  </section>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";

export default {
  name: "Question",
  components: {
    MarqueeText,
  },
};
</script>

<style scoped>
details summary::after {
  content: url("../../public/img/icon/arrow-down-right.svg");
}
details[open] > summary::after {
  content: url("../../public/img/icon/arrow-right.svg");
}
</style>
