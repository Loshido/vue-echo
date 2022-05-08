import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import Page from "../components/Articles/Page.vue";
import Article from "../components/Articles/Article.vue";

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
        component: Page,
      },
      {
        path: '/shop/:article',
        name: 'article',
        component: Article
      }
    ]
  })
  
  export default router