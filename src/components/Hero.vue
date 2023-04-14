<template>
  <Carousel :autoplay="4000" :wrap-around="true" :touch-drag="false">
    <Slide v-for="n in 5" :key="n">
      <div
        class="h-72 md:h-screen bg-cover w-full"
        style="background-image: url('img/hero.png')"
      >
        <div class="text-left mt-48 md:mt-70">
          <h1
            class="mb-2 pl-4 md:pl-12 text-2xl md:text-6xl font-light text-white font-italian"
          >
            Deluxe Room
          </h1>
          <div class="flex items-center font-inter">
            <div class="w-3/5 md:w-85 bg-gray-400 h-0.5">
              <div class="bg-gray-100 h-0.5 progress"></div>
            </div>

            <h1 class="pl-8 font-bold text-2xl">
              <span class="text-white md:text-5xl">0{{ n }}</span
              ><span class="text-gray-600"> /05</span>
            </h1>
          </div>
        </div>
      </div>
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
</template>

<script>
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
