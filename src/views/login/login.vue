<template>
  <div class="login-wrap">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.password" onfocus="this.type='password'" ></el-input>
      </el-form-item>
      <el-form-item label="记住密码">
        <el-switch></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="less">
@import "./login.less";
</style>

