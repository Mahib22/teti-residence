<template>
  <Navigation>
    <template #next>
      <img
        src="img/icon/arrow-right-circle.svg"
        class="md:max-w-md"
        alt="Arrow Right Circle"
      />
    </template>
    <template #prev>
      <img
        src="img/icon/arrow-left-circle.svg"
        class="md:max-w-md"
        alt="Arrow Left Circle"
      />
    </template>
  </Navigation>
</template>

<script>
import { Navigation } from "vue3-carousel";

export default {
  name: "NavigationSider",
  components: {
    Navigation,
  },
};
</script>
