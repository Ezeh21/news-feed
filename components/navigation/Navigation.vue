<script setup lang="ts">
import "../assets/css/index.css"

const selectColorTheme = (theme: string) => {
    useColorMode().preference = theme
}
</script>

<template>
    <header>
        <nav>
            <p>logo</p>
            <ul>
                <NuxtLink>Home</NuxtLink>
            </ul>

            <div>
                <p>search</p>
                <div>
                    <button @click="selectColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">click me</button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>

</script>
