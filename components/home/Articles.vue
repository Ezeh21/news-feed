<script setup>
const { data, status } = await useFetch("/api/articles")

const articles = computed(() => {
    if (data.value?.status === 200) {
        return data.value?.data?.articles || [];
    }
})

</script>


<template>
    <main>
        <p class=" mb-7 text-lg font-semibold">Latest Post</p>
        <div v-if="status === 'pending'">
            <p>Loading...</p>
        </div>
        <div v-else-if="status === 'error'">
            <p>Something went wrong while fetching feeds</p>
        </div>
        <div class="card-grid mb-[10rem]">
            <div v-for="article in articles" :key="article?.title">
                <Card :article="article" />
            </div>
        </div>
    </main>
</template>