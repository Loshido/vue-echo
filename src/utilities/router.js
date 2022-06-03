import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Page from "../components/Articles/Page.vue";
import Article from "../components/Articles/Article.vue";
import Life from "../components/Life/Life.vue";
import auth from "../components/auth/auth.vue";

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
      	path: "/memo",
      	name: "memo",
      	component: () => import("../components/Life/Memo.vue"),
    },
    {
      	path: "/tools",
      	name: "tools",
      	component: () => import("../components/tools/tools-handler.vue"),
    },
	{
		path: "/tools/download-estimator",
		name: "download",
		component: () => import("../components/tools/download.vue")
	},
	{
		path: "/tools/text-information",
		name: "text-information",
		component: () => import("../components/tools/text.vue")
	},
	{
		path: "/tools/color",
		name: "color",
		component: () => import("../components/tools/color.vue")
	},
    {
      	path: "/auth",
      	name: "auth",
      	component: auth,
      	redirect: (to) => {
      	  	return { path: "/auth/login" };
      	},
      	children: [
      	  	{
      	  	  	path: "login",
				name: "login",
      	  	  	component: () => import("../components/auth/login.vue"),
      	  	},
      	  	{
      	  	  	path: "register",
				name: "register",
      	  	  	component: () => import("../components/auth/register.vue"),
      	  	},
      	  	{
      	  	  	path: "logged",
				name: "logged",
      	  	  	component: () => import("../components/auth/logged.vue"),
      	  	},
      	],
    },
  ],
});
export default router;
