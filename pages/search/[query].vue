<script setup>
import { loadingDark, loadingLight } from '~/assets/icons';
const { query } = useRoute().params
const theme = useColorMode()

const { data, status } = useFetch(`/api/search/${query}`)

const articles = computed(() => {
    if (data.value?.status === 200) {
        return data.value?.data?.articles || [];
    }
})
</script>

<template>
    <Container>
        <main class="card-grid mb-[10rem]">
            <div v-if="status === 'pending'" class=" flex justify-center min-h-[50vh]">
                <img v-if="theme.value === 'dark'" :src="loadingDark" alt="">
                <img v-else :src="loadingLight" alt="">
            </div>
            <div v-else-if="articles?.length < 1">
                <p>Could not find any feed on : {{ query }}</p>
            </div>
            <div v-else v-for="article in articles" :key="article?.title">
                <Card :article="article" />
            </div>
        </main>
    </Container>
</template>