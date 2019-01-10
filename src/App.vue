<template>
<div id="app">
  <el-container>
    <el-header class="bartop">
          <div class="top_text">
            <el-row>
              <el-col :span="12">
            <span class="icon iconfont person">&#xe6a2;</span>XXX, 欢迎您
            <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item><span class="icon iconfont ">&#xe638;</span> 修改密码</el-dropdown-item>
    <el-dropdown-item><span class="icon iconfont ">&#xe618;</span> 退出系统</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
              </el-col>
              <el-col :span="12">
            <ul class="nav navbar-nav">
              <li>
                <a href="javascript:;">客服电话：400-800-6330</a>
              </li>
              <li class="help_center">
                <a href="http://www.aida58.com/help/list" target="_blank"><span class="icon iconfont">&#xe600;</span>
                  帮助中心</a>
              </li>
            </ul>
              </el-col>
            </el-row>
          </div>
    </el-header>
  </el-container>
  <el-container>
    <el-header>
      <el-menu :default-active="navList[0].route" mode="horizontal" router>
        <el-menu-item :index="nav.route" v-for="(nav, idx) in navList" :key="idx">
          <i class="icon" :class="nav.icon"></i>
          <span slot="title">{{nav.title}}</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>

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
          route: "/netbarinfo"
        },
        {
          icon: 'el-icon-time',
          title: '网吧配置',
          route: "/overview1"
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

<style lang="scss" scoped>
.bartop {
  height: 30px !important;
  line-height: 30px;
  color: #D5DBEA;
  margin: 0 -15px;
  background-color: #2D2E32;
}
.top_text {
  margin: 0 15px;
  font-size: 12px;
}
.top_text .person {
  font-size: 12px;
}
.nav{
  list-style: none;
  li{
  float: left;
  position: relative;
  display: block;
  a{
    text-decoration: none;
    display: block;
    padding: 15px
  }
}
}
.navbar-nav{
  float: right;
  margin: 0;
  margin-right: -20px;
}
.navbar-nav > li > a, .navbar-nav > li > a:focus{
  color: #fff
}
.navbar-nav>li>a:hover {
  color: #fff;
  background-color: #263143;
  padding-bottom: 15px;
}
.navbar-nav>li>a,
.navbar-nav>li>a:focus {
  color: #fff;
}
.navbar-nav>li>a>span {
  font-size: 12px;
  margin-right: 6px;
}
.help_center span {
  font-size: 14px;
}
.bartop li a {
  padding-top: 0;
  padding-bottom: 0;
  height: 30px;
  line-height: 30px;
}
.help_center a {
  background-color: rgba(255, 255, 255, .15);
  border-radius: 20px 0 0 20px;
}
.bartop span.user_name div {
  display: inline-block;
  width: 7px;
  height: 7px;
  /* background-image: url("../images/arrow.gif"); */
  background-position: bottom;
  margin-left: 4px;
}
.top_text .person,
.announce span,
.help_center span,
.top_text .user_name .btn-link {
  color: #3DAFFF;
}
</style>