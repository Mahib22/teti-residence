<script setup>
import {
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
} from "flowbite-vue";
</script>

<template>
  <div class="bg-gray-900 py-8 text-center">
    <h1 class="text-white text-5xl font-light">Frequently Asked Questions</h1>
  </div>

  <div class="container mx-auto py-8 px-4">
    <Accordion flush>
      <accordion-panel v-for="n in 4" :key="n">
        <accordion-header
          >Are the facilities provided in accordance with the price listed
          ?</accordion-header
        >
        <accordion-content>
          <p class="mb-2 text-gray-500">
            We provide many facilities for you. There are facilities such as a
            AC, Wifi, Lemari, TV Cable, Spring Bed, Water Heater, Kamar Mandi
            Dalam, Dapur Bersama, Kulkas Bersama, Area Parkir Motor, Security 1
            x 24 Jam, Laundry 2 Stell / Hari, dan lain - lain
          </p>
        </accordion-content>
      </accordion-panel>
    </Accordion>
  </div>
</template>

<script>
export default {
  name: "Question",
};
</script>
