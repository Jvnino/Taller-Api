<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from "vue";
import { RouterLink } from 'vue-router';

const productos = ref()

onMounted(() => {
  axios.get('https://fakestoreapi.com/products').then(response => {
    productos.value = response.data
    console.log(productos.value);
  })
})

</script>

<template>
  <h1>Productos</h1>
  <div class="product-grid" v-if="productos">
    <div v-for="(product, index) in productos" :key="index" class="product-item">
      <router-link :to="{ name: 'DetalleProducto', params: { id: product.id } }">
        <img :src="product.image" alt="Imagen del producto" class="product-image">
        <p class="product-title">{{ product.title }}</p>
        <p class="product-price">{{ product.price }} $</p>
      </router-link>
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
  color: #f09db8;
  font-weight: bold;
}
</style>