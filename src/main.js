import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import "vue3-carousel/dist/carousel.css";

createApp(App).use(router).mount("#app");
