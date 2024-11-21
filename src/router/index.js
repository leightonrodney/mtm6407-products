import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Products',
        component: () => import('../views/Products.vue')
    },
    {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue')       
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;