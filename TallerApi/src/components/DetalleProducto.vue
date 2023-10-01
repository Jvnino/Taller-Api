<script setup lang="ts">

import axios from 'axios';
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from 'vue-router';

const detalle =ref()
const route = useRoute()
const id = route.params.id

onMounted(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then(response=>{
        detalle.value= response.data
        console.log(detalle.value);
    })
})
</script>

<template>
    <div class="product-item" v-if="detalle">
        <img :src="detalle.image" alt="Imagen del producto" class="product-image">
        <p class="product-title">{{ detalle.title }}</p>
        <p class="product-price">{{ detalle.price }} $</p>
        <p class="product-category">{{ detalle.category }} $</p>
        <p class="product-description">{{ detalle.description }} $</p>
    </div>
</template>

<style>

</style>