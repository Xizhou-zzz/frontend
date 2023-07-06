import { createRouter, createWebHashHistory } from "vue-router";
import Register from "./pages/Register.vue"
import Login from "./pages/Login.vue"
import Main from "./pages/Main.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/Register",
            component: Register
        },
        {
            path: "/",
            component: Login
        },
        {
            path: "/Main",
            component: Main

        }

    ]
});

export default router;
