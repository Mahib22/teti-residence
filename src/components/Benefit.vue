<template>
  <section class="px-5 py-12 mx-auto overflow-hidden">
    <div class="mx-auto flex flex-wrap">
      <div class="md:w-1/3 w-full md:h-auto">
        <img
          alt="img"
          class="h-3/4 object-cover w-full"
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
                class="px-1 h-36 object-cover"
              />
            </div>
          </Slide>
        </Carousel>
      </div>

      <div class="md:w-2/3 w-full md:pl-12 md:py-6 mt-24 md:mt-0">
        <div class="grid grid-cols-1 divide-y-2">
          <div class="flex flex-wrap items-center mb-6">
            <h1
              class="text-2xl md:text-5xl 2xl:text-7xl font-medium mr-14 font-italian"
            >
              Why Choose Us
            </h1>
            <img
              src="img/icon/right-line.svg"
              class="h-4 hidden lg:block"
              alt="Right Line"
            />
          </div>

          <div
            class="py-2 2xl:py-4 font-inter"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="flex items-center">
              <img
                :src="'img/icon/' + item.icon + '.svg'"
                class="h-6 2xl:h-8"
                alt="icon"
              />
              <h2 class="font-bold py-2 ml-2 2xl:text-4xl">{{ item.title }}</h2>
            </div>
            <p class="text-gray-500 py-2 2xl:text-2xl">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

export default {
  name: "Benefit",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      image_default: "img1.png",
      slides: ["img1.png", "img2.png", "img3.png"],
      items: [
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
    };
  },
  methods: {
    changeImage(urlImage) {
      this.image_default = urlImage;
    },
  },
};
</script>
