import Vue from "vue"
import VueRouter from "vue-router";
import ElementUI from "element-ui"
import "element-ui/lib/theme-default/index.css"
import App from "./App.vue"

import page_index from "./components/index.vue"
import page_login from "./components/login.vue"

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: "/", component: page_index},
        {path: "/login", component: page_login}
    ]
});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
