<template>
  <div class="">
    <p>{{todoList}}</p>

    <p>{{checkTodo}}</p>
  </div>
</template>

<script>
export default {
  props:{
    todoList:{
      type: Array,
    },
    checkTodo: {
      type: Array,
    }
  },
}
</script>

<style scoped>
</style>
