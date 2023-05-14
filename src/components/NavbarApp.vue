<template>
  <div class="border-b border-gray-200 font-inter">
    <div
      class="py-3 2xl:py-5 flex justify-between flex-wrap flex-col items-center md:flex-row md:px-8"
    >
      <div class="flex items-center py-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <a class="ml-2 text-sm 2xl:text-2xl text-gray-500">+6281315013050</a>
        </div>
        <div class="flex items-center ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <a class="ml-2 text-sm 2xl:text-2xl text-gray-500"
            >tetikost@gmail.com</a
          >
        </div>
      </div>
      <div class="hidden md:flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 2xl:w-8 2xl:h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
        <p class="mx-2">|</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 2xl:w-8 2xl:h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <a class="ml-2 text-sm 2xl:text-2xl text-gray-500">EN / ID</a>
      </div>
    </div>
  </div>

  <nav
    class="px-4 md:px-8 py-4 md:flex md:justify-between md:items-center sticky z-20 top-0 left-0 font-inter 2xl:h-32 bg-white border-b border-gray-200"
  >
    <div class="flex items-center justify-between">
      <router-link active-class :to="{ name: 'Home' }">
        <img
          src="../../public/img/logo.png"
          class="h-12 md:h-20 2xl:h-28"
          alt="Company Logo"
        />
      </router-link>

      <div @click="showMenu = !showMenu" class="flex md:hidden">
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            :class="showMenu ? 'hidden' : 'flex'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            :class="showMenu ? 'flex' : 'hidden'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <ul
      :class="showMenu ? 'flex' : 'hidden'"
      class="flex-col mt-4 p-4 md:p-0 md:flex md:flex-row md:items-center md:space-x-8 2xl:space-x-16 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:border-0 md:bg-white"
    >
      <li
        class="py-2 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 2xl:text-3xl"
      >
        <router-link :to="{ name: 'Home' }">Home</router-link>
      </li>
      <li
        class="py-2 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 2xl:text-3xl"
      >
        <router-link :to="{ name: 'Accomodations' }">Accomodations</router-link>
      </li>
      <li
        class="py-2 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 2xl:text-3xl"
      >
        <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
      </li>
      <li
        class="py-2 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 2xl:text-3xl"
      >
        <router-link :to="{ name: 'News' }">News</router-link>
      </li>
      <li
        class="py-2 pl-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 2xl:text-3xl"
      >
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
      </li>
    </ul>

    <router-link
      active-class
      to="#"
      class="relative btn-hover hidden lg:block text-lime border hover:text-white border-lime focus:ring-4 focus:outline-none focus:ring-lime px-5 py-2.5 text-center mr-3 md:mr-0 2xl:text-3xl"
    >
      Book Now
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavbarApp",
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
