<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from 'vue-router';

const categorias = ref()
const productos = ref()
const showMenu = ref(false);
const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };
const route = useRoute()

onMounted(()=>{
    axios.get('https://fakestoreapi.com/products/categories').then(response=>{
        categorias.value= response.data
        console.log(categorias.value);
    })

    axios.get('https://fakestoreapi.com/products').then(response=>{
        productos.value= response.data
        console.log(productos.value);
    })
})
    
</script>

<template>
    
    <div class="container">
        <section class="encabezado">
            <div>
              <router-link to="/">Home</router-link>
            </div>

            <div>
                <router-link to="/Crud"> CRUD</router-link>
            </div>
            <div>
                <header>FakeStoreAPI</header>
            </div>
        </section>

        <!-- Boton de producto para ver las categorias -->
        
            <section class="contenido">
                <div>
                    <button @click="toggleMenu">Menú</button>
                    <ul v-if="showMenu">
                        <li v-for="(category, index) in categorias" :key="index">
                            <router-link :to="{ name: 'Categoria', params: { nombre: category } }">{{ category }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="content">
                    <router-view :key="route.path"> </router-view>
                </div>
            </section>       
    </div>

</template>

<style scoped>

.encabezado {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #300517; 
  padding: 10px 20px;
  color: white;
}

.encabezado a {
  text-decoration: none;
  color: white;
  margin-right: 20px;
  font-weight: bold;
}

.encabezado header {
  font-size: 24px;
}

.encabezado a.router-link-exact-active {
  text-decoration: underline;
}


.contenido .content {
  flex: 1; 
  padding: 20px; 
  border: 1px solid #ccc;
}

.contenido div ul li {
  list-style-type: none;
  margin-right: 20px; 
  display: inline; 
}
.contenido div ul li router-link {
  text-decoration: none;
  color: white; 
  font-weight: bold; 
  transition: color 0.3s ease;
}

.contenido div ul li router-link:hover {
  color: #007bff;
}
</style>