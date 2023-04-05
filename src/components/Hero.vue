<template>
  <Carousel>
    <Slide v-for="n in 5" :key="n">
      <div
        class="h-screen bg-cover w-full"
        style="background-image: url('img/gallery/img4.jpg')"
      >
        <div class="text-left mt-96">
          <h1
            class="mb-2 pl-4 md:pl-12 text-6xl font-light text-white font-italian"
          >
            Deluxe Room
          </h1>
          <div class="flex items-center font-inter">
            <hr class="border-gray-300 w-4/5" />
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
