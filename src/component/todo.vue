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
          <span class="mainTitle">To-do</span>
        </div>

        <div class="mainContentBox">
          <span class="mainContent">- Tomorrow never comes -</span>
        </div>

        <div class="mainWriteBox shadow">
          <input type="text" v-model="todo" v-on:keyup.enter="addTodo" />
          <span class="addButton" v-on:click="addTodo">
            <i class="addBtn fas fa-plus"></i>
          </span>
        </div>
      </div>
    </div>



    <div class="leftTodoList fas">
      <div class="leftTodoBox">

        <p class="leftContent big">- ToDo List -</p> <br>

        <div class="leftContentBox" v-for="(todoList, index) in todoList">

          <!-- <div class="moveContent">
            <div class="">
              <span v-on:click="upTodo">▲</span>
            </div>
            <div class="">
              <span v-on:click="downTodo">▼</span>
            </div>
          </div> -->

          <span class="leftContent">
            - {{todoList}}
          </span>

          <div class="editContent">
            <img class="updateContent" v-on:click="showWriteBox(index)"  src="../assets/edit.png">
            <i class="checkBtn fas fa-check" v-on:click="check(index)"></i>
            <i class="far fa-trash-alt" v-on:click="deleteTodo(index)"></i>
          </div>

          <div class="" v-if="updateCheck == true">
            <input type="text" v-model="updateContent" v-on:keyup.enter="updateTodo(index)" />
            <span v-on:click="updateTodo(index)">수정</span>
          </div>
        </div>

      </div>
    </div>



    <div class="rightTodoList fas">
      <div class="categoryBox">
        <div class="category" v-on:click="allCategory">
          전체
        </div>
        <div class="category" v-on:click="checkCategory">
          완료
        </div>
        <div class="category" v-on:click="uncheckCategory">
          미완료
        </div>
      </div>

      <div class="rightContentBox">
        <div class="" v-if="moveCategory == 0">
          <all v-bind:todoList="todoList" v-bind:checkTodo="checkTodo"></all>
        </div>
        <div class="" v-if="moveCategory == 1">
          <uncheck v-bind:todoList="todoList"></uncheck>
        </div>
        <div class="" v-if="moveCategory == 2">
          <check v-bind:checkTodo="checkTodo"></check>
        </div>
      </div>


    </div>

    <div class="backgroundBox">
      <img class="backgroundImg" src="../assets/todoBackground.jpg">
    </div>



  </div>
</template>

<script>
import all from '../todoList/allTodoList'
import uncheck from '../todoList/uncheckTodoList'
import check from '../todoList/checkTodoList'

export default {
  components: {
    all : all,
    uncheck : uncheck,
    check : check,
  },

  data() {
    return {
      todo : '',
      todoList : [],
      updateContent : '',
      updateCheck : false,
      checkTodo : [],

      moveCategory: 0,

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

    upTodo(i) {
      this.todoList
    },

    downTodo(i) {

    },

    deleteTodo(i) {
      this.todoList.splice(i, 1)
    },

    check(i) {
      this.checkTodo.push(this.todoList[i])
      this.todoList.splice(i, 1)
    },

    showWriteBox(i) {
      this.updateCheck = true
    },

    updateTodo(i) {
      console.log(i)
      this.todoList[i] = this.updateContent
    },

    allCategory() {
      this.moveCategory = 0
    },

    uncheckCategory() {
      this.moveCategory = 1
    },

    checkCategory() {
      this.moveCategory = 2
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

/* 메인 날짜 css */
.mainDateBox {
  margin-top: 3%;
}
.mainDate {
  font-size: 24px;
  color: white;
}
/* 메인 제목 css */
.maintitleBox {
  margin-top: 1%;
}
.mainTitle {
  font-size: 78px;
  color: white;
}

/* 메인 내용 css */
.mainContentBox {
  margin-top: 2%;
}
.mainContent {
  margin-top: 5%;
  font-size: 38px;
  color: white;
}

/* 메인 input 창 css */
.mainWriteBox {
  margin-top: 3%;
  margin-left: 25%;
}
.mainWriteBox input {
  outline: none;
  border-style: hidden;
  width: 85%;
  height: 50px;
}
.mainWriteBox {
  background: white;
  width: 50%;
  height: 53px;
  border-radius: 15px;
  line-height: 53px;
}
.addButton {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}


 /* 왼쪽 할일 리스트 css */

 /* 왼족 리스트 배경 css */
.leftTodoList {
  position: absolute;
  margin-left: 3%;
  margin-top: 30%;
  width: 60%;
  min-height: 800px;
  background-color: rgba(255, 255, 255, 0.3)
}
/* 왼쪽 리스트 위치잡아주는 css */
.leftTodoBox {
  margin-left: 2%;
  margin-top: 1%;
  margin-right: 3%;
}
/* todo 리스트 반복문 박스 css */
.leftContentBox {
  background: white;
  opacity: 0.7;
  padding: 3px 3px 3px 3px;
  margin-bottom: 1%;
  border-radius: 10px;
  width: 100%;
  display: flex;
}
/* 우선순위 바꿔주는 버튼 css */
.moveContent {
  display: flex;
  flex-direction: column;
}
.leftContent {
  width: 90%;
  font-size: 19px;
  margin: 10px;
}

.editContent {
  margin-top: 1%;
  width: 10%;
}
.updateContent {
  width: 25%;
  margin-right: 3%;
  cursor: pointer;
}
.checkBtn {
  width: 25%;
  cursor: pointer;
}
.fa-trash-alt {
  width: 25%;
  cursor: pointer;
}


/* 오른쪽 할일 리스트 css */
.rightTodoList{
  position: absolute;
  width: 30%;
  max-height: 700px;
  margin-top: 30%;
  margin-left: 68%;
  margin-right: 5%;
  background-color: rgba(255, 255, 255, 0.3);
  overflow-x:hidden;
  overflow-y:scroll;
  padding: 20px
}

.categoryBox {
  width: 100%;
  height: 50px;
  display: flex;
  margin-left: 10%;
}

.category {
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 25%;
  height: 40px;
  border-radius: 15px;
  text-align: center;
  padding-top: 3%;
  margin-right: 5%;
  color: white;
  cursor: pointer;
}

.rightContentBox{
  margin-top: 5%;
}







.big {
  margin-top: 2%;
  font-size: 24px;
}
</style>
