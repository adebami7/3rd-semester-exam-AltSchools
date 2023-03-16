import { createRouter, createWebHistory } from 'vue-router';
import Repos from '../components/Repos.vue';
import Repo from '../components/Repo.vue';
import NotFound from '../components/404.vue';

const routes = [
  { path: '/', redirect: '/repos' },
  { path: '/repos', component: Repos },
  { path: '/repo/:name', component: Repo },
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;