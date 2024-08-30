<script setup>
import styles from "./Container.module.css"
</script>

<template>
    <main :class="`${styles.main}`">
        <slot />
    </main>
</template>