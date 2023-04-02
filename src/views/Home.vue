<template>
  <Stats />
  <Description />
  <Benefit />
  <Gallery />
  <Question />
</template>

<script>
import Stats from "@/components/Stats.vue";
import Description from "@/components/Description.vue";
import Benefit from "@/components/Benefit.vue";
import Gallery from "@/components/Gallery.vue";
import Question from "@/components/Question.vue";

export default {
  name: "Home",
  components: {
    Stats,
    Description,
    Benefit,
    Gallery,
    Question,
  },
};
</script>
