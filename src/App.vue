<template>
  <NavbarApp />
  <router-view />
  <FooterApp />
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>
