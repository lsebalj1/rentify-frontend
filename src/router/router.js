import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../views/HomeScreen.vue';
import SmjestajiScreen from '../views/SmjestajiScreen.vue';
import NajamScreen from '../views/NajamScreen.vue';
import OdabraniSmjestajScreen from '../views/OdabraniSmjestajScreen.vue';
import OdabraniNajamScreen from '../views/OdabraniNajamScreen.vue'

// routes
const routes = [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeScreen, meta: {title: "Rentify"}},
    { path: '/smjestaji', name: 'smjestaji', component: SmjestajiScreen, meta: {title: "Rentify - Smjestaji"} },
    { path: '/najam', name: 'najam', component: NajamScreen, meta: {title: "Rentify - Najam"} },
    { path: '/odabrani-smjestaj', name: 'odabrani-smjestaj', component: OdabraniSmjestajScreen, meta: {title: "Rentify - Smjestaji"} },
    { path: '/odabrani-najam', name: 'odabrani-najam', component: OdabraniNajamScreen, meta: {title: "Rentify - Najam"} },
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

