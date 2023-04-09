<template>
  <section class="bg-black py-8">
    <h1 class="text-gray-300 text-5xl font-light font-italian">
      <marquee-text :repeat="5">
        Frequently Asked Questions <span class="px-2">•</span>
      </marquee-text>
    </h1>
  </section>

  <section class="container mx-auto py-8 px-4 font-inter">
    <details
      v-for="n in 4"
      :key="n"
      class="transition duration-150 ease-in-out"
    >
      <summary
        class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 border-b border-gray-200 cursor-pointer"
      >
        Are the facilities provided in accordance with the price listed ?
      </summary>
      <p class="py-8 border-b border-gray-200 text-gray-600">
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
