<script setup lang="ts">
import { theme_icn, logo } from '~/assets/icons';
import "../assets/css/index.css"

const currentTheme = ref('')
const colorMode = useColorMode();


const selectColorTheme = (theme: string) => {
    useColorMode().preference = theme
    currentTheme.value = colorMode.preference
}

onMounted(() => {
    currentTheme.value = colorMode.preference
})
</script>

<template>
    <header
        :class="`py-[38px] ${$colorMode.preference === 'dark' ? 'bg-[#181A2A]' : $colorMode.preference === 'light' ? 'bg-[#FFFFFF]' : ''}`">
        <Container>
            <nav class=" flex justify-between items-center">
                <img :src="logo" alt="logo" class=" w-8 h-8">
                <ul>
                    <NuxtLink>Home</NuxtLink>
                </ul>

                <section class=" flex items-center gap-10">
                    <p>search</p>
                    <div @click="selectColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
                        :class="` cursor-pointer relative w-12 h-7 rounded-[100px] bg-[#E8E8EA] dark:bg-[#4B6BFB]`">
                        <img :src="theme_icn" alt="icn"
                            :class="`absolute w-[25px] h-[25px]  ${currentTheme === 'dark' ? 'right-[2.5px] top-[2.5px] absolute' : 'left-[2.5px] top-[2.5px]'}`">
                    </div>

                </section>
            </nav>
        </Container>
    </header>
</template>
