<template>
  <el-card class="box-card">
    <el-scrollbar>
      <div v-for="(item, index) in todoit" :key="item.id" class="item">
        <el-checkbox
          v-model="item.isChecked"
          :class="{ 'had-done': item.isChecked }"
          >{{ item.wantTodo }}</el-checkbox
        >
        <i class="el-icon-error" @click="delTodo(index)"></i>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<script>
import { ref, watch, onUpdated } from 'vue'
export default {
  props: {
    todoit: Array
  },
  // emits: ['del-todo'],
  setup(props, ctx) {
    const delTodo = (i) => {
      ctx.emit('del-todo', i)
    }
    return {
      delTodo
    }
  }
}
</script>

<style>
.box-card {
  width: 100%;
  height: 300px;
}
.item {
  display: flex;
  background-color: #eff;
  border-bottom: 1px solid #999;
  padding: 6px 15px;
  border-radius: 4px;
  box-shadow: 1px 10px 10px #ccc;
  margin-bottom: 4px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #666;
  position: relative;
  overflow: hidden;
}
.item:hover i {
  opacity: 1;
  transition: all 1s ease;
  pointer-events: auto;
}
.item > i {
  color: #f00;
  opacity: 0;
  pointer-events: none;
}
.item::before {
  position: absolute;
  content: '';
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 100%;
  background-color: #f00;
}

.had-done > .el-checkbox__label {
  color: #ccc !important;
  text-decoration: line-through;
}
</style>