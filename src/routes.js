import About from './pages/About.vue';
import Home from './pages/Home.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    }
  ]
});
