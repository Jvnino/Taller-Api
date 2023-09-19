<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from "vue";
import { RouterLink } from 'vue-router';
    
const categorias = ref()
const productos = ref()
const showMenu = ref(false);
const toggleMenu = () => {
      showMenu.value = !showMenu.value;
    };

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

    <!-- Boton de producto para ver las categorias -->
    <div>
        <button @click="toggleMenu">Menú</button>
        <ul v-if="showMenu">
            <li v-for="(category, index) in categorias" :key="index">
                <router-link :to="{ name: 'Categoria', params: { nombre: category } }">{{ category }}</router-link>
            </li>
        </ul>
    </div>

    <!-- Listado de productos -->
    <div>
    <h1>Productos</h1>
    <div class="product-grid">
      <div v-for="(product, index) in productos" :key="index" class="product-item">
        <img :src="product.image" alt="Imagen del producto" class="product-image">
        <p class="product-title">{{ product.title }}</p>
        <p class="product-price">{{ product.price }} $</p>
        
      </div>
    </div>
  </div>

</template>

<style>

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-weight: bold;
}

.product-price {
  color: #e91e63;
  font-weight: bold;
}

</style>