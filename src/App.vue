<template>
  <NavbarApp />
  <router-view />
  <FooterApp />
  <WhatsappWidget />
</template>

<script>
import NavbarApp from "@/components/NavbarApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import WhatsappWidget from "@/components/WhatsappWidget.vue";

export default {
  components: {
    NavbarApp,
    FooterApp,
    WhatsappWidget,
  },
};
</script>
