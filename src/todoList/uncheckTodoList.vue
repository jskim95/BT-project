<template>
  <div class="">
    <div class="uncheckBox">
      <p>미완료({{todoList.length}})</p>
      <div class="rightContentBox" v-for="(todoList, index) in todoList">
        <p><span class="content">{{todoList[0]}}</span><span class="writeTime">{{todoList[2]}}</span></p>
      </div>
    </div>
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
.uncheckBox {
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
