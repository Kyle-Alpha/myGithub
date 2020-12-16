<template>
  <el-row>
    <el-col :span="18" :offset="3" class="flex">
      <el-input v-model="wantTodo" placeholder="请输入内容" @keyup.enter="handleAddToDo" />
      <el-button type="primary" plain @click="handleAddToDo">添加</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="18" :offset="3">
      <to-do :todoit="todoList" @del-todo="delTodo"></to-do>
    </el-col>
  </el-row>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/toDoIt.vue'
import {
  onMounted,
  watch,
  computed,
  reactive,
  ref,
  toRefs,
  nextTick
} from 'vue'
import {
  ElInput,
  ElButton,
  ElRow,
  ElCol,
  ElCard,
  Message,
  ElScrollbar
  // ...
} from 'element3'
import ToDoIt from './components/toDoIt.vue'
const AddtoDo = () => {
  const states = reactive({
    wantTodo: '',
    todoList: [] 
  })
  const handleAddToDo = () => {
    let { wantTodo, todoList } = states
    if (!wantTodo) {
      return Message.info('请填写后在添加')
    }
    if (todoList.map(v=>v.wantTodo).includes(wantTodo)) return Message.info('请勿添加重复事宜')
    const id = todoList.length
    const isChecked = false
    todoList.unshift({
      id,
      isChecked,
      wantTodo
    })
    states.wantTodo = ''
  }
  return {
    handleAddToDo,
    states
  }
}
export default {
  name: 'App',
  components: {
    ToDo
  },
  setup() {
    let { handleAddToDo, states } = AddtoDo()
    console.log(localStorage.getItem('todoList'))
    const data = JSON.parse(localStorage.getItem('todoList')||'[]')
    states.todoList = data
    const delTodo = (val) => {
      states.todoList.splice(val, 1)
    }
    watch(states.todoList,(state,prev)=>{
    window.localStorage.setItem('todoList',JSON.stringify(state))
    })
    return {
      handleAddToDo,
      ...toRefs(states),
      delTodo
    }
  }
}
</script>
<style lang="">
.flex {
  display: flex;
  justify-content: space-around;
}
</style>