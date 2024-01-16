import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '../views/HomeScreen.vue';
import SmjestajiScreen from '../views/SmjestajiScreen.vue';
import NajamScreen from '../views/NajamScreen.vue';

// routes
const routes = [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeScreen },
    { path: '/smjestaji', name: 'smjestaji', component: SmjestajiScreen },
    { path: '/najam', name: 'najam', component: NajamScreen },
];

// router
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

//nadi kako router injecta viewove u taj div
