<template>
  <el-container>
    <el-aside width="200px" class="aside">
      <!-- <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
      </el-menu> -->
    </el-aside>
    <el-main>
      <router-view></router-view>

    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.aside {
  background-color: #eee;
}
.el-container {
  height: 100%;
}
</style>