import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AddBlog from "@/components/vuex/AddBlog";
import EditBlog from "@/components/vuex/EditBlog";
import ViewBlog from "@/components/vuex/ViewBlog";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/bloglist/add',
        name: 'AddBlog',
        component: AddBlog,
        props: true
    },
    {
        path: '/bloglist/edit/:blogId',
        name: 'EditBlog',
        component: EditBlog,
        props: true
    },
    {
        path: '/bloglist/view/:blogId',
        name: 'ViewBlog',
        component: ViewBlog,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
