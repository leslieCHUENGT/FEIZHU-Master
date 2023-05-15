<template>
    <!-- 飞猪省钱卡 -->
    <div class="center w-38 h-13 rounded  mt-1 font-sans bg-white">
   
    <div class="flex justify-between h-5 items-center bg-rose-50 rounded-t">
        <div class="ml-1 ">
        <!-- 卡名 -->
        <div class="text-stroke-black font-700 text">飞猪省钱卡<i class="icon-xiangyou3 iconfont text-s"></i></div>
        <!-- 卡片优惠信息 -->
        <div class="text-red-400">享160元折上立减,50%历程奖励</div>
        </div> 
        <!-- 领芒果会员 -->
        <div class="w-12 justify-center h-3 bg-red-500 rounded-lg text-light-50 font-300 text-center mr-1 leading-3 flex">
        <span><svg t="1682163524253" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6906" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M18.962963 151.703704m75.851852 0l758.518518 0q75.851852 0 75.851852 75.851852l0 530.962963q0 75.851852-75.851852 75.851851l-758.518518 0q-75.851852 0-75.851852-75.851851l0-530.962963q0-75.851852 75.851852-75.851852Z" fill="#FFA500" p-id="6907"></path><path d="M284.444444 493.037037m37.925926 0l303.407408 0q37.925926 0 37.925926 37.925926l0 0q0 37.925926-37.925926 37.925926l-303.407408 0q-37.925926 0-37.925926-37.925926l0 0q0-37.925926 37.925926-37.925926Z" fill="#FFFFFF" p-id="6908"></path><path d="M284.444444 644.740741m37.925926 0l113.777778 0q37.925926 0 37.925926 37.925926l0 0q0 37.925926-37.925926 37.925926l-113.777778 0q-37.925926 0-37.925926-37.925926l0 0q0-37.925926 37.925926-37.925926Z" fill="#FFFFFF" p-id="6909"></path><path d="M720.592593 493.037037m37.925926 0l0 0q37.925926 0 37.925925 37.925926l0 0q0 37.925926-37.925925 37.925926l0 0q-37.925926 0-37.925926-37.925926l0 0q0-37.925926 37.925926-37.925926Z" fill="#FFFFFF" p-id="6910"></path><path d="M208.592593 341.333333h720.592592v75.851852H208.592593z" fill="#FFC966" p-id="6911"></path></svg></span> 
        <span>领芒果会员</span> </div>
    </div>
       
       
        <div class="grid grid-cols-2">
            <!-- 品牌会员卡 -->
            <div class=" h-4 flex px-1 justify-between font-700 border-b border-r items-center">
                <span class="font-700">品牌会员卡</span>
                <span class="text-red-400 ">1张</span>
            </div>
            <!-- 红包卡卷 -->
            <div class="  h-4 flex px-1 justify-between font-700 border-b border-r items-center">
                <span class="font-700">红包卡卷</span>
                <span class="text-red-400 ">2张</span>
            </div>
        
            <div class="  h-4 flex px-1 justify-between font-700  border-r items-center">
                <!-- 飞猪钱包 -->
                <span class="font-700">飞猪钱包</span>
                <span class="text-red-400 ">￥0.00</span>
            </div>
            <div class=" h-4 flex px-1 justify-between font-700  border-r items-center">
                <!-- 飞猪里程 -->
                <span class="font-700">飞猪里程</span>
                <span class="text-red-400 ">可领里程</span>
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
font-size:.373333rem /* 14/37.5 */;
font-family: '楷体';
}
.text-s{
font-size: .32rem /* 12/37.5 */;
}
</style>
