<template>
    <!-- 搜索框 -->
    <div class="h-7 flex items-center font">

        <span class="icon-xiangzuojiantou iconfont ml-1 text-black mr-1">
        </span>

        <div class="flex-1 border-2 border-yellow-400 rounded-lg h-4 flex items-center">

            <span class="icon-sousuo iconfont mx-1"></span>

            <input 
            class="h-3.5 w-20 none text-0.4rem" 
            type="text" 
            placeholder="66元赢机票">

        </div>

        <div 
        class="w-6 bg-yellow-400 h-4 rounded-lg mx-1 text-center leading-4 font-bold  text-0.4rem">
            搜索
        </div>
        
    </div>
    
    <!-- 搜索历史 -->
    <div class="flex justify-between">
        <span class="text-stroke-black font-bold text-0.4rem ml-1">搜索历史</span>
        <span class="icon-shanchu iconfont text-0.6rem mr-1"></span>
    </div>

    <!-- 搜索发现 -->
    <div class="flex justify-between">
        <span class="text-stroke-black font-bold text-0.4rem ml-1">搜索发现</span>
        <ul>
            <li></li>
        </ul>
    </div>

    <!-- 特价机票 -->
    <div class="w-38 h-7 xcenter mt-1 flex justify-between font ">
        <div class="border w-18.5 font-bold" >
            <div class="ml-1 mt-1 text-0.4rem">南昌<span class="icon-dc iconfont"></span>北京</div>
            <div class="ml-1 text-red-600 mt-1">
                <span >特价机票</span>
                <span class="text-0.4rem">￥579</span>
                <span class="border border-red-300 relative bottom-0.5 ml-0.5">1.7折</span>
            </div>
        </div>
        <div class="border w-18.5 font-bold" >
            <div class="ml-1 mt-1 text-0.4rem">北京<span class="icon-dc iconfont"></span>上海</div>
            <div class="ml-1 text-red-600 mt-1">
                <span >特价机票</span>
                <span class="text-0.4rem">￥580</span>
                <span class="border border-red-300 relative bottom-0.5 ml-0.5">1.3折</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.font{
    font-family:'楷体';
}
.none {
    outline: none;
}
.xcenter{
    position: relative;
    left:50%;
    translate: -50%;
}
</style>
