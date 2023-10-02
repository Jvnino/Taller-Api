<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const username = ref()
const password = ref()
const router = useRouter();

function login(username: string, password: string) {
    return axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
    })
}


async function handleLogin() {
    try {
        // Llama a la función de inicio de sesión y maneja el token devuelto
        const response = await login(username.value, password.value)
        const token = response.data.token
        // El inicio de sesión fue exitoso, haz algo con el token si es necesario
        console.log('Inicio de sesión exitoso. Token:', token);
        // Redirige al usuario a otra página, por ejemplo, el panel de control
        // this.$router.push('/dashboard');
        localStorage.setItem('token', token)


        console.log(router)
        router.push('/');
    }

    catch (error) {
        // Maneja errores de inicio de sesión si es necesario
        console.error('Error de inicio de sesión:', error);
        alert("Ingreso de datos incorrectos, intentelo nuevamente")
        // Muestra un mensaje de error al usuario o toma otras medidas
    };
}
</script>


<template>
    <div>
        <!-- Campos de entrada para el nombre de usuario y la contraseña -->
        <input v-model="username" placeholder="Nombre de usuario" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <!-- Botón de inicio de sesión que llama a handleLogin cuando se hace clic -->
        <button @click="handleLogin">Iniciar Sesión</button>
    </div>
</template>
  
<style scoped>
/* Estilos para el contenedor del componente de inicio de sesión */
div {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* Estilos para los campos de entrada */
input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
  