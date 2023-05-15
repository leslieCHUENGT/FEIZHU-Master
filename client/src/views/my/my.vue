<template>
    <!-- 主页面 -->
    <main class="bg-light-500 h-full" style="overflow: auto; ">
    <!-- 头部 -->
    <Header/>
    <!-- 红包 -->
    <packet/>
    <!-- 钱包 -->
    <wallet/>
    <!-- 活动 -->
    <activity/>
    <!-- 订单 -->
    <order/>
    <!-- 记忆卡 -->
    <memory/>
    <!-- 工具 -->
    <tools/>
    <!-- 股权 -->
    <equity/>
    <!-- 导航栏 -->
    <navbar/>
    </main>
</template>

<script setup lang="ts">
import navbar from '../../components/navbar.vue'
import Header from './components/header.vue'
import wallet from './components/wallet.vue'
import order from './components/order.vue' 
import activity from './components/activity.vue'
import packet from './components/packet.vue'
import memory from './components/memory.vue'
import tools from './components/tools.vue'
import equity from './components/equity.vue'

</script>

<style scoped>
/* 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}

</style>
