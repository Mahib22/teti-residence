<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide">
      <img
        :src="'img/gallery/' + slide"
        :alt="slide"
        class="h-96 w-full bg-cover"
      />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>

  <section class="container px-5 py-8 mx-auto overflow-hidden">
    <div class="mx-auto flex flex-wrap items-center">
      <div class="lg:w-1/3 w-full lg:h-auto">
        <h1 class="text-6xl font-bold font-italian text-center">
          Elevate Your Stay
        </h1>
      </div>
      <div class="lg:w-2/3 w-full lg:pl-12 mt-2 font-inter">
        <p class="text-gray-500">
          The Deluxe Room type is designed with a luxurious modern design.
          Suitable for young executives or students who are looking for a wider
          elegant atmosphere to increase work productivity.
          <a href="#" class="underline text-blue-800">See More</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

export default {
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"],
    };
  },
};
</script>
