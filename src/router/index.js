
import {createRouter,createWebHashHistory} from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import Register from '../pages/Register.vue'
import User from '../pages/User.vue'
import { comment } from 'postcss';

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes:[
            {
                path:"/Register",
                component:Register
            },

            {
                path:"/",
                component:LoginPage
            },

            {
                path:"/User",
                component:User
            }

        ]

    }
);
export default router
