<template>
  <NavbarApp />
  <router-view />
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";

export default {
  components: {
    NavbarApp,
  },
};
</script>
