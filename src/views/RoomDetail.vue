<template>
  <section class="w-full lg:w-3/4 mx-auto min-h-screen p-4">
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="item in image" :key="item">
        <img
          :src="item"
          alt="img-slide"
          class="h-40 lg:h-80 w-full object-cover"
        />
      </Slide>
    </Carousel>

    <div class="py-4 lg:py-8 font-inter">
      <div class="lg:flex justify-between items-center">
        <div>
          <h2 class="text-gray-500 2xl:text-2xl tracking-widest pb-2">
            {{ studioType }}
          </h2>
          <h1
            class="text-gray-900 text-3xl 2xl:text-6xl font-semibold uppercase pb-2"
          >
            {{ name }}
          </h1>
        </div>
        <div>
          <h3 class="text-gray-900 text-xl 2xl:text-3xl font-light">
            Rp {{ price }},- / {{ status }}
          </h3>
        </div>
      </div>

      <div class="py-4">
        <h2 class="font-semibold tracking-wider text-xl py-2">Info Kamar</h2>
        <p class="2xl:text-2xl pb-1">
          <span class="text-gray-500">Luas : </span>
          <span class="font-medium">{{ wide }} m</span>
        </p>
        <p class="2xl:text-2xl">
          <span class="text-gray-500">Lantai : </span>
          <span class="font-medium">{{ floor }}</span>
        </p>
      </div>

      <div class="py-4">
        <h2 class="font-semibold tracking-wider text-xl py-2">
          Fasilitas Kamar
        </h2>
        <div class="py-1">
          <div class="flex space-x-2 items-center pb-2">
            <img
              src="../../public/img/icon/cool-to-dry.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">
              Air Conditioner
            </p>
          </div>
          <div class="flex space-x-2 items-center pb-2">
            <img
              src="../../public/img/icon/wifi.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">Wi-Fi</p>
          </div>
          <div class="flex space-x-2 items-center pb-2">
            <img
              src="../../public/img/icon/wardrobe.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">Wardrobe</p>
          </div>
          <div class="flex space-x-2 items-center pb-2">
            <img
              src="../../public/img/icon/water-flash.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">Hot Water</p>
          </div>
          <div class="flex space-x-2 items-center pb-2">
            <img
              src="../../public/img/icon/door-closed.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">
              Bathroom Inside
            </p>
          </div>
          <div class="flex space-x-2 items-center pb-2" v-if="tv">
            <img
              src="../../public/img/icon/tv.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">TV</p>
          </div>
          <div class="flex space-x-2 items-center pb-2" v-if="laundry">
            <img
              src="../../public/img/icon/laundry.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium pl-2">
              Laundry 2 pasang / hari
            </p>
          </div>
        </div>
      </div>

      <div class="lg:flex justify-end">
        <button
          class="relative btn-hover w-full lg:w-1/4 text-lime border hover:text-white border-lime focus:ring-4 focus:outline-none focus:ring-lime py-3 2xl:py-6 2xl:text-2xl"
        >
          Book Now
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import data from "../data/room.json";
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "RoomDetail",

  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      name: "",
      studioType: "",
      price: "",
      wide: "",
      tv: false,
      laundry: false,
      floor: 0,
      status: "",
      image: [],
    };
  },

  mounted() {
    let rooms = new Proxy(data, {});
    let id = this.$route.params.id;
    let room = rooms.find((item) => item.id == id);
    this.name = room.name;
    this.studioType = room.studioType;
    this.price = room.price;
    this.wide = room.wide;
    this.tv = room.tv;
    this.laundry = room.laundry;
    this.floor = room.floor;
    this.status = room.status;
    this.image = room.image;
  },
};
</script>
