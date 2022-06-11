<template>
  <el-menu id="nav" router="true" mode="horizontal" background-color="#545c64"  text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="/"> Home </el-menu-item>
    <el-menu-item index="/Hello"> Hello </el-menu-item>
    <el-menu-item index="/About"> About </el-menu-item>
  </el-menu>
  <router-view />
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
