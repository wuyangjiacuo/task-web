<template>
  <div class="todoForm-wrap">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="">
        <el-radio-group v-model="ruleForm.importance">
          <el-radio-button label="1">重要</el-radio-button>
          <el-radio-button label="2">一般</el-radio-button>
          <el-radio-button label="3">随便</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Todo" prop="content">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="ruleForm.content"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="ruleForm.remark"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { TodoFormData, RuleForm, Rules } from '@/types/components/todoForm.interface'
  import api from '@/api/index';
  // import {  } from "@/components" // 组件

  @Component({})
  export default class TodoForm extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: TodoFormData = {
      componentName: 'todoForm'
    }
    @Getter currentMenuId;

    ruleForm: RuleForm = {
      projectId: this.currentMenuId,
      ownerId: 0,
      remark: "备注",
      importance: 1,
      content: "任务test任务test任务test任务test任务test",
      qq: "553126568",
      wechat: "wuyangjiacuo",
      createTime: "",
      updateTime: ""
    }
    rules: Rules = {
      content: [
        { required: true, message: '请输入todo的内容', trigger: 'blur' },
        { min: 3, max: 200, message: '长度在 3 到 200 个字符', trigger: 'blur' }
      ],
      remark: [
        { required: false, message: '请选择活动区域', trigger: 'change' }
      ]
    }
    created() {
      //
    }
    
    activated() {
      //
    }

    mounted() {
      //
      this.ruleForm.projectId = this.currentMenuId
    }
    submitForm(formName) {
      console.log(this.ruleForm)
      api.Todo.add(this.ruleForm).then(res => {
        console.log(res)
      })
    }
    resetForm(formName) {
      this.ruleForm.importance = 1
      this.ruleForm.content = ''
      this.ruleForm.remark = ''
    }
    @Watch('currentMenuId')
    onCurrentMenuIdChange() {
      this.ruleForm.projectId = this.currentMenuId
    }
  }
</script>

<style lang="less">
  @import "~@/assets/less/variables";

  .todoForm-wrap {
    width: 100%;
  }
</style>

