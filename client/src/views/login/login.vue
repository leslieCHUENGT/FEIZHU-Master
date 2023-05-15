<template>
  <div class="font-f">
    <header class="mt-2 font-bold text-0.37rem flex justify-between">
      <span class="icon-xiangzuojiantou iconfont ml-1 flex-1"></span>
      <span class="mr-3">隐私</span>
      <span class="mr-2">遇到问题 ?</span>
    </header>

    <!-- logo -->
    <img class="w-10 h-10 center-x mt-4" src="https://i.328888.xyz/2023/04/23/i5gr6d.png" />

    <!-- 登录表单 -->
    <van-form @submit="onSubmit" >
  <van-cell-group inset>
    <van-field
      v-model="state.name"
      name="name"
      label="用户名"
      placeholder="用户名"
      autocomplete="current-password"
      :rules="[{ required: true, message: '用户名不能为空' }]"
    />
    <van-field
      v-model="state.password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '密码不能为空' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>

    <footer>
      <div>其他方式</div>
      <div>
        <span>淘宝</span>
        <span>支付宝</span>
        <span>验证码</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import axios from 'axios';

const state = reactive({
  name: "",
  password: "",
});

const onSubmit = async (values: any) => {
  try {
    const response = await axios.post('api/users/login', values);
    console.log(response.data);
    console.log(response.data.result.token);
    localStorage.setItem('token', response.data.result.token); 
  } catch (err: any) {
    console.log(err.response.data);
  }
};




</script>

<style scoped>
.font-f {
    font-family: '楷体';   
}

.center-x {
  position: relative;
  left: 50%;
  translate: -50%;
}

.none {
  outline: none;
}
</style>


