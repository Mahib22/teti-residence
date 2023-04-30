<template>
  <div
    class="flex space-x-12 py-4 2xl:py-6 px-8 border-b overflow-x-auto hide-scroll-bar cursor-pointer font-inter 2xl:text-2xl text-gray-400 whitespace-nowrap"
  >
    <p v-scroll-to="'#lastest'">Lastest</p>
    <p v-scroll-to="'#popular'">Popular</p>
    <p v-scroll-to="'#boardinghouse'">Boarding House</p>
    <p v-scroll-to="'#luxuryboarding'">Luxury Boarding</p>
    <p v-scroll-to="'#boardings'">Boardings</p>
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
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-3 pb-8 px-4 md:px-8"
    >
      <div v-for="n in 6" :key="n" class="mb-4">
        <img
          class="h-48 w-full object-cover"
          src="img/news/img1.png"
          alt="card-image"
        />
        <div class="flex items-center space-x-2 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#BBBBBB"
            class="w-4 h-4 2xl:w-6 2xl:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p class="font-inter text-sm 2xl:text-lg text-gray-500">
            10 mins ago
          </p>
        </div>
        <h1 class="font-inter font-semibold lg:text-xl 2xl:text-2xl">
          Big Mango Street Boarding House 2
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",

  data() {
    return {
      categories: [
        {
          id: "lastest",
          title: "Lastest",
        },
        {
          id: "popular",
          title: "Popular",
        },
        {
          id: "boardinghouse",
          title: "Boarding House",
        },
        {
          id: "luxuryboarding",
          title: "Luxury Boarding",
        },
        {
          id: "boardings",
          title: "Boardings",
        },
      ],
    };
  },
};
</script>
