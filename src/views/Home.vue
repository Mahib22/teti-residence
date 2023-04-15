<script setup>
import { Rating } from "flowbite-vue";
</script>

<template>
  <!-- SECTION HERO -->
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

            <h1 class="pl-8 font-bold">
              <span class="text-white text-2xl md:text-5xl">0{{ n }}</span
              ><span class="text-gray-600 text-lg md:text-2xl"> /05</span>
            </h1>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <navigation-slider />
    </template>
  </Carousel>
  <!-- END OF SECTION HERO -->

  <!-- SECTION ABOUT -->
  <section class="py-4 md:py-8" @scroll="handleScroll">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div class="flex flex-row">
        <div class="-mt-12 md:-mt-36 ml-4 md:mx-16 2xl:mx-28">
          <img
            src="img/icon/spin-text.svg"
            class="animate-spin-slow h-28 md:h-60 2xl:h-80"
            alt="spin text"
          />
        </div>
        <p class="px-6 text-2xl font-italian md:hidden">
          Comfort is Our Priority
        </p>
      </div>

      <div
        class="w-full md:border-b border-gray-300 flex flex-col md:flex-row items-center justify-between py-5 md:pt-0 2xl:py-6 2xl:ml-16"
      >
        <div
          class="w-60 md:w-56 2xl:w-80 text-center md:text-left hidden md:flex"
        >
          <p class="text-4xl 2xl:text-6xl font-italian">
            Comfort is Our Priority
          </p>
        </div>

        <div
          class="flex flex-wrap justify-center border-t md:border-t-0 border-gray-300 md:grid md:grid-cols-4 md:divide-x text-center font-inter md:px-8 2xl:px-24"
        >
          <div
            class="px-6 md:px-8 py-4 2xl:py-8"
            v-for="(item, index) in facilities"
            :key="index"
          >
            <h1 class="font-bold text-4xl 2xl:text-7xl">
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="item.number"
                :duration="10"
              />
              <span class="text-blue-700">+</span>
            </h1>
            <p class="text-gray-500 2xl:text-3xl">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="md:px-14 2xl:py-6 mb-8 mx-auto text-center">
    <div
      class="flex flex-row md:flex-wrap items-center justify-center md:space-x-4 p-4 2xl:py-6"
    >
      <img src="img/icon/left-line.svg" class="h-1.5 md:h-4" alt="Left Line" />
      <p class="text-gray-500 font-inter 2xl:text-4xl text-sm md:text-lg">
        Welcome to The Teti Residence
      </p>
      <img
        src="img/icon/right-line.svg"
        class="h-1.5 md:h-4"
        alt="Right Line"
      />
    </div>

    <h1 class="md:text-6xl 2xl:text-8xl p-3 2xl:py-6 font-italian text-4xl">
      Get to Know About The Teti Residence
    </h1>

    <p
      class="text-gray-400 py-2 md:py-6 px-5 md:px-20 font-inter 2xl:text-3xl 2xl:py-8 2xl:px-48"
    >
      The Teti Residence merupakan tempat penyewaan kost kostan di Mangga Besar
      Jakarta. Banyak pilihan kamar kost yang ditawarkan oleh The Teti Residence
      mulai dari Deluxe Room , Superior Room, Standard Room, hingga Studio Room.
      Anda bisa sewa kost di Mangga Besar dengan sistem harian, mingguan, atau
      bulanan. Lokasi kost sangat strategis dekat dengan Stasiun, Mall, dan
      Tempat Wisata lainnya.
      <a href="#" class="underline text-blue-800">See Less</a>
    </p>
  </section>

  <iframe
    src="https://www.youtube.com/embed/ZynMjLPYSVY"
    frameborder="0"
    class="h-60 md:h-128 2xl:h-142 w-full"
  ></iframe>

  <section
    class="px-6 2xl:pl-12 md:pr-0 py-12 2xl:py-16 mx-auto overflow-hidden"
  >
    <div class="mx-auto flex flex-wrap">
      <div class="md:w-1/3 w-full md:h-auto">
        <img
          alt="img"
          class="h-4/5 object-cover w-full"
          :src="'img/gallery/' + image_default"
        />
        <Carousel :items-to-show="3" :wrap-around="true" class="my-2 w-full">
          <Slide v-for="slide in slides" :key="slide">
            <div
              @click="changeImage(slide)"
              :class="slide == image_default ? '' : 'opacity-25'"
            >
              <img
                :src="'img/gallery/' + slide"
                :alt="slide"
                class="px-1 h-36 object-cover cursor-pointer"
              />
            </div>
          </Slide>
        </Carousel>
      </div>

      <div
        class="md:w-2/3 w-full md:pl-16 md:py-4 2xl:pl-32 2xl:py-8 mt-24 md:mt-0"
      >
        <div class="grid grid-cols-1 divide-y-2">
          <div class="flex flex-wrap items-center mb-6 md:mb-12 2xl:mb-24">
            <h1
              class="text-3xl md:text-5xl 2xl:text-7xl font-medium mr-14 2xl:mr-24 font-italian"
            >
              Why Choose Us
            </h1>
            <img
              src="img/icon/right-line.svg"
              class="h-4 hidden lg:block 2xl:h-10"
              alt="Right Line"
            />
          </div>

          <div
            class="py-6 2xl:py-12 font-inter"
            v-for="(item, index) in benefits"
            :key="index"
          >
            <div class="flex items-center">
              <img
                :src="'img/icon/' + item.icon + '.svg'"
                class="h-6 2xl:h-10"
                alt="icon"
              />
              <h2 class="font-bold py-2 ml-2 2xl:ml-6 2xl:text-4xl">
                {{ item.title }}
              </h2>
            </div>
            <p
              class="text-gray-500 py-2 2xl:text-3xl 2xl:pr-24 2xl:py-4 md:pr-12"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Carousel :touch-drag="false">
    <Slide v-for="n in 5" :key="n">
      <img
        src="img/hero.png"
        alt="img"
        class="h-72 md:h-screen w-full object-cover"
      />
    </Slide>

    <template #addons>
      <navigation-slider />
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
  <!-- END OF SECTION ABOUT -->

  <!-- SECTION FAQ -->
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
  <!-- END OF SECTION FAQ -->

  <!-- SECTION TESTIMONI -->
  <section class="p-5 2xl:px-9 2xl:py-16 overflow-hidden">
    <div class="flex flex-wrap">
      <div class="lg:w-1/3 2xl:1/4 w-full lg:h-auto p-4 2xl:py-8 2xl:px-20">
        <h1 class="text-4xl md:text-6xl 2xl:text-7xl 2xl:pr-52 font-italian">
          Listen to What They All Have to Say
        </h1>
        <div class="flex justify-end">
          <button
            type="button"
            @click="prevSlide()"
            class="text-white bg-gray-300 hover:bg-gray-900 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 2xl:w-12 2xl:h-12"
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
            @click="nextSlide()"
            class="text-white bg-gray-300 hover:bg-gray-900 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 2xl:w-12 2xl:h-12"
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

      <div
        class="lg:w-2/3 2xl:3/4 w-full lg:pl-12 lg:py-6 mt-6 lg:mt-0 font-inter"
      >
        <Carousel
          :breakpoints="testimoniSlide"
          :autoplay="2000"
          :wrap-around="true"
          ref="myCarousel"
        >
          <Slide v-for="slide in 10" :key="slide">
            <div
              class="p-4 2xl:p-16 mx-2 bg-white border border-gray-200 hover:bg-gray-900 text-gray-500 hover:text-gray-100 cursor-pointer 2xl:text-3xl"
            >
              <p class="mb-4">
                "Ga berisik, tenang dan gampang order makanan dari kamar."
              </p>
              <Rating :rating="4" size="md" class="mb-2 flex justify-center" />
              <p class="text-center">Nindi</p>
              <p class="text-center">UI/UX Designer</p>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </section>
  <!-- END OF SECTION TESTIMONI -->

  <!-- SECTION OUR CLIENT -->
  <hr class="border-gray-300 md:mx-8 m-2" />

  <section class="py-12 2xl:py-20">
    <Carousel :autoplay="2000" :breakpoints="clientSlide" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <img src="img/client/mamikos.png" alt="mamikos" />
      </Slide>
    </Carousel>
  </section>
  <!-- END OF SECTION OUR CLIENT -->
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import Vue3autocounter from "vue3-autocounter";
import MarqueeText from "vue-marquee-text-component";
import NavigationSlider from "@/components/NavigationSlider";

export default {
  name: "Home",

  components: {
    Carousel,
    Slide,
    "vue3-autocounter": Vue3autocounter,
    MarqueeText,
    NavigationSlider,
  },

  data() {
    return {
      facilities: [
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
      image_default: "img1.png",
      slides: ["img1.png", "img2.png", "img3.png"],
      benefits: [
        {
          icon: "map",
          title: "Strategic Location",
          description:
            "The Teti Residence is located on Jalan Mangga Besar 13, Central Jakarta. Closeto Malls, Hospitals, Minimarkets, Universities and other places. You can go anywhere easily.",
        },
        {
          icon: "money",
          title: "Cheaper Price",
          description:
            "The Teti Residence offers a lower price. You can rent a boarding house on a Daily, Weekly and Monthly basis. The boarding rooms offered range from Deluxe Rooms, Superior Rooms, Standard Rooms, and Studio Rooms",
        },
        {
          icon: "fridge",
          title: "Complete Facilities",
          description:
            "We provide many facilities for you. There are facilities such as a kitchen, Wifi, TV, parking area, and many more",
        },
        {
          icon: "shield",
          title: "Safe and Convenient Location",
          description:
            "Our Boarding House environment is very safe, because it is always monitored by CCTV and 1 x 24 hour security. You don't need to worry about staying here, both men and women we guarantee the safety and your luggage here.",
        },
      ],
      testimoniSlide: {
        768: {
          itemsToShow: 2.5,
        },
      },
      clientSlide: {
        768: {
          itemsToShow: 4,
        },
        1440: {
          itemsToShow: 8,
        },
      },
    };
  },

  methods: {
    handleScroll() {
      this.$refs.counter.start();
    },
    changeImage(urlImage) {
      this.image_default = urlImage;
    },
    nextSlide() {
      this.$refs.myCarousel.next();
    },
    prevSlide() {
      this.$refs.myCarousel.prev();
    },
  },
};
</script>
