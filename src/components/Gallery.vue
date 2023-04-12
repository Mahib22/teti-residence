<template>
  <Carousel>
    <Slide v-for="n in 5" :key="n">
      <img src="img/hero.png" alt="img" class="h-screen w-full object-cover" />
    </Slide>

    <template #addons>
      <navigation>
        <template #next>
          <img
            src="img/icon/arrow-right-circle.svg"
            class="md:max-w-md"
            alt="Arrow Right Circle"
          />
        </template>
        <template #prev>
          <img
            src="img/icon/arrow-left-circle.svg"
            class="md:max-w-md"
            alt="Arrow Left Circle"
          />
        </template>
      </navigation>
    </template>
  </Carousel>

  <section class="px-5 py-8 2xl:py-16 overflow-hidden">
    <div class="flex flex-wrap items-center">
      <div class="lg:w-1/3 w-full lg:h-auto">
        <h1
          class="text-4xl md:text-5xl 2xl:text-7xl font-semibold font-italian text-center"
        >
          Elevate Your Stay
        </h1>
      </div>
      <div class="lg:w-2/3 w-full lg:pl-12 mt-2 font-inter">
        <p class="text-gray-500 2xl:text-3xl md:mr-8 2xl:mr-24">
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
};
</script>
