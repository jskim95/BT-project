<template>
  <div class="">
    <p>{{todoList}}</p>
  </div>
</template>

<script>
export default {
  props:{
    todoList:{
      type: Array,
    },

  },
}
</script>

<style scoped>
</style>
