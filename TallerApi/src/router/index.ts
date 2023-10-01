import { createRouter, createWebHistory } from 'vue-router'
import Categoria from '../components/Categoria.vue'
import Productos from '../components/Productos.vue'
import DetalleProducto from '../components/DetalleProducto.vue'
import Crud from '../components/Crud.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
       path: '/Categoria/:nombre',
       name: 'Categoria',
      component: Categoria, 
      props: true,
    },

    {
      path: '/',
      name: 'Home',
      component: Productos, 
      props: true,
    },

    {
      path: '/Productos',
      name: 'Productos',
      component: Productos, 
      props: true,
    },

    {
      path: '/DetalleProducto/:id',
      name: 'DetalleProducto',
      component: DetalleProducto, 
      props: true,
    },

    {
      path: '/Crud',
      name: 'Crud',
      component: Crud, 
      props: true,
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
