import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import paralax from "../components/paralax.vue";
import Login from "../components/login/Login.vue";
import Logout from "../components/login/Logout.vue";
import Signup from "../components/login/Signup.vue";
import Forum from "../components/forum/Forum.vue";
import Read from "../components/forum/Read.vue";
import Create from "../components/forum/Create.vue";
import CreateCategory from "../components/category/CreateCategory.vue";
const routes = [
    { path: "/", component: paralax },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/forum", component: Forum, name: "forum" },
    { path: "/logout", component: Logout },
    { path: "/question/:slug", component: Read, name: "read" },
    { path: "/ask", component: Create },
    { path: "/category", component: CreateCategory }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
