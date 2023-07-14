import { createRouter, createWebHashHistory } from "vue-router";
import Register from "./pages/Register.vue"
import Login from "./pages/Login.vue"
import Main from "./pages/Main.vue"
import Predict from "./pages/Predict.vue"
import Price from "./pages/Price.vue"
import Visualone from "./pages/Visualone.vue"
import A from './pages/A.vue'
import Mainforadmin from "./pages/Mainforadmin.vue"
import Manageuser from "./pages/Manageuser.vue"
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/A',
            component: A
        },
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

        },
        {
            path: "/Predict",
            component: Predict
        },
        {
            path: "/Price",
            component: Price
        },
        {
            path: "/Visualone",
            component: Visualone
        },
        {
            path: "/Mainforadmin",
            component: Mainforadmin
        },
        {
            path: "/Manageuser",
            component: Manageuser
        }

    ]
});

export default router;
