<template>
  <Carousel :autoplay="4000">
    <Slide v-for="n in 5" :key="n">
      <div
        class="h-screen bg-cover w-full"
        style="background-image: url('img/hero.png')"
      >
        <div class="text-left mt-96">
          <h1
            class="mb-2 pl-4 md:pl-12 text-6xl font-light text-white font-italian"
          >
            Deluxe Room
          </h1>
          <div class="flex items-center font-inter">
            <div class="w-4/5 bg-gray-700 h-0.5">
              <div class="bg-gray-100 h-0.5 progress"></div>
            </div>

            <h1 class="pl-8 text-2xl font-bold">
              <span class="text-white">0{{ n }}</span
              ><span class="text-gray-600"> / 05</span>
            </h1>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Hero",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style scoped>
.progress {
  animation: load 4s infinite;
}
@keyframes load {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
