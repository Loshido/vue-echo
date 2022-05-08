import { createApp } from "vue";
import VueWriter from "vue-writer";
import App from "./App.vue";
import router from "./router/index.js"

createApp(App)
    .use(VueWriter)
    .use(router)
    .mount("#app");
