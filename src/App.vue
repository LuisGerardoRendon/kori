<template>
  <main>
    <div class="flex flex-col bg-white md:flex  md:flex-row">
      <div v-if="isLogged" class="w-full md:w-fit bg-bgPrimary">
        <SideBar @cerrarSesion="cerrarSesion"></SideBar>
      </div>
      <div class="md:w-full md:h-[90vh] h-[90vh] bg-white" :class="{ 'bg-white': isLogged }">
        <RouterView></RouterView>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/nav/SideBar.vue';
import { onMounted } from 'vue';
import { ref, watch } from 'vue';
import {useMyStore} from '@/stores/store.js';
import { useRouter } from 'vue-router';

const store = useMyStore();
const isLogged = ref(false);
const router = useRouter();

watch(
    () => store.loggedIn,
    () => {
        isLogged.value = store.loggedIn;
    }
)

const cerrarSesion = () => {
    localStorage.removeItem('token');
    store.logoutStore();
    isLogged.value = false;
    router.push({ name: 'identificate' })
}


onMounted(() => {
  if (localStorage.getItem('token')) {
    isLogged.value = true;
  }
})

</script>

