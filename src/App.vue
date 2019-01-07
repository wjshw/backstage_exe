<template>
<div id="app">
<el-container>
  <el-header>123</el-header>
</el-container>
<el-container>
  <el-header>
    <el-menu :default-active="0" mode="horizontal">
      <el-menu-item :index="idx" v-for="(nav, idx) in navList" :key="idx">
        <i class="icon" :class="nav.icon"></i>
        <span slot="title">{{nav.title}}</span>
      </el-menu-item>
    </el-menu>
  </el-header>
  <router-view></router-view>
  <!-- <el-container>
    <el-aside>
      <el-menu default-active="1-4-1" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>main</el-main>
  </el-container> -->
</el-container>
</div>
</template>

<script>
  export default {
    name: 'Index',
    data(){
      return {
        navList:[{
          icon: '',
          title: '网吧现状',
          route: ''
        },
        {
          icon: 'el-icon-time',
          title: '网吧配置',
          route: ''
        },
        {
          icon: '',
          title: '会员',
          route: ''
        },
        {
          icon: '',
          title: '水吧',
          route: ''
        },
        {
          icon: '',
          title: '营销',
          route: ''
        },
        {
          icon: '',
          title: '游戏',
          route: ''
        }]
      }
    }
  }
</script>

<style>
</style>