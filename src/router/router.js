import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../views/HomeScreen.vue';
import KNajamScreen from '../views/KNajamScreen.vue'
import DNajamScreen from '../views/DNajamScreen.vue';
import OdabraniKNajamScreen from '../views/OdabraniKNajamScreen.vue';
import OdabraniDNajamScreen from '../views/OdabraniDNajamScreen.vue';
import RezervirajPopupForm from '../components/RezervirajPopupForm.vue';

// routes
const routes = [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeScreen, meta: {title: "Rentify"}},
    { path: '/k-najam', name: '/k-najam', component: KNajamScreen, meta: {title: "Rentify - Kratkoročno"} },
    { path: '/d-najam', name: 'd-najam', component: DNajamScreen, meta: {title: "Rentify - Dugoročno"} },
    { path: '/odabrani-k-najam', name: 'odabrani-k-najam', component: OdabraniKNajamScreen, meta: {title: "Rentify - Kratkoročno"} },
    { path: '/odabrani-d-najam', name: 'odabrani-d-najam', component: OdabraniDNajamScreen, meta: {title: "Rentify - Dugoročno"} },
    { path: '/popup-form', name: 'popup-form', component: RezervirajPopupForm },
];

// router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;

