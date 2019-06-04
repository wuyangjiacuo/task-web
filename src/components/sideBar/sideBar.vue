<template>
  <div class="sideBar-wrap">
    <el-row class="tac">
      <el-col :span="22">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="menuSelect">
          <!-- 基本分类 -->
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">今日</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">本周</span>
          </el-menu-item> 
          <!-- 项目列表 -->
          <el-submenu v-for="(menuItem, index) in menuList" :index="menuItem.id.toString()" :key="index">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <span>{{menuItem.label}}</span>
            </template>
            <el-menu-item-group v-if="menuItem.children.length > 0">
              <el-menu-item v-for="(subMenuItem, subIndex) in menuItem.children" :index="subMenuItem.id.toString()" :key="subIndex">{{subMenuItem.label}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { SideBarData, MenuItem } from '@/types/components/sideBar.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class SideBar extends Vue {
    // prop
    @Prop({
      required: false,
      default: ''
    }) name!: string

    // data
    data: SideBarData = {
      componentName: 'sideBar'
    }
    menuList: MenuItem = {}
    // Getter
    @Getter menu
      
    // Action
    @Action GET_MENU_ASYN
    @Action SET_CURRENT_MENU

    created() {
      //
    }
    
    activated() {
      //
    }

    mounted() {
      //
      this.GET_MENU_ASYN()
      this.SET_CURRENT_MENU('1')
    }
    menuSelect(index, indexPath) {
      this.SET_CURRENT_MENU(index)
    }
    @Watch('menu')
    onMenuChange(val: any, oldVal: any) {
      this.menuList = val
    }
  }
</script>

<style lang="less">
  @import "~@/assets/less/variables";

  .sideBar-wrap {
    width: 100%;
  }
</style>

