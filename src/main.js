import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'; 
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
//import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);

const app = createApp(App);

// Mount the app with the router
app.use(router).mount('#app');
