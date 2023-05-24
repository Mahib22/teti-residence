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
    </p>
  </section>

  <iframe
    class="h-60 md:h-128 2xl:h-142 w-full"
    src="https://www.youtube.com/embed/ZynMjLPYSVY"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
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
          Tipe Kamar Deluxe kami menawarkan ruangan yang luas dan nyaman. Ideal
          untuk eksekutif muda atau mahasiswa yang membutuhkan ruang lebih luas
          untuk meningkatkan produktivitas kerja mereka.
        </p>
      </div>
    </div>
  </section>
  <!-- END OF SECTION ABOUT -->

  <!-- SECTION FAQ -->
  <section class="bg-black py-12 2xl:py-16">
    <h1 class="text-white text-5xl 2xl:text-7xl font-light font-italian">
      <marquee-text :repeat="5">
        Pertanyaan yang sering diajukan <span class="px-2">•</span>
      </marquee-text>
    </h1>
  </section>

  <section class="mx-5 py-8 2xl:p-9 px-4 font-inter">
    <details
      v-for="(item, index) in faq"
      :key="index"
      class="transition duration-150 ease-in-out"
    >
      <summary
        class="flex items-center justify-between w-full py-8 2xl:py-20 font-medium text-left text-gray-900 border-b border-gray-200 cursor-pointer 2xl:text-4xl"
      >
        {{ item.question }}
      </summary>
      <p
        class="py-12 2xl:py-24 2xl:pr-60 border-b border-gray-200 text-gray-600 2xl:text-3xl"
      >
        {{ item.answer }}
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
          <Slide v-for="item in reviews" :key="item">
            <div
              class="p-4 2xl:p-16 mx-2 bg-white border border-gray-200 hover:bg-gray-900 text-gray-500 hover:text-gray-100 cursor-pointer 2xl:text-3xl"
            >
              <p class="mb-4">"{{ item.text }}"</p>
              <Rating :rating="5" size="md" class="mb-2 flex justify-center" />
              <p class="text-center">{{ item.user }}</p>
              <p class="text-center">{{ item.role }}</p>
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
      <Slide v-for="item in clients" :key="item">
        <img :src="'img/client/' + item" :alt="item" class="h-20" />
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
          title: "Lokasi Strategis",
          description:
            "Teti Residence terletak di Jalan Mangga Besar 13, Jakarta Pusat. Dekat dengan mal, rumah sakit, minimarket, universitas, dan tempat lainnya. Mudah menuju berbagai tujuan.",
        },
        {
          icon: "money",
          title: "Harga Terjangkau",
          description:
            "Teti Residence menawarkan harga terjangkau untuk menyewa kos. Kami menyediakan opsi sewa harian, mingguan, dan bulanan. Pilihan kamar kos kami mencakup Kamar Deluxe, Kamar Superior, Kamar Standar, dan Kamar Studio.",
        },
        {
          icon: "fridge",
          title: "Fasilitas Komplit",
          description:
            "Kami menyediakan beragam fasilitas lengkap untuk kenyamanan Anda. Fasilitas yang tersedia mencakup dapur, Wifi, TV, area parkir sepeda motor, layanan laundry, dan masih banyak fasilitas lainnya.",
        },
        {
          icon: "shield",
          title: "Tempat yang Nyaman dan Aman",
          description:
            "Lingkungan kos-kosan kami sangat aman dan terjaga, dengan pemantauan CCTV   dan keamanan 24 jam. Tidak perlu khawatir, baik pria maupun wanita, kami menjamin keamanan Anda dan barang bawaan Anda.",
        },
      ],
      faq: [
        {
          question:
            "Fasilitas apa saja yang disediakan oleh di Teti Residence?",
          answer:
            "Nikmati kenyamanan menginap di Teti Residence dengan kamar-kamar yang dilengkapi fasilitas lengkap, termasuk AC, TV, Wi-Fi, kamar mandi dalam, lemari, serta layanan laundry 2 stel/hari (Tidak semua harga kamar termasuk dengan laundry). Selain itu, tersedia fasilitas dapur dengan kulkas, water heater yang menggunakan tenaga matahari, dan parkiran motor yang dapat digunakan bersama-sama. Nikmati kenyamanan dan kemudahan fasilitas yang disediakan oleh Teti Residence!",
        },
        {
          question:
            "Apa saja pilihan transportasi yang tersedia di sekitar Teti Residence?",
          answer:
            "Di Teti Residence, Anda dapat dengan mudah mengakses berbagai pilihan transportasi. Salah satunya adalah transportasi JAKLINDO dengan halte yang hanya berjarak 6 menit berjalan kaki dari lokasi kami. Selain itu, lokasi kami sangat mudah dijangkau melalui layanan transportasi online motor maupun mobil. Tidak hanya itu, Teti Residence juga memiliki keunggulan lokasi dengan jarak hanya 400 meter dari stasiun Mangga Besar. Nikmati kemudahan akses transportasi yang menarik di sekitar Teti Residence!",
        },
        {
          question:
            "Apakah Teti Residence mengizinkan tamu untuk menginap berpasangan atau membawa teman?",
          answer:
            "Teti Residence menyambut kedatangan pasangan, baik pasangan pacar maupun suami istri. Namun, diharapkan untuk memperhatikan bahwa kami tidak mengizinkan teman untuk menginap atau bermalam di kamar Kos. Kami menyediakan opsi kamar harian yang dapat digunakan bagi tamu yang ingin menginap sesuai dengan harga yang telah ditentukan.",
        },
        {
          question: "Apakah akses keluar masuk di kos diberlakukan pembatasan?",
          answer:
            "Teti Residence menerapkan kebijakan akses keluar masuk yang khusus bagi penghuni kost dan kamar harian, yang dapat diakses 24 jam sehari. Namun, untuk tamu yang berkunjung, kami membatasi akses hingga pukul 24:00 dan meminta izin kepada pengelola atau resepsionis.",
        },
        {
          question:
            "Apakah ada fasilitas keamanan yang tersedia di Teti Residence?",
          answer:
            "Teti Residence menjaga keamanan dengan adanya pelayanan Reception yang siap membantu 24 jam. Kami telah menyediakan 3 sudut CCTV di area parkir, 2 sudut di lantai 1, 3 sudut di lantai 2, 3 sudut di lantai 3, 3 sudut di lantai 4, dan 1 sudut di lantai 5. Totalnya, tersedia 16 sudut CCTV, termasuk 1 di kantor. Untuk akses masuk ke dalam Teti Residence, kami menggunakan sistem fingerprint, kartu akses, atau gantungan kunci guna menghindari duplikasi kunci dan meningkatkan keamanan hunian.",
        },
      ],
      reviews: [
        {
          text: "Tempatnya bersih, dekat kemana-mana dan murah lagi.",
          user: "Amanda",
          role: "Karyawan Swasta",
        },
        {
          text: "Ga berisik, tenang dan gampang order makanan dari kamar.",
          user: "Nindi",
          role: "UI/UX Designer",
        },
        {
          text: "Udah 3 tahun disini. Nyaman, bersih, lengkap dan murah.",
          user: "Eric",
          role: "Pegawai Mall",
        },
      ],
      clients: [
        "traveloka.png",
        "olx.png",
        "mamikos.png",
        "papikos.png",
        "facebook.jpg",
        "instagram.jpg",
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
