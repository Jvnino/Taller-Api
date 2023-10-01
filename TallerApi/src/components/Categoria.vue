<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

const catJewelery= ref()
const route = useRoute()
const nombreCategoria = route.params.nombre

onMounted(()=>{
    axios.get(`https://fakestoreapi.com/products/category/${nombreCategoria}`).then(response=>{
        catJewelery.value= response.data
        console.log(catJewelery.value);
    })
})
</script>

<template>
     <div v-for="(product, index) in catJewelery" :key="index" class="product-item">
        <router-link :to="{name: 'DetalleProducto', params: { id: product.id }}">
            <img :src="product.image" alt="Imagen del producto" class="product-image">
            <p class="product-title">{{ product.title }}</p>
            <p class="product-price">{{ product.price }} $</p>
        </router-link>
    </div>
</template>

<style>
/* Estilos para los productos */
/* Estilos para los productos */
.product-item {
  margin: 20px;
  padding: 20px;
  border-radius: 10px; /* Bordes redondeados para los productos */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75); /* Sombra para los productos */
  text-align: center; /* Centrar el contenido del producto */
}

.product-link {
  text-decoration: none;
  color: white;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: white;
}

.product-price {
  font-size: 16px;
  color: white;
}

/* Estilos para el enlace activo */
.product-link.router-link-exact-active {
  text-decoration: underline;
}

</style>