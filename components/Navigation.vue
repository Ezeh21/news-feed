<script setup lang="ts">
import { theme_icn, logo, search } from '~/assets/icons';
import "../assets/css/index.css"

const currentTheme = ref('')
const colorMode = useColorMode();

const router = useRouter();
const selectColorTheme = (theme: string) => {
    useColorMode().preference = theme
    currentTheme.value = colorMode.preference
}

onMounted(() => {
    currentTheme.value = colorMode.preference
})
const queryText = ref('')

const searchArticle = () => {
    router.push(`/search/${queryText.value}`)
    queryText.value = ''
}
</script>

<template>
    <header
        :class="` sticky top-0 z-30 py-[38px] ${currentTheme === 'dark' ? 'bg-[#181A2A]' : currentTheme === 'light' ? 'bg-[#FFFFFF]' : ''}`">
        <Container>
            <nav class=" flex flex-wrap gap-[1.5rem] justify-between items-center">
                <NuxtLink to="/">
                    <img :src="logo" alt="logo" class=" w-8 h-8">
                </NuxtLink>
                <!-- <ul>
                    <NuxtLink to="/" class=" text-[16px]">Home</NuxtLink>
                </ul> -->

                <section class=" flex items-center gap-10">
                    <form @submit.prevent="searchArticle()"
                        class=" flex items-center w-[150px] gap-2 bg-[#F4F4F5] dark:bg-[#242535] py-[8px] px-[8px] rounded-[5px]">
                        <input v-model="queryText" type="text" placeholder="Search" class=" px-[10px] w-full">
                        <button>
                            <img :src="search" alt="search" class=" w-7 h-7 cursor-pointer">
                        </button>
                    </form>
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
