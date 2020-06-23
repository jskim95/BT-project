<template>
  <div class="">
    <div class="ALL">

      <div>
        <router-link to="/"><img src="../assets/mainLogo.png"></router-link>
      </div>

      <div class="fas main">
        <div class="mainDateBox">
          <span class="mainDate">{{todayMonth}}{{todayDate}}{{todayDay}}</span>
        </div>

        <div class="maintitleBox">
          <span class="mainTitle">Todo List</span>
        </div>

        <div class="mainContentBox">
          <span class="mainContent">- Tomorrow never comes -</span>
        </div>

        <div class="addBtn fas mainWriteBox">
          <input type="text" v-model="todo" v-on:keyup.enter="addTodo" />
          <button type="button" v-on:click="addTodo">추가</button>
        </div>
      </div>

    </div>

    <div class="leftTodoList fas">
      <div class="leftContentBox">
        <p class="leftContent" v-for="(todoList, index) in todoList">{{todoList}}</p>
      </div>
    </div>

    <div class="rightTodoList fas">
      <div class="rightContentBox">
        <p class="leftContent" v-for="(todoList, index) in todoList">{{todoList}}</p>
      </div>
    </div>

    <div class="backgroundBox">
      <img class="backgroundImg" src="../assets/todoBackground.jpg">
    </div>



  </div>
</template>

<script>

export default {
  data() {
    return {
      todo : '',
      todoList : [],

      // 시간 변수
      time : '',
      todayMonth : '',
      todayDay : '',
      todayDate : '',
    }
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todo)
      this.resetTodo()
    },

    resetTodo() {
      this.todo = ""
    },

    nowTime() {
      var now = new Date()
      console.log("asdfqwe")
      this.time = now.toLocaleTimeString().slice(0,8)
    },

    getToday() {
      var today = new Date()

      var month = today.getMonth() + 1
      var date = today.getDate()
      var day = today.getDay()
      var days = ['일', '월', '화', '수', '목', '금', '토',]

      this.todayMonth += month+"월 "
      this.todayDate += date+"일 "
      this.todayDay += days[day]+"요일 "
    },
  }, // methods 끝

  mounted() {
    this.nowTime()
    this.getToday()
  }, // mounted 끝
}
</script>

<style scoped>
/* 배경 이미지, 로고 css */
.ALL {
  width: 100%;
  position: absolute;
}

.backgroundImg {
  width: 100%;
  min-height: 800px;
}
/* 메인 부분 css */
.main {
  width: 100%;
  text-align: center;
}

.mainDateBox {
  margin-top: 3%;
}
.mainDate {
  font-size: 24px;
  color: white;
}

.maintitleBox {
  margin-top: 1%;
}
.mainTitle {
  font-size: 78px;
  color: white;
}

.mainContentBox {
  margin-top: 2%;
}
.mainContent {
  margin-top: 5%;
  font-size: 38px;
  color: white;
}

.mainWriteBox {
  margin-top: 3%;
}


 /* 왼쪽 할일 리스트 css */
.leftTodoList {
  position: absolute;
  margin-left: 3%;
  margin-top: 30%;
  width: 60%;
  /* min-height: 800px; */
  background-color: white;
  opacity: 0.7
}
.leftContentBox {
  margin-left: 2%;
  margin-top: 1%;
}
.leftContent {
  font-size: 19px;
}

/* 오른쪽 할일 리스트 css */
.rightTodoList{
  position: absolute;
  width: 30%;
  max-height: 700px;
  margin-top: 30%;
  margin-left: 68%;
  margin-right: 5%;
  background-color: white;
  opacity: 0.7;
  overflow-x:hidden;
  overflow-y:scroll;

}


</style>
