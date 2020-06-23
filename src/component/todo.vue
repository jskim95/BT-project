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
            - {{todoList[0]}}
          </span>

          <div class="editContent">
            <img class="updateContent" v-on:click="showWriteBox(index)" src="../assets/edit.png">
            <i class="checkBtn fas fa-check" v-on:click="check(index)"></i>
            <i class="far fa-trash-alt" v-on:click="deleteTodo(index)"></i>
          </div>

          <div class="updateBox" v-if=" todoList[1] == true">
            <input type="text" v-model="updateContent" v-on:keyup.enter="updateTodo(index)" />
            <span class="updateButton" v-on:click="updateTodo(index)">
              <i class="addBtn fas">수정</i>
            </span>
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
      //
      todo : '',
      todoList : [], // 미완료 todo
      updateContent : '',
      checkTodo : [], // 완료 todo
      prevIndex : -1, // 해당 todo update input창 만들기위한 변수
      moveCategory: 0, // 전체, 미완료, 완료 이동 버튼

      // 시간 변수
      time : '',
      todayMonth : '',
      todayDay : '',
      todayDate : '',

    }
  },
  methods: {
    addTodo() {
      this.nowTime()
      this.todoList.push([this.todo, false, this.time]);
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
      // 이전에 수정 버튼 누른것을 false로 바꾸주면서 input창 제거
      if (this.prevIndex !== -1) {
        this.todoList[this.prevIndex][1] = false;
      }

      // 현재 수정 버튼 누른곳은 true로 바꿔서 input창 생성
      this.todoList[i][1] = true;
      this.todoList = JSON.parse(JSON.stringify(this.todoList))
      this.prevIndex = i;
    },

    updateTodo(i) {
      this.todoList[i][0] = this.updateContent
      this.updateContent = ''
      this.todoList = JSON.parse(JSON.stringify(this.todoList))
      this.todoList[i][1] = false;
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
  background: white;
  width: 50%;
  height: 53px;
  border-radius: 15px;
  line-height: 53px;
}
.mainWriteBox input {
  outline: none;
  border-style: hidden;
  width: 85%;
  height: 50px;
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
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
}
/* 왼쪽 리스트 위치잡아주는 css */
.leftTodoBox {
  margin-left: 2%;
  margin-top: 1%;
  margin-right: 3%;
}
/* todo 리스트 반복문 박스 css */
.leftContentBox {
  background-color: rgba(255, 255, 255, 0.7);
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
/* todo 리스트 내용 css */
.leftContent {
  width: 90%;
  font-size: 19px;
  margin: 10px;
}



/* 수정 삭제 완료 아이콘 css */
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

/* 수정 input 창 css */

.updateBox {
  margin-left: 5%;
  background: white;
  width: 50%;
  height: 33px;
  border-radius: 15px;
  line-height: 33px;
}
.updateBox input {
  outline: none;
  border-style: hidden;
  /* width: 85%; */
  height: 30px;
}

.updateButton {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  width: 3rem;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
.addBtn {
  color: white;
  vertical-align: middle;
  text-align: center;
  padding-left: 15%;
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
  padding: 20px;
  border-radius: 20px;
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
