<template>
  <div class="">
    <div class="checkBox">
      <p>완료({{checkTodo.length}})</p>
      <div class="rightContentBox" v-for="(checkTodo, index) in checkTodo">
        <p><span class="content">{{checkTodo[0]}}</span><span class="writeTime">{{checkTodo[2]}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    checkTodo:{
      type: Array,
    },

  },
}
</script>

<style scoped>
.checkBox {
  width: 100%;
}
.rightContentBox {
  margin-top: 2%;
  padding: 3%;
  width: 90%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}
.content {
  width: 90%;
  font-size: 17px;
  margin: 10px;
}
.writeTime {
  margin-left: 6%;
  color: #666;
}
</style>
