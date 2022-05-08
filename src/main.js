import { createApp } from "vue";
import VueWriter from "vue-writer";
import App from "./App.vue";
import router from "./router/index.js"
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(VueWriter)
app.use(router)
app.use(createPinia())
app.mount("#app");
