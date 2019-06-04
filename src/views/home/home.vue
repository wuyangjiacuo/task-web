<template>
  <div class="home-wrap">
    <div class="content-container">
      <div class="sideBar">
        <SideBar/>
      </div>
      <div class="mainContent">
        <div class="header">
          <div class="userInfo" v-if="avatarUrl">
            <img :src="avatarUrl"></img>
            <div class="userDetail">
              <span>{{userName}}</span>
            </div>
          </div>
          <div class="actions">
            <el-button type="primary" size="mini" icon="el-icon-s-data" circle></el-button>
            <el-button type="primary" size="mini" icon="el-icon-s-flag" circle></el-button>
            <el-button type="primary" size="mini" icon="el-icon-star-on" circle></el-button>
            <el-button type="danger" size="mini" icon="el-icon-more" @click="logOut" circle></el-button>
          </div>
        </div>
        <div class="dataList">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"/>
        </div>
        <div class="bottom-actions" v-if="showAddBtn">
          <el-button type="primary" size="mini" icon="el-icon-plus" circle @click="showAddForm"></el-button>
        </div>
      </div>
    </div>
    <el-dialog
      title=""
      :visible.sync="addFormVisible"
      width="30%"
      :before-close="handleClose">
      <TodoForm/>
    </el-dialog>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>

<style lang="less">
  @import './home.less';
</style>
