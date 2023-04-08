<template>
  <section class="bg-black py-8">
    <h1 class="text-gray-300 text-6xl font-light font-italian">
      <marquee-text :repeat="5"> Frequently Asked Questions </marquee-text>
    </h1>
  </section>

  <section class="container mx-auto py-8 px-4 font-inter">
    <details v-for="n in 4" :key="n">
      <summary
        class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 border-b border-gray-200 cursor-pointer"
      >
        Are the facilities provided in accordance with the price listed ?
      </summary>
      <p class="py-5 border-b border-gray-200 text-gray-500">
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
  content: "↘";
  font-size: 1.5rem;
  font-weight: bold;
}
details[open] > summary::after {
  content: "→";
}
</style>
