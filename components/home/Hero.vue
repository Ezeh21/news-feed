<script setup>
import { hero_img, jason } from '~/assets/imgs';
</script>
<template>

    <main class="relative w-full rounded-[20px] mb-[5rem]">
        <img :src="hero_img" alt="" class=" object-cover  w-full h-[400px]  sm:h-[600px]  rounded-[10px]">
        <div class=" shadow flex flex-col max-w-[350px] sm:max-w-[600px] gap-4 absolute bottom-[2rem] md:bottom-[-4rem] md:left-[5%] p-[20px] md:p-[40px] rounded-[12px] md:bg-[#fff] 
            md:border md:border-[#E8E8EA] md:dark:bg-[#181A2A] md:dark:border-[#242535]">
            <p class=" text-sm bg-[#4B6BFB]  text-[#fff] w-max py-[4px] px-[10px] rounded-[6px]">Technology</p>
            <p class=" text-[18px] sm:text-4xl font-semibold text-white md:text-[initial] dark:md:text-[#fff]">The
                Impact of
                Technology on the Workplace: How Technology is Changing
            </p>
            <section
                class="flex flex-col md:flex-row  md:items-center gap-5 text-white md:text-[#97989F] font-medium mt-2">
                <div class="flex items-center gap-3">
                    <img :src="jason" alt="">
                    <p>Jason Francisco</p>
                </div>
                <p>August 20, 2022</p>
            </section>
        </div>
    </main>


</template>