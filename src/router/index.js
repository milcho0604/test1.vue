import { createRouter, createWebHistory } from 'vue-router'
import BookListView from '../views/BookListView.vue'
import BookEditView from '../views/BookEditView.vue'

const routes = [
  {
    path: '/book',
    name: 'BookListView',
    component: BookListView
  },
  {
    path: '/book/edit/:id',
    name: 'BookEditView',
    component: BookEditView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
