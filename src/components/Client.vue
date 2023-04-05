<script setup>
import { Rating } from "flowbite-vue";
</script>

<template>
  <section class="container px-5 py-4 mx-auto overflow-hidden">
    <div class="mx-auto flex flex-wrap">
      <div class="lg:w-1/3 w-full lg:h-auto p-8">
        <h1 class="text-2xl md:text-5xl">
          Listen to What They All Have to Say
        </h1>
        <div class="flex justify-end">
          <button
            type="button"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <button
            type="button"
            class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="lg:w-2/3 w-full lg:pl-12 lg:py-6 mt-6 lg:mt-0">
        <Carousel :breakpoints="testimoniSlide" :autoplay="2000">
          <Slide v-for="slide in 10" :key="slide">
            <div
              class="p-4 mx-2 bg-white border border-gray-200 hover:bg-gray-100"
            >
              <p class="text-gray-700 mb-4">
                "Ga berisik, tenang dan gampang order makanan dari kamar."
              </p>
              <Rating :rating="4" class="mb-2 flex justify-center" />
              <p class="text-center">Nindi</p>
              <p class="text-gray-500 text-center">UI/UX Designer</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>

  <hr class="border-gray-300 md:mx-8 mx-2" />

  <section class="py-8">
    <Carousel :autoplay="2000" :breakpoints="clientSlide" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <img src="img/client/mamikos.png" alt="mamikos" />
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "Client",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      testimoniSlide: {
        768: {
          itemsToShow: 2.5,
        },
      },
      clientSlide: {
        768: {
          itemsToShow: 4,
        },
      },
    };
  },
};
</script>
