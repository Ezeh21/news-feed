<script setup>
import {  no_img } from '~/assets/imgs';
import truncateText from '~/assets/utils/truncate';
const router = useRouter();

const { data, status } = await useFetch("/api/articles")
const article = computed(() => {
    if (data.value?.status === 200) {
        const articleList = data.value?.data?.articles || [];
        return articleList.length > 0 ? articleList[Math.floor(Math.random() * articleList.length)] : null;
    }
    return null;
})

const navigateToDetails = () => {
    if (article.value) {
        router.push({
            path: `/feed/${article.value.title.toLowerCase().replace(/\s+/g, '-')}`,
            query: {
                title: article.value.title,
                urlToImage: article.value.urlToImage,
                author: article.value.author,
                publishedAt: article.value.publishedAt ? new Date(article.value.publishedAt).toISOString() : null,
                content: article.value.description
            }
        });
    }

   
};


</script>
<template>

    <main @click="navigateToDetails" class="relative w-full cursor-pointer rounded-[20px] mb-[10rem]">
        <img :src="article?.urlToImage ?? no_img
            " alt="" class=" object-cover  w-full h-[400px]  sm:h-[600px]  rounded-[10px]">
        <div class=" shadow flex flex-col max-w-[350px] sm:max-w-[600px] gap-4 absolute bottom-[2rem] md:bottom-[-4rem] md:left-[5%] p-[20px] md:p-[40px] rounded-[12px] md:bg-[#fff] 
            md:border md:border-[#E8E8EA] md:dark:bg-[#181A2A] md:dark:border-[#242535]">
            <p class=" text-sm bg-[#4B6BFB]  text-[#fff] w-max py-[4px] px-[10px] rounded-[6px]">{{ article?.source?.name ?? "Technology" }}</p>
            <p class=" text-[18px] sm:text-4xl font-semibold text-white md:text-[initial] dark:md:text-[#fff]">{{
                truncateText(article?.title, 65)
            }}
            </p>
            <section
                class="flex flex-col  md:flex-row  md:items-center gap-[2.5rem] text-white md:text-[#97989F] font-medium mt-2">
                <div class="flex items-center gap-3">
                    
                    <p>{{ article?.author ?? "Jason brown" }}</p>
                </div>
                <p>{{ new Date(article?.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) ?? "Aug 20, 2022" }}</p>
            </section>
        </div>
    </main>


</template>