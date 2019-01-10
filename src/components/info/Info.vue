<template>
<el-container>
  <el-aside>
    <el-menu default-active="netbarinfo/overview" :collapse="isCollapse" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="/netbarinfo/overview">选项1</el-menu-item>
        <el-menu-item index="/netbarinfo/overview1">选项2</el-menu-item>
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
  <router-view></router-view>
</el-container>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      result: ''
    }
  },
  created(){
    this.comNum([1],[2,3],[4,5,6])
  },
  methods: {
    comNum(arg){
      if(arguments.length>=2){
        let arr = [...arguments]
        console.log(arr)
        let len1 = arr.pop()
        let len2 = arr.pop()
        let newArr = []
        for(let i=0; i<len1.length; i++){
          for(let j=0; j<len2.length; j++){
            newArr.push(len1[i]+"" + len2[j]);
          }
        }
        console.log(len1,len2,newArr)
        arr.push(newArr)
        this.comNum(...arr)
      }else{
        console.log(arguments[0],arguments[0].length)

      }
      
    }
  }
}
</script>

<style scoped>
</style>
