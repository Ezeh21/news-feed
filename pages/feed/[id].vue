<script setup>
import { jason, hero_img } from '~/assets/imgs';
import { formatDate } from '~/assets/utils/formatDate';
const route = useRoute();

const article = ref({
    id: route.query.id,
    title: route.query.title,
    urlToImage: route.query.urlToImage,
    author: route.query.author,
    publishedAt: route.query.publishedAt,
    content: route.query.content,
});


</script>

<template>
    <Container>
        <main>
            <section class=" flex flex-col gap-[16px]">
                <p class=" text-[14px] py-[4px] px-[10px] rounded-md bg-[#4B6BFB0D] w-max text-[#4B6BFB]">Technology</p>
                <p class=" text-[18px] md:text-[32px] text-[#181A2A] dark:text-[#FFFFFF] font-semibold">{{
                    article?.title }}</p>
                <section class="flex items-center gap-4 font-medium mt-2">
                    <div class="flex items-center gap-3">
                        <img :src="jason" alt="">
                        <p class=" opacity-70">{{ article?.author ?? "Jason brown" }}</p>
                    </div>
                    <p class="opacity-70">{{ formatDate(article?.publishedAt) ?? "August 20, 2022" }}
                    </p>
                </section>
                <img :src="article?.urlToImage ?? hero_img" alt="img" class="mt-[32px] rounded-[12px]">
            </section>

            <p class="mb-[10rem] mt-[4rem]">{{ article?.content }}</p>
        </main>
    </Container>
</template>