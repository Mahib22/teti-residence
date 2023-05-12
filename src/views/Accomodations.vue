<template>
  <!-- SECTION HERO -->
  <section
    class="bg-cover object-cover w-full"
    style="background-image: url('img/hero.png')"
  >
    <div class="px-4 mx-auto text-center py-24 lg:py-48 2xl:py-64 text-white">
      <h1 class="mb-4 md:mb-12 text-4xl font-italian md:text-6xl 2xl:text-8xl">
        Accomodations .
      </h1>
      <p class="text-sm font-inter md:text-xl 2xl:text-4xl sm:px-16 lg:px-48">
        There are various boarding rooms that can make you comfortable
      </p>
    </div>
  </section>
  <!-- END OF SECTION HERO -->

  <section class="flex flex-wrap">
    <div
      class="lg:w-1/4 bg-white lg:py-6 lg:sticky lg:h-full lg:z-10 lg:top-28 overflow-x-auto hide-scroll-bar mx-4 lg:mx-0"
    >
      <div
        class="lg:p-8 2xl:p-16 font-italian text-2xl lg:text-4xl 2xl:text-6xl flex lg:flex-col lg:space-y-12 2xl:space-y-20 lg:space-x-0 space-x-4 py-4 whitespace-nowrap"
      >
        <p
          v-for="(filter, index) in filters"
          :key="index"
          @click="filterRoom(filter)"
          class="text-gray-400 hover:text-gray-900 cursor-pointer"
          :class="[filter === activeFilter ? 'text-gray-900' : '']"
        >
          {{ filter }}
        </p>
      </div>
    </div>

    <div
      class="lg:w-3/4 lg:p-12 2xl:p-24 px-4 py-8 border-t lg:border-l border-gray-200 card-scroll-bar overflow-x-auto flex min-w-full md:min-w-0"
    >
      <div
        class="flex flex-nowrap space-x-4 lg:space-x-0 lg:grid lg:gap-x-4 2xl:gap-x-10 lg:gap-y-4 2xl:gap-y-10 lg:grid-cols-3"
      >
        <div
          class="border border-gray-200 p-3 2xl:p-6 w-64 lg:w-full"
          v-for="(room, index) in getRooms"
          :key="index"
        >
          <div class="inline-block">
            <img :src="room.image[0]" alt="img-card" />

            <h5
              class="my-2 2xl:my-6 text-lg 2xl:text-4xl font-medium tracking-tight text-gray-900"
            >
              {{ room.name }}
            </h5>

            <div class="pb-2">
              <div class="flex flex-wrap mb-2 2xl:mb-4 space-x-4 2xl:space-x-8">
                <div class="flex space-x-2 items-center">
                  <img
                    src="img/icon/cool-to-dry.svg"
                    class="2xl:h-6"
                    alt="icon"
                  />
                  <p class="text-sm 2xl:text-2xl text-gray-400">
                    Air Conditioner
                  </p>
                </div>
                <div class="flex space-x-2 items-center">
                  <img src="img/icon/wifi.svg" class="2xl:h-6" alt="icon" />
                  <p class="text-sm 2xl:text-2xl text-gray-400">Wi-Fi</p>
                </div>
              </div>

              <div class="flex flex-wrap mb-2 2xl:mb-4 space-x-4 2xl:space-x-8">
                <div class="flex space-x-2 items-center">
                  <img src="img/icon/wardrobe.svg" class="2xl:h-6" alt="icon" />
                  <p class="text-sm 2xl:text-2xl text-gray-400">Wardrobe</p>
                </div>
                <div class="flex space-x-2 items-center">
                  <img
                    src="img/icon/water-flash.svg"
                    class="2xl:h-6"
                    alt="icon"
                  />
                  <p class="text-sm 2xl:text-2xl text-gray-400">Hot Water</p>
                </div>
              </div>

              <div class="flex flex-wrap mb-2 2xl:mb-4 space-x-4 2xl:space-x-8">
                <div class="flex space-x-2 items-center">
                  <img
                    src="img/icon/door-closed.svg"
                    class="2xl:h-6"
                    alt="icon"
                  />
                  <p class="text-sm 2xl:text-2xl text-gray-400">
                    Bathroom Inside
                  </p>
                </div>
                <div class="flex space-x-2 items-center" v-if="room.tv">
                  <img src="img/icon/tv.svg" class="2xl:h-6" alt="icon" />
                  <p class="text-sm 2xl:text-2xl text-gray-400">TV</p>
                </div>
              </div>
            </div>

            <hr class="border-gray-300" />

            <p
              class="font-medium text-gray-400 text-sm 2xl:text-2xl py-3 2xl:py-6"
            >
              Starting from
              <span class="font-semibold text-gray-900 ml-1"
                >Rp {{ room.price }},- / {{ room.status }}</span
              >
            </p>

            <div class="pt-2 2xl:pb-2 w-full flex">
              <button
                @click="showDetail(room.id)"
                class="relative w-full flex btn-hover items-center justify-center text-lime border hover:text-white border-lime focus:ring-4 focus:outline-none focus:ring-lime py-3 2xl:py-6 2xl:text-2xl"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "Accomodations",

  methods: {
    showDetail(id) {
      this.$router.push({ name: "RoomDetail", params: { id: id } });
    },
  },

  setup() {
    const filters = ref(["Standard Room", "Superior Room", "Deluxe Room"]);
    const rooms = ref([
      {
        id: 1,
        studioType: "Standard Room",
        name: "Studio 3",
        price: "120.000",
        wide: "2,5 x 3",
        tv: true,
        laundry: false,
        floor: 4,
        status: "Night",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 2,
        studioType: "Superior Room",
        name: "Studio 2",
        price: "130.000",
        wide: "3 x 4",
        tv: true,
        laundry: false,
        floor: 3,
        status: "Night",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 3,
        studioType: "Deluxe Room",
        name: "Studio 1",
        price: "170.000",
        wide: "3,5 x 5",
        tv: true,
        laundry: false,
        floor: 3,
        status: "Night",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 4,
        studioType: "Standard Room",
        name: "Studio 3",
        price: "1.300.000",
        wide: "2,5 x 3",
        tv: false,
        laundry: false,
        floor: 4,
        status: "Month",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/gallery-teti.appspot.com/o/Standard-Room-1-scaled.jpg?alt=media&token=2fd1a8d4-29ae-42d8-a94d-48ce77db8a58",
          "https://firebasestorage.googleapis.com/v0/b/gallery-teti.appspot.com/o/standard-room-shower.JPG?alt=media&token=3f7c9c83-af3d-4bf3-a29c-f93a27d3b348",
        ],
      },
      {
        id: 5,
        studioType: "Standard Room",
        name: "Studio 3+",
        price: "1.400.000",
        wide: "2,5 x 3",
        tv: true,
        laundry: false,
        floor: 3,
        status: "Month",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/gallery-teti.appspot.com/o/Standard-Room-1-scaled.jpg?alt=media&token=2fd1a8d4-29ae-42d8-a94d-48ce77db8a58",
          "https://firebasestorage.googleapis.com/v0/b/gallery-teti.appspot.com/o/standard-room-shower.JPG?alt=media&token=3f7c9c83-af3d-4bf3-a29c-f93a27d3b348",
        ],
      },
      {
        id: 6,
        studioType: "Standard Room",
        name: "Studio 3++",
        price: "1.500.000",
        wide: "2,5 x 3",
        tv: true,
        laundry: true,
        floor: 2,
        status: "Month",
        image: [
          "https://firebasestorage.googleapis.com/v0/b/gallery-teti.appspot.com/o/Standard-Room-1-scaled.jpg?alt=media&token=2fd1a8d4-29ae-42d8-a94d-48ce77db8a58",
          "https://firebasestorage.googleapis.com/v0/b/gallery-teti.appspot.com/o/standard-room-shower.JPG?alt=media&token=3f7c9c83-af3d-4bf3-a29c-f93a27d3b348",
        ],
      },
      {
        id: 7,
        studioType: "Superior Room",
        name: "Studio 2",
        price: "1.700.000",
        wide: "3 x 4",
        tv: true,
        laundry: false,
        floor: 3,
        status: "Month",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 8,
        studioType: "Superior Room",
        name: "Studio 2++",
        price: "2.000.000",
        wide: "3 x 4",
        tv: true,
        laundry: true,
        floor: 1,
        status: "Month",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 9,
        studioType: "Deluxe Room",
        name: "Studio 1",
        price: "1.800.000",
        wide: "3,5 x 5",
        tv: true,
        laundry: false,
        floor: 3,
        status: "Month",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 10,
        studioType: "Deluxe Room",
        name: "Studio 1+",
        price: "2.000.000",
        wide: "3,5 x 5",
        tv: true,
        laundry: true,
        floor: 3,
        status: "Month",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 11,
        studioType: "Deluxe Room",
        name: "Studio 1++",
        price: "2.000.000",
        wide: "3,5 x 5",
        tv: true,
        laundry: false,
        floor: 2,
        status: "Month",
        image: ["https://dummyimage.com/720x400"],
      },
      {
        id: 12,
        studioType: "Deluxe Room",
        name: "Studio 1+++",
        price: "2.200.000",
        wide: "3,5 x 5",
        tv: true,
        laundry: true,
        floor: 2,
        status: "Month",
        image: ["https://dummyimage.com/720x400"],
      },
    ]);
    const activeFilter = ref("Standard Room");

    function filterRoom(studioType) {
      activeFilter.value = studioType;
    }

    const getRooms = computed(() => {
      return rooms.value.filter(
        (item) => item.studioType === activeFilter.value
      );
    });

    return {
      filters,
      activeFilter,
      filterRoom,
      getRooms,
    };
  },
};
</script>
