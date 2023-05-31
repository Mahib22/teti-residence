import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Accomodations from "../views/Accomodations.vue";
import Gallery from "../views/Gallery.vue";
import Articles from "../views/Articles.vue";
import Contact from "../views/Contact.vue";
import RoomDetail from "../views/RoomDetail.vue";
import ArticleDetail from "../views/ArticleDetail.vue";

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
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/room/:id",
    name: "RoomDetail",
    component: RoomDetail,
    props: true,
  },
  {
    path: "/article/:id",
    name: "ArticleDetail",
    component: ArticleDetail,
    props: true,
  },
];

const router = createRouter({
  linkActiveClass: "border-b-2 border-blue-500 md:pb-11",
  history: createWebHistory(),
  routes,
});

export default router;
