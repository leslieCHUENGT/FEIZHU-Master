<template>
    <div class="navbar">
        <router-link to="/">
            <div class="icon-text">
                <img class="w-5" src="https://i.328888.xyz/2023/04/23/i5gr6d.png">
            </div>
        </router-link>
        <router-link to="/strategy">
            <div class="icon-text">
                <i class="icon-xingqiu iconfont font-m"></i>
                <span>攻略</span>
            </div>
        </router-link>
        <router-link to="/cart">
            <div class="icon-text">
                <i class="icon-xiaoxi iconfont font-m"></i>
                <span>消息</span>
            </div>
        </router-link>
        <router-link to="/profile">
            <div class="icon-text">
                <i class="icon-hangcheng iconfont font-m"></i>
                <span>行程</span>
            </div>
        </router-link>
        <router-link to="/my">
            <div class="icon-text">
                <i class="icon-wowode iconfont font-m"></i>
                <span>我的</span>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()

</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

.navbar router-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: #666;
    text-decoration: none;
}

.navbar router-link.active {
    color: #f00;
}

.icon-text {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.font-m{
    font-size: 26px;
}
</style>
