<template>
   <!-- 这里是首页的模板 -->
   <div class="h-full scrollbar-hidden" style="overflow: auto; ">
        <!-- 搜索框组件 -->
        <search/>
        <!-- 搜索建议组件 -->
        <suggestion />
        <!-- 机票组件 -->
        <ticket/>
        <!-- 优惠组件 -->
        <discounts/>
        <!-- 导航栏组件 -->
        <navbar/>
        <!-- 热门组件 -->
        <Hot />
     </div>
</template>

<script setup lang="ts">
import { computed,onMounted } from 'vue'
// 引入组件
import search from './components/homeSerach.vue'
import suggestion from './components/SearchSuggestion.vue'
import ticket from './components/ticket.vue'
import navbar from '../../components/navbar.vue'
import discounts from './components/discounts.vue'
import Hot from './components/Hot.vue'
import { useHomeStore } from '../../store/home'

const homeStore = useHomeStore(); // 本地到中央的联系
const sidebar = computed(()=>homeStore.sidebar)

onMounted(async () => {
  await homeStore.getSideBar()
  console.log(sidebar.value)
})


</script>

<style scoped>
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}

</style>
