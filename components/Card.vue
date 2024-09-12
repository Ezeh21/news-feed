<script setup lang="ts">
import {no_img } from '~/assets/imgs';
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
            content: article?.description,
            source: article?.source?.name
        }
    });
};

</script>

<template>
    <NuxtLink :to="{ path: `/feed/${article.title.toLowerCase().replace(/\s+/g, '-')}`, query: { id: article?.id } }"
        @click="navigateToDetails">
        <div @click="navigateToDetails"
            class=" flex flex-col gap-[1.45rem] max-w-[100%] h-[100%] bg-[#FFFFFF] dark:bg-[#181A2A] border border-[#E8E8EA] dark:border-[#242535] p-4 rounded-xl">
            <img :src="article?.urlToImage ?? no_img" alt="" class=" h-[240px] rounded-xl object-cover">
            <p class=" text-[14px] py-[4px] px-[10px] rounded-md bg-[#4B6BFB0D] w-max text-[#4B6BFB]">{{ article?.source?.name ??  "Technology"}}</p>
            <p class=" text-[18px] text-[#181A2A] dark:text-[#FFFFFF] font-semibold">{{ truncateText(article?.title, 25)
                }}</p>
                 <p class=" text-[13px] text-[#181A2A] dark:text-[#FFFFFF] font-medium italic opacity-[.75]">{{ truncateText(article?.description, 50)
                }} <span class=" text-[#4B6BFB] font-semibold">More</span></p>

            <section class="flex items-center justify-between gap-4 font-medium mt-2">
                <div class="flex items-center gap-3">
                    <p class=" opacity-70 text-[14px]">{{ truncateText(article?.author, 13) ?? "Jason brown" }}</p>
                </div>
                <p class="opacity-70 text-[14px]">{{ new Date(article?.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) ?? "Aug 20, 2022" }}</p>
            </section>
        </div>
    </NuxtLink>
</template>