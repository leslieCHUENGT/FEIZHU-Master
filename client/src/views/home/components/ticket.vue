<template>
    <!-- 票务信息 -->
    <div class="bg-red-500 border-red-600 border   rounded w-36 h-19 xcenter mt-1 font">
    <div class="bg-light-50 border-red-600 border   rounded ">
        <!-- 始发地和目的地 -->
        <div class="font-bold flex justify-around items-center h-5 fontsize">
            <div>北京市</div>
            <div class="iconfont icon-zhuanhuan "></div>
            <div>上海市</div>
        </div>
        <!-- 分割线 -->
        <div class="w-26 h-0.1 bg-gray-200 xcenter"></div>
        <!-- 日期和提示 -->
        <div class="h-5 flex items-center ">
            <span class="fontsize-1 font-bold ml-3">05月03日</span>
            <div class="bg-red-100 text-red-800 ml-2 w-14 text-center rounded-lg">今日开售5月4日火车票</div>
        </div>
        <!-- 分割线 -->
        <div class="w-26 h-0.1 bg-gray-200 xcenter"></div>  
        <!-- 搜索按钮 -->
        <div class="flex items-center justify-around  h-5">
            <div class="bg-yellow-300 bor h-3 w-12 rounded-lg  flex items-center justify-center font-bold ">搜索机票</div>
            <div  class="bg-yellow-300 h-3 w-12  rounded-lg flex items-center justify-center font-bold">搜火车票</div>
        </div>
    </div>
    <!-- 其他信息 -->
    <div class="text-light-50 flex justify-between">
    <div>
        <span class="iconfont icon-naozhong text-yellow-200 ml-1"></span>
        <span class="ml-1 font-bold">全球特价机票, 低至1折起!</span>
    </div>
       <div>
         <span class="mr-1">查询底价>></span>
        <span class="iconfont icon-you mr-1"></span>
       </div>
        
    </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.xcenter{
    position: relative;
    left: 50%;
    transform: translateX(-50%);  
}
.font{
    font-family: '楷体';
}
.fontsize{
    font-size:20px;
}
.fontsize-1{
    font-size: 18px;
}
</style>
