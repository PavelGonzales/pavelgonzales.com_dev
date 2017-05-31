import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Resume from '@/components/Resume';
import Blog from '@/components/Blog';
import Portfolio from '@/components/Portfolio';
import Contacts from '@/components/Contacts';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    },
  ],
});
