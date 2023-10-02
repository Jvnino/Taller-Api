import { createRouter, createWebHistory } from 'vue-router'
import Categoria from '../components/Categoria.vue'
import Productos from '../components/Productos.vue'
import DetalleProducto from '../components/DetalleProducto.vue'
import Crud from '../components/Crud.vue'
import InicioSesion from '../components/InicioSesion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Categoria/:nombre',
      name: 'Categoria',
      component: Categoria,
      props: true,
      meta: { login: true }
    },

    {
      path: '/',
      name: 'Home',
      component: Productos,
      props: true,
      meta: { login: true }
    },

    {
      path: '/Productos',
      name: 'Productos',
      component: Productos,
      props: true,
      meta: { login: true }
    },

    {
      path: '/DetalleProducto/:id',
      name: 'DetalleProducto',
      component: DetalleProducto,
      props: true,
      meta: { login: true }
    },

    {
      path: '/Crud',
      name: 'Crud',
      component: Crud,
      props: true,
      meta: { login: true }
    },

    {
      path: '/Login',
      name: 'Login',
      component: InicioSesion,
      props: true,
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.login && !localStorage.getItem("token")) {
    router.push('/Login')
  } else {
    next()
  }
})
export default router
