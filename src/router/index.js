import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import Page from "../components/Articles/Page.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/shop',
        name: 'shop',
        component: Page
      }
    ]
  })
  
  export default router