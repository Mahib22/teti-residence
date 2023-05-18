<template>
  <div
    class="flex space-x-12 py-4 2xl:py-6 px-8 border-b overflow-x-auto hide-scroll-bar font-inter 2xl:text-2xl text-gray-400"
  >
    <p class="cursor-pointer whitespace-nowrap" v-scroll-to="'#rooms'">Rooms</p>
    <p class="cursor-pointer whitespace-nowrap" v-scroll-to="'#terrace'">
      Terrace
    </p>
    <p class="cursor-pointer whitespace-nowrap" v-scroll-to="'#bathroom'">
      Bathroom
    </p>
    <p class="cursor-pointer whitespace-nowrap" v-scroll-to="'#kitchen'">
      Kitchen
    </p>
    <p class="cursor-pointer whitespace-nowrap" v-scroll-to="'#parkingarea'">
      Parking Area
    </p>
    <p class="cursor-pointer whitespace-nowrap" v-scroll-to="'#outdoor'">
      Outdoor
    </p>
  </div>

  <div v-for="item in categories" :key="item.id">
    <div
      class="flex space-x-4 items-center py-4 2xl:py-6 px-4 md:px-8"
      :id="item.id"
    >
      <h1 class="font-italian text-xl md:text-2xl 2xl:text-4xl font-medium">
        {{ item.title }}
      </h1>
      <img src="img/icon/line.svg" alt="line" />
    </div>

    <div
      class="grid grid-cols-2 lg:grid-cols-5 2xl:grid-cols-7 gap-2 pb-8 px-4 md:px-8"
    >
      <div v-for="n in 7" :key="n">
        <img
          class="h-28 md:h-56 max-w-full object-cover"
          src="img/room/img2.png"
          alt="gallery"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  data() {
    return {
      categories: [
        {
          id: "rooms",
          title: "Rooms",
        },
        {
          id: "terrace",
          title: "Terrace",
        },
        {
          id: "bathroom",
          title: "Bathroom",
        },
        {
          id: "kitchen",
          title: "Kitchen",
        },
        {
          id: "parkingarea",
          title: "Parking Area",
        },
        {
          id: "outdoor",
          title: "Outdoor",
        },
      ],
    };
  },
};
</script>
