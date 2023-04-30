<template>
  <footer class="bg-gray-200 font-inter">
    <div
      class="w-full p-4 2xl:px-8 py-8"
      :class="showBtn ? 'pb-28 md:pb-8' : ''"
    >
      <div
        class="flex flex-col md:flex-row md:justify-between items-center 2xl:text-3xl"
      >
        <div class="flex mt-4 space-x-6 2xl:space-x-12 justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-gray-900"
            >Accomodations</a
          >
          <a href="#" class="text-gray-500 hover:text-gray-900">Privacy</a>
          <a href="#" class="text-gray-500 hover:text-gray-900">Policy</a>
        </div>

        <div class="py-2 order-first md:order-none">
          <img
            src="img/logo.png"
            class="h-20 2xl:h-28 mx-auto"
            alt="Company Logo"
          />
        </div>

        <div class="flex mt-4 space-x-6 2xl:space-x-12 justify-center sm:mt-0">
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 2xl:w-10 2xl:h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <svg
              class="w-5 h-5 2xl:w-10 2xl:h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-900">
            <svg
              class="w-5 h-5 2xl:w-10 2xl:h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      <hr class="my-6 border border-gray-300 sm:mx-auto lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
        <p class="text-sm 2xl:text-3xl text-gray-500 mb-4 md:mb-0 text-center">
          © 2023 The Teti Residence | All Rights Reserved.
        </p>
        <p class="text-sm 2xl:text-3xl text-gray-500">
          Link luar : <a href="#" class="underline">Mamikos</a> |
          <a href="#" class="underline">OLX</a> |
          <a href="#" class="underline">Traveloka</a> |
          <a href="#" class="underline">Papikost</a> |
          <a href="#" class="underline">TripAdvisor</a>
        </p>
      </div>
    </div>
  </footer>

  <!-- BOTTOM NAV MOBILE -->
  <div
    class="fixed z-10 w-full md:hidden"
    :class="showBtn ? 'bottom-12 h-20' : 'bottom-0'"
  >
    <div class="flex justify-end mr-4">
      <div class="bg-gray-300 opacity-90 rounded-t-xl w-14 h-12 flex">
        <button class="flex mx-auto items-center" @click="showBtn = !showBtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="white"
            class="w-6 h-6"
            :class="showBtn ? 'flex' : 'hidden'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3.5"
            stroke="white"
            class="w-6 h-6"
            :class="showBtn ? 'hidden' : 'flex'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="w-full h-full p-3 bg-white"
      :class="showBtn ? 'flex' : 'hidden'"
    >
      <router-link
        active-class
        to="#"
        class="bg-lime text-white w-full h-full flex items-center justify-center font-inter"
        >Book Now</router-link
      >
    </div>
  </div>
  <!-- END OF BOTTOM NAV MOBILE -->
</template>

<script>
export default {
  name: "FooterApp",
  data() {
    return {
      showBtn: true,
    };
  },
};
</script>
