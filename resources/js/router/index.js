import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./../components/pages/Home";
import Version1Dashboard from "./../components/dashboard/v1/Version1Dashboard";
import Version2Dashboard from "./../components/dashboard/v2/Version2Dashboard";

//Version 1 dashboard pages ///
import Projects from "./../components/dashboard/v1/views/Projects";
import Teams from "./../components/dashboard/v1/views/Teams";
import Companies from "./../components/dashboard/v1/views/Companies/Companies";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home, name: "home" },

    // v1 dashboard views
    {
        path: "/v1/dashboard/home",
        component: Version1Dashboard,
        name: "v1dashboard",
        meta: {
            layout: "V1DashboardLayout"
        }
    },
    {
        path: "/v1/dashboard/projects",
        component: Projects,
        name: "Projects",
        meta: {
            layout: "V1DashboardLayout"
        }
    },
    {
        path: "/v1/dashboard/teams",
        component: Teams,
        name: "Teams",
        meta: {
            layout: "V1DashboardLayout"
        }
    },
    {
        path: "/v1/dashboard/companies",
        component: Companies,
        name: "Companies",
        meta: {
            layout: "V1DashboardLayout"
        }
    },

    //v2 dashboard views
    {
        path: "/v2/dashboard",
        component: Version2Dashboard,
        name: "v2dashboard",
        meta: {
            layout: "V2DashboardLayout"
        }
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
