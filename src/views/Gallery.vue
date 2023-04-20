<template>
  <div
    class="flex space-x-12 py-4 2xl:py-6 px-8 border-b overflow-x-auto hide-scroll-bar"
  >
    <p
      class="font-inter 2xl:text-2xl text-gray-400 whitespace-nowrap"
      v-for="space in spaces"
      :key="space"
    >
      {{ space }}
    </p>
  </div>

  <div class="flex space-x-4 items-center py-4 2xl:py-6 px-4 md:px-8">
    <h1 class="font-italian text-xl 2xl:text-4xl font-medium">Rooms</h1>
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
</template>

<script>
export default {
  name: "Gallery",

  data() {
    return {
      spaces: [
        "Rooms",
        "Terrace",
        "Bathroom",
        "Kitchen",
        "Parking Area",
        "Outdoor",
      ],
    };
  },
};
</script>
