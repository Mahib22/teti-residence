<template>
  <section
    class="px-2 lg:px-5 py-8 2xl:py-20 2xl:px-12 flex sm:flex-nowrap flex-wrap min-h-screen"
  >
    <div class="lg:w-1/2 w-full px-2 lg:px-4 flex">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.887870669022!2d106.82531612477214!3d-6.145759696119618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5e4d9da78a5%3A0x8b869ce99bfbe7cb!2sTeti%20Kost!5e0!3m2!1sid!2sid!4v1683036691245!5m2!1sid!2sid"
        allowfullscreen=""
        class="w-full"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div
      class="lg:w-1/2 flex flex-col ml-2 lg:ml-8 space-y-4 lg:space-y-8 2xl:space-y-16 pt-4 lg:pt-0"
    >
      <div class="space-y-2 2xl:space-y-4">
        <h1 class="font-inter font-semibold text-lg 2xl:text-3xl">
          Phone Number
        </h1>
        <div class="flex items-center space-x-2 2xl:space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#006EB5"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd"
            />
          </svg>
          <p class="font-inter text-sm 2xl:text-2xl">+6281315013050</p>
        </div>
      </div>
      <div class="space-y-2 2xl:space-y-4">
        <h1 class="font-inter font-semibold text-lg 2xl:text-3xl">
          Email Address
        </h1>
        <div class="flex items-center space-x-2 2xl:space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#006EB5"
            class="w-4 h-4 2xl:w-8 2xl:h-8"
          >
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
            />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
            />
          </svg>
          <p class="font-inter text-sm 2xl:text-2xl">tetikost@gmail.com</p>
        </div>
      </div>
      <div class="space-y-2 2xl:space-y-4">
        <h1 class="font-inter font-semibold text-lg 2xl:text-3xl">
          Location Address
        </h1>
        <div class="flex items-start space-x-2 2xl:space-x-4">
          <div class="w-16 h-16 lg:w-8 lg:h-8 2xl:w-14 2xl:h-14 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#006EB5"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p
              class="font-inter text-sm 2xl:text-2xl pr-2 lg:pr-12 2xl:pr-40 leading-6"
            >
              Jl. Mangga Besar XIII No.1, RT.1/RW.3, Mangga Dua Sel., Kecamatan
              Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
              10730
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>
