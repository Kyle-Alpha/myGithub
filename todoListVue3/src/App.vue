<template>
  <el-row :gutter="20" >
    <el-col :span="12" :offset="6" class="flex">
      <el-input v-model="input" placeholder="请输入内容"/>  
       <el-button type="success">确认</el-button>
      </el-col>
    <!-- <el-col :span="4" >
      <el-button type="success">确认</el-button>
      </el-col> -->
  </el-row>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {onMounted,watch,computed,reactive,ref,toRefs,nextTick} from 'vue'
import {
  ElInput,
  ElButton,
  ElRow,
  ElCol
  // ...
} from 'element3'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(prop,ctx){
    const data = reactive({
      name:'kyle',
      age:24,
      job:'IT'
    })
    const msg = ref('')
    const input = ref(null)
    const str = computed(()=>msg.value.split('').reverse().join(''))
    onMounted(()=>{
     
    })
    return {
      msg,
      data,
      input,
      str
    }
  }
}
</script>
<style lang="">
  .flex{
    display: flex;
    justify-content: space-around;
  }
</style>