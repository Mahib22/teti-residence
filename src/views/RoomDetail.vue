<template>
  <section class="container px-5 py-12 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full rounded-lg mt-6">
      <img
        class="object-cover object-center w-full h-full"
        src="img/room/img1.png"
        alt="thumbnail"
        loading="lazy"
      />
    </div>

    <div class="flex flex-wrap lg:w-1/2">
      <h1 class="font-inter font-bold text-xl mb-2 text-gray-900">Studio 3</h1>
      <p>Lantai 4</p>
      <p>Lebar 3,5 M Panjang 5 M</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "RoomDetail",
};
</script>
