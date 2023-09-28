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
    meta: {
      title: "Home",
    },
  },
  {
    path: "/accomodations",
    name: "Accomodations",
    component: Accomodations,
    meta: {
      title: "Accomodations",
    },
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
    meta: {
      title: "Gallery",
    },
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
    meta: {
      title: "Articles",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
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
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  document.title = to.meta?.title ?? "Teti Residence";
  document.getElementsByTagName("meta")["description"].content =
    to.meta?.desc ?? "The Teti Residence";
});

export default router;
