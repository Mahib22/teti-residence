<template>
  <Hero />
  <Stats />
  <Description />
  <Benefit />
  <Gallery />
  <Question />
  <Client />
</template>

<script>
import Hero from "@/components/Hero.vue";
import Stats from "@/components/Stats.vue";
import Description from "@/components/Description.vue";
import Benefit from "@/components/Benefit.vue";
import Gallery from "@/components/Gallery.vue";
import Question from "@/components/Question.vue";
import Client from "@/components/Client.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Stats,
    Description,
    Benefit,
    Gallery,
    Question,
    Client,
  },
};
</script>
