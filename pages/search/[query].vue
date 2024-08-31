<script setup>
const { query } = useRoute().params

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
            <div v-if="status === 'pending'">
                <h1>Loading....</h1>
            </div>
            <div v-else v-for="article in articles" :key="article?.title">
                <Card :article="article" />
            </div>
        </main>
    </Container>
</template>