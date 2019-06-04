<template>
  <div class="main-wrap">
    <el-tabs v-model="activeName" stretch @tab-click="handleClick">
      <el-tab-pane label="todo" name="first">
        <TodoList/>
      </el-tab-pane>
      <el-tab-pane label="笔记" name="second">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" src="./main.ts"></script>

<style lang="less">
  @import './main.less';
</style>

