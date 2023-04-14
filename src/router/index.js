import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Accomodations from "../views/Accomodations.vue";
import Gallery from "../views/Gallery.vue";
import News from "../views/News.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accomodations",
    name: "Accomodations",
    component: Accomodations,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  linkActiveClass: "border-b-2 border-blue-500 md:pb-11",
  history: createWebHistory(),
  routes,
});

export default router;
