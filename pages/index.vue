<script setup lang="ts">
import "../assets/css/index.css"

</script>


<template>
    <Container>
        <NuxtLoadingIndicator :throttle="0" :height="10"/>
        <Home />
    </Container>
</template>
