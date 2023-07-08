import { createRouter, createWebHashHistory } from "vue-router";
import Register from "./pages/Register.vue"
import Login from "./pages/Login.vue"
import Main from "./pages/Main.vue"
import Visualize from "./pages/Visualize.vue"
import Predict from "./pages/Predict.vue"
import Price from "./pages/Price.vue"
import Import from "./pages/Import.vue"
import Visualone from "./pages/Visualone.vue"
import Visualtwo from "./pages/Visualtwo.vue"

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

        },
        {
            path: "/Visualize",
            component: Visualize
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
            path: "/Import",
            component: Import
        },
        {
            path: "/Visualone",
            component: Visualone
        },
        {
            path: "/Visualtwo",
            component: Visualtwo
        }



    ]
});

export default router;
