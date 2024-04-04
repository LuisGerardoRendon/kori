<template>
    <div
        class="pt-10 pb-10 bg-bgPrimary md:bg-bgPrimary overflow-scroll md:overflow-hidden md:flex  md:justify-center   h-[100vh] md:h-[100vh] md:pt-0 md:pb-0 md:items-center md:w-full">

        <div class="flex flex-col px-10 md:flex-row md:w-full">
            <div class="md:w-1/2">
                <h1 class="w-full text-center text-4xl font-serif md:text-2xl md:text-center ">
                    Kori
                </h1>

                
            </div>



            <div class="md:w-1/2 md:px-10">
                <div class="flex">
                    <p @click="register" class="text-start w-1/2"
                        :class="isRegister ? 'text-white font-bold underline' : 'text-white'">Regístrate</p>
                    <p @click="login" class="text-end w-1/2"
                        :class="isLogin ? 'text-white font-bold underline' : 'text-white'">Iniciar Sesión</p>
                </div>

                <MainLogin v-if="isLogin"></MainLogin>
                <MainRegister v-if="isRegister" @user-registered="userRegistered"></MainRegister>

            </div>


        </div>





    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue'
import MainLogin from '@/views/login/MainLogin.vue'
import MainRegister from '@/views/register/MainRegister.vue'




//pt-10 pb-10 bg-bgPrimary md:bg-bgPrimary md:flex md:justify-center   h-[100vh] md:h-[100vh] md:pt-0 md:pb-0 md:items-center md:w-full

const isLogin = ref(true);
const isRegister = ref(false);



const login = () => {
    isLogin.value = true;
    isRegister.value = false;
}
const register = () => {
    isLogin.value = false;
    isRegister.value = true;
}

const userRegistered = (isRegistered) => {
    if (isRegistered) {
        login();   
    }
}





onMounted(() => {
});

</script>