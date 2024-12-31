import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormView from '../views/FormView.vue'
import FormView2 from '../views/FormView2.vue'
import RouteTestView from '@/views/RouteTestView.vue'
import RouteTestView2 from '@/views/RouteTestView2.vue'
import ProfileView from '@/views/ProfileView.vue'
import BookListView from '@/views/BookListView.vue'
import BookUpdateView from '@/views/BookUpdateView.vue'
import CycleView from '@/views/CycleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/form', name: 'form', component: FormView },
    { path: '/form2', name: 'form2', component: FormView2 },
    { path: '/testroute', name: 'testroute', component: RouteTestView },
    { path: '/testroute/:id', name: 'testroute2', component: RouteTestView2 },
    { path: '/profile', name: 'profile', component: ProfileView },
    {
      path: '/book',
      name: 'book-list-view',
      component: BookListView,
    },
    {
      path: '/book/create',
      name: 'book-create-view',
      component: BookUpdateView,
    },
    {
      path: '/book/update/:id',
      name: 'book-update-view',
      component: BookUpdateView,
    },
    {
      path: '/cycle',
      name: 'cycle',
      component: CycleView,
    },
  ],
})

export default router
