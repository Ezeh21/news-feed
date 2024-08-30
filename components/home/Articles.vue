<script setup>

const { data, status, error } = await useLazyFetch("/api/articles")

console.log(data, status.value, error.value);


</script>


<template>
    <Container>
        <main>
            <p>{{ data }}:{{ status }}</p>
            <Card />
        </main>
    </Container>
</template>