import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";
import "./index.css";
import "@/css/theme.css";

import TDesign from "tdesign-vue-next";

// 引入组件库全局样式资源
import "tdesign-vue-next/es/style/index.css";
// 引入路由 router
import router from "./router/index";
// 引入Pinia
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(TDesign);
app.use(store);

app.mount("#app");
