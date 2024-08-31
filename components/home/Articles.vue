<script setup>
import { loadingDark, loadingLight } from '~/assets/icons';
const { data, status } = await useFetch("/api/articles")
const theme = useColorMode()

const errMsg = ref("")
const errStatus = ref("")
const articles = computed(() => {
    if (data.value?.status === 200) {
        return data.value?.data?.articles || [];
    }
})

const handleBadRequest = async () => {
    errStatus.value = "loading"
    const { data, status } = await useFetch('/api/badcall')
    errStatus.value = status.value
    if (data?.status !== 200) {
        errMsg.value = data?.value?.error

        const clear = setTimeout(() => {
            errMsg.value = ""
        }, 3500)
        return () => clearTimeout(clear)
    }
}


</script>


<template>
    <main>
        <div class=" mb-7 flex flex-wrap gap-4 items-center justify-between">
            <p class=" text-lg font-semibold">Latest Post</p>
            <button @click="handleBadRequest" class=" bg-red-600 text-white  p-2 rounded">Make bad call</button>
        </div>
        <p v-if="errStatus === 'loading'">Please wait...</p>
        <p class=" mb-7">{{ errMsg }}</p>
        <div v-if="status === 'pending'" class=" flex justify-center min-h-[60vh]">
            <img v-if="theme.value === 'dark'" :src="loadingDark" alt="">
            <img v-else :src="loadingLight" alt="">
        </div>
        <div v-else-if="status === 'error'">
            <p>Something went wrong while fetching feeds</p>
        </div>
        <div v-else class="card-grid mb-[10rem]">
            <div v-for="article in articles" :key="article?.title">
                <Card :article="article" />
            </div>
        </div>
    </main>
</template>
