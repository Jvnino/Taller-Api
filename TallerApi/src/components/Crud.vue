<script setup lang="ts">
import axios from 'axios';
import {ref} from 'vue'
import { onMounted} from "vue";

const activarForm = ref(false)
const estados = ref()
const datosForm = ref({title:"", price: "", description: "", category: "", image: ""})

const productos = ref()
const option = ref()
const loading = ref(true)

onMounted(()=>{
    axios.get('https://fakestoreapi.com/products').then(response=>{
        productos.value= response.data
        console.log(productos.value);
        loading.value= false
    })
})

async function Agregar() {
    if (activarForm.value) {
        activarForm.value = false
    }else{
        activarForm.value = true
        estados.value = 'Añadir'
    }
}
async function Eliminar(){
    if (activarForm.value) {
        activarForm.value = false
    }else{
        activarForm.value = true
        estados.value = 'Eliminar'
    }
}

async function Actualizar(){
    if (activarForm.value) {
        activarForm.value = false
    }else{
        activarForm.value = true
        estados.value = 'Actualizar'
    }
}

async function Enviar(e: Event) {
    const URL = 'https://fakestoreapi.com/products'
    switch (estados.value) {
        case "Añadir":
            axios.post(URL, datosForm)
            break;
        case "Eliminar":
            axios.delete(`${URL}/${id}`)
            break;
        case "Actualizar":
            axios.put(`${URL}/${id}`, datosForm)
            break;
        default:
            break;
    }
    
    
    e.preventDefault()
    alert("Se ha enviado la petición al servidor")
}


</script>

<template>

    <div v-if="!loading">
        
        

        <form action="" v-if="activarForm" @submit="Enviar">
            <select name="" id="" v-if="activarForm && productos" v-model="datosForm">
                <option v-for="(products, index) in productos" :key="index" :value="products.value"> {{ products.title }} </option>
            </select>
            
            <label for=""> Titulo</label>
            <input type="text" v-model="datosForm.title">
            <label for=""> Precio</label>
            <input type="number" v-model="datosForm.price" option.value= 'Precio'>
            <label for=""> Descripción</label>
            <input type="text" v-model="datosForm.description" option.value= 'Descripcion'>
            <label for="">Categoria</label>
            <input type="text" v-model="datosForm.category" option.value= 'Categoria'>
            <label for="">Imagen</label>
            <input type="text" v-model="datosForm.image" option.value= 'Imagen'>
            <button>{{ estados }}</button>
        </form>

        <button @click="Agregar">Agregrar producto</button>
        <button @click="Eliminar">Eliminar producto</button>
        <button @click="Actualizar">Actualizar producto</button>
    </div>

</template>

<style scoped>
/* Estilos para el formulario */
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #252525;
  border-radius: 10px;
}

form label {
  margin-top: 10px;
  font-weight: bold;
}

form input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

form select {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}
</style>