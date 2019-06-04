<template>
  <div id="app">
    <div id="app">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
  </div>
</template>

<style lang="less">

</style>
