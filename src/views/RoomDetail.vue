<template>
  <section
    class="px-2 lg:px-5 py-8 2xl:py-20 2xl:px-12 flex sm:flex-nowrap flex-wrap min-h-screen"
  >
    <div class="lg:w-3/5">
      <img :src="image" alt="img-card" />
    </div>

    <div
      class="flex flex-col ml-2 lg:ml-8 pt-4 lg:pt-0 font-inter lg:w-2/5 w-full"
    >
      <h2 class="text-gray-500 2xl:text-2xl tracking-widest pb-2 2xl:pb-4">
        {{ studioType }}
      </h2>
      <h1
        class="text-gray-900 text-3xl 2xl:text-6xl font-semibold uppercase pb-4 2xl:pb-8"
      >
        {{ name }}
      </h1>
      <h3 class="text-gray-900 text-lg 2xl:text-3xl font-light pb-2 2xl:pb-4">
        Rp {{ price }},- / {{ status }}
      </h3>

      <div class="flex space-x-4 pb-4 2xl:pb-8 2xl:text-2xl">
        <p>
          <span class="text-gray-500">Luas : </span>
          <span class="font-medium">{{ wide }} m</span>
        </p>
        <p>
          <span class="text-gray-500">Lantai : </span>
          <span class="font-medium">{{ floor }}</span>
        </p>
      </div>

      <div class="pb-4 2xl:pb-12">
        <p class="text-gray-500 2xl:text-2xl pb-2 2xl:pb-4">Fasilitas :</p>
        <div class="flex flex-wrap mb-2 2xl:mb-4 space-x-4 2xl:space-x-8">
          <div class="flex space-x-2 items-center">
            <img
              src="../../public/img/icon/cool-to-dry.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium">
              Air Conditioner
            </p>
          </div>
          <div class="flex space-x-2 items-center">
            <img
              src="../../public/img/icon/wifi.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium">Wi-Fi</p>
          </div>
        </div>

        <div class="flex flex-wrap mb-2 2xl:mb-4 space-x-4 2xl:space-x-8">
          <div class="flex space-x-2 items-center">
            <img
              src="../../public/img/icon/wardrobe.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium">Wardrobe</p>
          </div>
          <div class="flex space-x-2 items-center">
            <img
              src="../../public/img/icon/water-flash.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium">Hot Water</p>
          </div>
        </div>

        <div class="flex flex-wrap mb-2 2xl:mb-4 space-x-4 2xl:space-x-8">
          <div class="flex space-x-2 items-center">
            <img
              src="../../public/img/icon/door-closed.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium">
              Bathroom Inside
            </p>
          </div>
          <div class="flex space-x-2 items-center" v-if="tv">
            <img
              src="../../public/img/icon/tv.svg"
              class="h-5 2xl:h-10"
              alt="icon"
            />
            <p class="2xl:text-2xl text-gray-900 font-medium">TV</p>
          </div>
        </div>

        <p class="2xl:text-2xl" v-if="laundry">
          <span class="text-gray-500">Laundry : </span>
          <span class="text-gray-900 font-medium">2 pasang / hari</span>
        </p>
      </div>

      <button
        class="relative btn-hover w-full lg:w-1/2 text-lime border hover:text-white border-lime focus:ring-4 focus:outline-none focus:ring-lime py-3 2xl:py-6 2xl:text-2xl"
      >
        Book Now
      </button>
    </div>
  </section>
</template>

<script>
import data from "../data/room.json";

export default {
  name: "RoomDetail",

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
      image: "",
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
    this.image = room.image[0];
  },
};
</script>
