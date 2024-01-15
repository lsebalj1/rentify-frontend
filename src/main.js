import { createApp } from 'vue';
//import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// komponente
import HomeScreen from './views/HomeScreen.vue';
import SmjestajiScreen from './views/SmjestajiScreen.vue';
import NajamScreen from './views/NajamScreen.vue';
//import OstaloScreen from './views/OstaloScreen.vue';

// Vue app
const app = createApp(HomeScreen);

//rute
const routes = [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: HomeScreen },
    { path: '/smjestaji', name: 'smjestaji', component: SmjestajiScreen },
    { path: '/najam', name: 'najam', component: NajamScreen },
    //{ path: '/ostalo', name: 'ostalo', component: OstaloScreen },
];
  
// Kreiraj router
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
// Mount the app with the router
app.use(router).mount('#app');