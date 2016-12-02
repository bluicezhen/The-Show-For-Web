import Vue from "vue"
import VueRouter from "vue-router";
import ElementUI from "element-ui"
import "element-ui/lib/theme-default/index.css"
import "./index.css"
import App from "./App.vue"

import page_index from "./components/index.vue"
import page_login from "./components/login.vue"
import page_register from "./components/register.vue"

Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {name: "page_index", path: "/", component: page_index},
        {name: "page_login", path: "/login", component: page_login},
        {name: "page_register", path: "/register", component: page_register}
    ]
});

new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
});
