import { createWebHistory, createRouter } from "vue-router";
import Products from '../views/Products.vue'

const routes = [
    {
        path: '/',
        name: 'products',
        component: Products
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;