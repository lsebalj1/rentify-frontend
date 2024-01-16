import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js'; // Import the router

const app = createApp(App);

// Mount the app with the router
app.use(router).mount('#app');
