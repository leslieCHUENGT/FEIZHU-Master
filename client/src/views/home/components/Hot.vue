<template>
    <div class="rounded w-36 h-12 xcenter mt-1 font flex justify-between">
       <div class="w-17.5 h-12 bg-red-50 rounded">
            <div class="h-3  flex items-center justify-around">
                <img class="w-1.5 h-1.5 ml-0.5" src="https://i.328888.xyz/2023/04/23/i51dEU.png " >
                <span class="font-bold mr-1 ">飞猪榜单</span>
                <div class="w-8 h-2 mr-1 bg-white flex items-center justify-center truncate text-green-600 font-bold  rounded">
                    让旅行更简单
                </div>          
            </div>
            
            <div class="w-16 h-8 rounded-sm mx-0 mx-auto bg-img1   text-white font-bold flex flex-col justify-end " >
                <div class="text-0.37rem ml-0.5 truncate">北京人文古迹榜</div>
                <div class="flex items-center">
                    <span class="ml-0.5">奇妙之旅</span>
                    <div class="w-4 h-1.5 text-center leading-1.5 ml-1 rounded bg-yellow-300 text-black">特价</div>
                </div>
             </div>
            
       </div>

       <div class="w-17.5 h-12 bg-red-50 rounded">
            <div class="h-3  flex items-center ">
                <img class="w-1.5 h-1.5 ml-0.5" src="https://i.328888.xyz/2023/04/23/i51G2p.png" >
                <span class="font-bold mr-1 ml-0.5">奇妙之旅</span>
                       
            </div>
            
            <div class="w-16 h-8 rounded-sm mx-0 mx-auto bg-img2  text-white font-bold flex flex-col justify-end " >
                <div class="text-0.37rem ml-0.5 truncate">南昌<span class="icon-dc iconfont"></span>南宁<span class="text-0.2rem ml-1">单程</span></div>
                <div class="flex items-center">
                    <span class="ml-0.5">￥239起</span>
                    <div class="w-4 h-1.5 text-center leading-1.5 ml-1 rounded bg-yellow-300 text-black">2.0折</div>
                </div>
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
.bg-img1 {
background-image: url('https://i.328888.xyz/2023/04/23/i5JDiC.jpeg');
background-size:100% 100%; 
}
.bg-img2 {
background-image: url('https://i.328888.xyz/2023/04/23/i5JUOP.jpeg');
background-size:100% 100%; 
}
</style>