import { createWebHistory, createRouter } from "vue-router";
// import App from "../App.vue";
import MainPage from '../components/main-page/MainPage.vue'

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: 'MainPage'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
