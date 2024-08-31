<script setup>
import { useToggle } from '~/assets/composables/useToggle';


const { isToggled, toggle, handleLogin, isAuth } = useToggle()
</script>

<template>
    <main class=" min-h-[100vh]">
        <Navigation />
        <slot />
        <Footer />
        <ModalComponent :open="isToggled" :close="toggle">
            <button type="submit" :class="` text-center bg-[#4B6BFB] text-white p-8 rounded-md text-xl`"
                @click="handleLogin">{{ isAuth
                    ? "Sign out" : "Sign in" }}</button>
        </ModalComponent>
    </main>
</template>