import Vue from "vue";
import vuetify from "./../plugins/vuetify";
import Vuelidate from "vuelidate";

//Vuelidate
Vue.use(Vuelidate);

import AppLayout from "./components/layouts/AppLayout";

//Store
import store from "./store";

//Router
import router from "./router";

import App from "./components/App";

require("./bootstrap");

Vue.component("AppLayout", AppLayout);

new Vue({
    el: "#app",
    vuetify,
    router,
    store,
    components: { App }
});
