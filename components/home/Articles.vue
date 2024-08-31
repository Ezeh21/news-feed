<script setup>
const { data, status } = await useFetch("/api/articles")

const articles = computed(() => {
    if (data.value?.status === 200) {
        return data.value?.data?.articles || [];
    }

})

</script>


<template>
    <main class="card-grid mb-[10rem]">
        <div v-for="article in articles.slice(0, 12)" :key="article?.title">
            <Card :article="article" />
        </div>
    </main>
</template>