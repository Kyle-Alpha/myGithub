<template>
  <el-row>
    <el-col :span="12" :offset="6" class="flex">
      <el-input v-model="wantTodo" placeholder="请输入内容" />
      <el-button type="primary" plain @click="handleAddToDo">添加</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12" :offset="6">
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
  Message
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
    if (todoList.includes(wantTodo)) return Message.info('请勿添加重复事宜')
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
    const { handleAddToDo, states } = AddtoDo()
    const delTodo = (val) => {
      states.todoList.splice(val, 1)
    }
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