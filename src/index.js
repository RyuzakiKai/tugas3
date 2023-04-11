import { createWebHistory , createRouter } from "vue-router"
import Home from "@/views/home"
import Contact from "@/views/contact"
import About from "@/views/about"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },

];

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;