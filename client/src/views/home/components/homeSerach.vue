<template>
    <!-- 搜索栏 -->
    <div class="w-screen h-8 bg-img flex items-end justify-center">
        <div
            class="bg-light-50 w-36 h-5 rounded-xl  border-2 border-solid border-yellow-300 flex justify-between items-center ">

            <div class="iconfont icon-erweima px-2 border-r-1 "></div>

            <div class="flex-auto ml-1 font-bold tracking-2px font-mono">
                江西南昌
            </div>

            <div
                class="w-6 h-3 bg-yellow-300 flex items-center justify-center rounded-xl text-center mx-1 font-bold font-serif ">
                搜索
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
const state = reactive({
    // 搜索建议
    sug: [{ id: 1, sug: '南昌的景点' },
    { id: 2, sug: '南昌美食' },
    { id: 3, sug: '南昌住宿' },
    { id: 4, sug: '南昌旅游攻略' },
    { id: 5, sug: '南昌交通指南' },]
})


</script>
<style scoped>
.bg-img {
    /* 背景图片 */
    background: url('@/assets/images/1681741391.webp');
    background-position: 50% -45%;
    background-size: cover;
}
</style>


