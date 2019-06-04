<template>
  <div class="todoList-wrap">
    <div class="todoList" v-if="todoList">
      <!-- 还没进行的 -->
      <div class="title">未完成</div>
      <div class="todoItem" v-for="(todo, index) in todoList">
        <div class="status" v-if="todo.status === 0">
        </div>
        <el-checkbox v-if="todo.status === 0" :checked="todo.status === 1" @change="completeTodo(todo)">{{todo.content}}</el-checkbox>
      </div>
      <!-- 正在进行的 -->
      <div class="title">正在进行...</div>
      <div class="todoItem" v-for="(todo, index) in todoList" :key="index">
        <div class="status" v-if="todo.status === 2 || todo.status === 3">
          <el-tooltip class="item" effect="dark" content="todo正在进行中" placement="top">
            <i v-if="todo.status === 2" class="el-icon-loading" style="color:#409eff"></i>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="todo需要他人协作" placement="top">
            <i v-if="todo.status === 3" class="el-icon-chat-dot-square" style="color:#e6a23c"></i>
          </el-tooltip>
        </div>
        <el-checkbox v-if="todo.status === 2 || todo.status === 3" :checked="todo.status === 1" @change="completeTodo(todo)">{{todo.content}}</el-checkbox>
      </div>
      <!-- 已经完成的 -->
      <div class="title">已完成</div>
      <div class="todoItem" v-for="(todo, index) in todoList">
        <div class="status" v-if="todo.status === 1">
          <el-tooltip class="item" effect="dark" content="todo已完成" placement="top">
            <i v-if="todo.status === 1" class="el-icon-finished" style="color:#16a086"></i>
          </el-tooltip>
        </div>
        <el-checkbox v-if="todo.status === 1" :checked="todo.status === 1" @change="completeTodo(todo)">{{todo.content}}</el-checkbox>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { TodoListData } from '@/types/components/todoList.interface'
  import api from '@/api'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class TodoList extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: TodoListData = {
      componentName: 'todoList'
    }

    @Getter todoList;
    @Action UPDATE_TODO_LIST;

    created() {
      //
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }
    completeTodo(todo) {
      // console.log(todo)
      let obj = Object.assign({}, todo)
      obj.status = 1
      api.Todo.update(obj).then(res => {
        this.UPDATE_TODO_LIST()
      })
    }
  }
</script>

<style lang="less">
  @import "~@/assets/less/variables";

  .todoList-wrap {
    width: 100%;
    .todoList{
      padding: 5px;
      .todoItem{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .status{
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
</style>

