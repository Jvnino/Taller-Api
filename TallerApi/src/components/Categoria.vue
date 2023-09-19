<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from "vue";

const catJewelery= ref()

onMounted(()=>{
    axios.get('https://fakestoreapi.com/products/category/jewelery').then(response=>{
        catJewelery.value= response.data
        console.log(catJewelery.value);
    })
})
</script>

<template>

    <h1>{{ catJewelery.value }} </h1>
</template>

<style>

</style>