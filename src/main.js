import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "vue3-carousel/dist/carousel.css";
let VueScrollTo = require("vue-scrollto");

createApp(App).use(router).use(VueScrollTo, { offset: -100 }).mount("#app");
