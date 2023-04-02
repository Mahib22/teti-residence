<template>
  <section class="container px-5 py-12 mx-auto overflow-hidden">
    <div class="mx-auto flex flex-wrap">
      <img
        alt="ecommerce"
        class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="https://dummyimage.com/400x400"
      />

      <div class="lg:w-2/3 w-full lg:pl-12 lg:py-6 mt-6 lg:mt-0">
        <div class="grid grid-cols-1 divide-y-2">
          <div class="flex flex-wrap items-center mb-8">
            <h1 class="text-4xl font-medium mr-8">Why Choose Us</h1>
            <img src="img/icon/right-line.svg" class="h-4" alt="Right Line" />
          </div>

          <div class="py-2" v-for="(item, index) in items" :key="index">
            <div class="flex items-center">
              <img
                :src="'img/icon/' + item.icon + '.svg'"
                class="h-6"
                alt="icon"
              />
              <h2 class="font-bold py-2 ml-2">{{ item.title }}</h2>
            </div>
            <p class="text-gray-500 py-2">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Benefit",
  data() {
    return {
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
};
</script>
