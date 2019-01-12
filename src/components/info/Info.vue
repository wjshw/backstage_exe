<template>
<el-container>
  <el-aside>
      <!-- <el-scrollbar :native="false" noresize="false"> -->
    <el-menu default-active="$route.path" :collapse="isCollapse" router>
      <el-menu-item index="/netbarinfo/overview"><iconfont>&#xe6c5;</iconfont>现时概况</el-menu-item>
      <el-menu-item index="/netbarinfo/analysis"><iconfont>&#xe6c5;</iconfont>经营分析</el-menu-item>
      <el-menu-item index="/netbarinfo/shift"><iconfont>&#xe6c5;</iconfont>交班明细</el-menu-item>
      <el-menu-item index="/netbarinfo/order"><iconfont>&#xe6c5;</iconfont>网咖订单</el-menu-item>
    </el-menu>
      <!-- </el-scrollbar> -->
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
