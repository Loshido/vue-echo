import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Page from "../components/Articles/Page.vue";
import Article from "../components/Articles/Article.vue";
import Life from "../components/Life/Life.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      	path: "/",
      	name: "home",
      	component: Home,
    },
    {
      	path: "/shop",
      	name: "shop",
      	component: Page,
    },
    {
      	path: "/concept",
      	name: "concept",
      	component: () => import("../views/concept.vue"),
    },
    {
      	path: "/shop/:article",
      	name: "article",
      	component: Article,
      	props: true,
    },
    {
      	path: "/life/:time",
      	props: true,
      	name: "life",
      	component: Life,
    },
    {
      	path: "/tools",
      	name: "tools",
      	component: () => import("../views/tools.vue"),
      	// component: () => import("../components/tools/tools-handler.vue"),
    },
	{
		path: "/tools/:tool",
		name: "specific-tool",
		
	}
  ],
});
export default router;
