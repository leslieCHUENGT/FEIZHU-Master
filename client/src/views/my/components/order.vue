<template>
    <!-- 订单列表 -->
    <div class="w-38 h-10 center rounded  mt-1 font bg-white">
        <!-- 订单标题 -->
        <div class="h-4 border-b ml-1 flex justify-between items-center">
            <span class="text font-bold " >我的订单</span>
            <span class="mr-4 font-bold text-red-400">全部订单<i class="icon-xiangyoujiantou iconfont "></i></span>
        </div>
        <!-- 订单状态 -->
        <div class="flex justify-around">
            <div class="text-center">
                <div class="icon-daifukuan iconfont"></div>
                <div>待付款</div>
            </div>
            <div  class="text-center">
                <div class="icon-shijian iconfont"></div>
                <div>处理中</div>
            </div>
            <div  class="text-center">
                <div class="icon-dingwei iconfont"></div>
                <div>未出行</div>
            </div>
            <div  class="text-center">
                <div class="icon-review iconfont"></div>
                <div>待评价</div>
            </div>
            <div  class="text-center">
                <div class="icon-shouhou iconfont"></div>
                <div>退款/售后</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.center{
    position: relative;
    left: 50%;
    translate:-50%;
}
.text{
    font-size: .373333rem /* 14/37.5 */;
    font-family: '楷体';
}
.font{
    font-family: '楷体';
}
</style>
