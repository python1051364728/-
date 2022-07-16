import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import store from "./store";
import "vant/lib/index.less";
import "amfe-flexible"; // 动态设置 REM 基准值
import '@/styles/iconfont/iconfont.css'
import { Lazyload } from "vant"; // 图片懒加载

Vue.use(Vant);

Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
