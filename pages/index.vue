<script setup lang="ts">
import "../assets/css/index.css"

const selectColorTheme = (theme: string) => {
    useColorMode().preference = theme
}
</script>

<template>
    <div>
        <button>Toggle Color Mode</button>
        <Card />
    </div>
</template>

<script>

</script>
