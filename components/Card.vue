<script setup lang="ts">
import { jason, hero_img } from '~/assets/imgs';
import { formatDate } from '~/assets/utils/formatDate';
import truncateText from '~/assets/utils/truncate';
const { article } = defineProps(['article'])
const router = useRouter()


const navigateToDetails = () => {
    router.push({
        path: `/feed/${article.title.toLowerCase().replace(/\s+/g, '-')}`,
        query: {
            title: article?.title,
            urlToImage: article?.urlToImage,
            author: article?.author,
            publishedAt: article?.publishedAt,
            content: article?.description
        }
    });
};
</script>

<template>
    <NuxtLink :to="{ path: `/feed/${article.title.toLowerCase().replace(/\s+/g, '-')}`, query: { id: article?.id } }"
        @click="navigateToDetails">
        <div @click="navigateToDetails"
            class=" flex flex-col gap-4 max-w-[100%] bg-[#FFFFFF] dark:bg-[#181A2A] border border-[#E8E8EA] dark:border-[#242535] p-4 rounded-xl">
            <img :src="article?.urlToImage ?? hero_img" alt="" class=" h-[240px] rounded-xl object-cover">
            <p class=" text-[14px] py-[4px] px-[10px] rounded-md bg-[#4B6BFB0D] w-max text-[#4B6BFB]">Technology</p>
            <p class=" text-[18px] text-[#181A2A] dark:text-[#FFFFFF] font-semibold">{{ truncateText(article?.title, 20)
                }}</p>

            <section class="flex items-center gap-4 font-medium mt-2">
                <div class="flex items-center gap-3">
                    <img :src="jason" alt="">
                    <p class=" opacity-70">{{ truncateText(article?.author, 10) ?? "Jason brown" }}</p>
                </div>
                <p class="opacity-70">{{ truncateText(formatDate(article?.publishedAt), 10) ?? "August 20, 2022" }}</p>
            </section>
        </div>
    </NuxtLink>
</template>