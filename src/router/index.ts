import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import('../views/Admin/Dashboard.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: 'Error',
        component: () => import('../views/Error.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router