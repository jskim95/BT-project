<template>
  <div id="ALL">

    <div class="TopBox">
      <router-link to="/"><img class="mainLogo"  v-on:click="moveHome" src="../assets/mainLogo.png"></router-link>

      <div class="TopBoxLeft" v-on:click="moveCategoryPage">
        <router-link to="inside">INSIDE</router-link>
        <router-link to="newsRoom">NEWSROOM</router-link>
        <router-link to="trend">TREND</router-link>
      </div>

      <div class="TopBoxRight">
        <a href="http://sinsiway.com/" target="_blank"><img src="../assets/home.png"></a>
        <a href="https://www.instagram.com/sinsiway_official/" target="_blank"><img src="../assets/instagram.png"></a>
        <a href="https://www.youtube.com/channel/UC25guIr2P55QP3dd2I2BXPA" target="_blank"><img src="../assets/youtube.png"></a>
      </div>
    </div>

    <div class="mainBox">
      <img src='../assets/mainBanner1.png'>
    </div>

    <div class="middle">

      <div class="left">

        <div class="leftTitle">
          <p>SINSIWAY LINK</p>
        </div>

        <div class="leftCategory">
          <div class="detailCategory" v-on:click="moveRecent">
            <a href="#"><img src='../assets/clock.png'></a>
          </div>
          <div class="detailCategory" v-on:click="movePopular">
            <a href="#"><img src='../assets/star.png'></a>
          </div>
        </div>

        <div class="categoryContent">
          <div class="" v-if="moveCategory == 1">
            <recent></recent>
          </div>
          <div class="" v-if="moveCategory == 2">
            <popular></popular>
          </div>
        </div>

      </div>

      <div class="center">
        <div class="mainPageContent" v-if="moveContent == 0">

          <!-- 게시글 앨범형 카드형 선택 -->
          <div class="choiceContentView">
            <div class="movePageMargin" v-on:click="moveCategoryPage">
              <router-link class="movePage" to="inside" >INSIDE</router-link>
            </div>
            <div class="choiceView">
              <img src='../assets/card.png'>
              <img src='../assets/card.png'>
            </div>
          </div>

          <div class="mainContent inside">
            <div class="contentBox" v-for="(recentInsideData, index) in recentInsideData">
              <router-link class="movePage" to="inside" ><img :src="recentInsideData[7]" class="contentImg" v-on:click="moveCategoryPage"></router-link>
              <p class="gray"><span class="blue">INSIDE</span> {{recentInsideData[4]}}</p>
              <p class="contentTitle">{{recentInsideData[3]}}</p>
              <p>{{recentInsideData[6]}}...</p>
            </div>
          </div>

          <div class="movePageMargin" v-on:click="moveCategoryPage">
            <router-link class="movePage" to="newsRoom">NEWSROOM</router-link>
          </div>
          <div class="mainContent newsRoom">
            <div class="contentBox" v-for="(recentNewsRoomData, index) in recentNewsRoomData">
              <router-link class="movePage" to="newsRoom" ><img :src="recentNewsRoomData[7]" class="contentImg" v-on:click="moveCategoryPage"></router-link>
              <p class="gray"><span class="blue">NEWSROOM</span>  {{recentNewsRoomData[4]}}</p>
              <p class="contentTitle">{{recentNewsRoomData[3]}}</p>
              <p>{{recentNewsRoomData[6]}}...</p>
            </div>
          </div>

          <div class="movePageMargin" v-on:click="moveCategoryPage">
            <router-link class="movePage" to="trend">TREND</router-link>
          </div>

          <div class="mainContent trend">

            <div class="contentBox" v-for="(listTrendData, index) in listTrendData">
              <router-link class="movePage" to="trend" ><img :src="listTrendData[7]" class="contentImg" v-on:click="moveCategoryPage"></router-link>
              <p class="gray"><span class="blue">TREND</span>  {{listTrendData[4]}}</p>
              <p class="contentTitle">{{listTrendData[3]}}</p>
              <p>{{listTrendData[6]}}...</p>
            </div>

          </div>
        </div>


        <div class="movePageContent" v-if="moveContent == 1">
          <router-view></router-view>
        </div>

      </div>


    </div>




  </div>

</template>

<script>
import $ from 'jquery'
  $(document).ready(function(){
    $(window).scroll(function(){
      var scrollValue = $(this).scrollTop()
      if(scrollValue>411) {
        $(".left").css("position", "fixed");
        $(".left").css("top", "0");
        $(".left").css("left", "0");
        $(".center").css("margin-left", "17%")
      } else {
        $(".left").css("position", "relative");
        $(".center").css("margin-left", "2%")
      }
    })
  })

import recent from '../middleLeftCategory/recent'
import popular from '../middleLeftCategory/popular'
import {createNamespacedHelpers} from 'vuex'

const newsRoom = createNamespacedHelpers('newsRoom')
const trend = createNamespacedHelpers('trend')
const inside = createNamespacedHelpers('inside')

export default {
  components: {
    recent : recent,
    popular : popular,
  },

  data() {
    return {
      test : "../assets/mainBanner1.png",
      moveCategory : 0,
      moveContent : 0,
    }
  },

  computed:{
    ...newsRoom.mapState([
      'recentNewsRoomData',
    ]),
    ...trend.mapState([
      'listTrendData'
    ]),
    ...inside.mapState([
      'recentInsideData',
    ]),
    // allData() {
    //   const {
    //     inside: {recentInsideData},
    //     newsRoom: {recentNewsRoomData},
    //     trend: {listTrendData},
    //   } = this.$store.state
    //   // , ...recentNewsRoomData,
    //   return {...recentInsideData, ...listTrendData}
    // },
  },

  methods: {
    ...newsRoom.mapActions([
      'getNewsRoom'
    ]),

    ...trend.mapActions([
      'getTrend'
    ]),

    ...inside.mapActions([
      'getInside'
    ]),

    moveRecent() {
      this.moveCategory = 1
    },

    movePopular() {
      this.moveCategory = 2
    },

    moveHome() {
      this.moveContent = 0
    },

    moveCategoryPage() {
      this.moveContent = 1
    },

    changeView() {
      // 내용 2*2 or 일자로 보이게 만드는 함수
    }

  },
  mounted() {
    this.getNewsRoom()
    this.getTrend()
    this.getInside()
  }
}

</script>

<style scoped>

/* TOP css */
.TopBox {
  width: 100%;
  height: 60px;
  background: #2699fb;
  display: flex;
}
.mainLogo {
  height: 50px;
  margin-top: 2%;
}
.TopBoxLeft {
  width: 85%;
  margin-top: 1%;
}
.TopBoxLeft a{
  color: white;
  font-size: 19px;
  padding-left: 5%;
}

.TopBoxRight {
  width: 15%;

}

.TopBoxRight img {
  margin-top: 7%;
  padding-left: 5%;
  margin-left: 2%;
  width: 21%;
  opacity: 0.7;
}

/* mainBanner css */

.mainBox {
  width: 85%;
  height: 450px;
  border-bottom: 1px solid #d5d6dc;
  margin-left: 8%;
  margin-top: 1%;
}
.mainBox img {
  width: 100%;
  height: 400px;
}

/* middle css */

.middle {
  margin-top: 2%;
  display: flex;
  flex-direction: row;
}

/* middle left css */

.left {
  width: 15%;
  height: 750px;
  background: #e9ecf1;
}
.leftTitle {
  width: 100%;
  height: 50px;
  background: #0076e5;
}
.leftTitle p {
  padding-top: 10px;
  font-size: 19px;
  font-weight: bold;
  color: white;
  text-align: center;
}
.leftCategory {
  width: 100%;
  display: flex;
}

.leftCategory img {
  margin-top: 30px;
  margin-left: 40%;
  width: 20%;
}

.detailCategory {
  padding-bottom: 5%;
  margin-left: 4%;
  width: 45%;
  border-bottom: 3px solid #d5d6dc;
}

.categoryContent {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
}

/* middle center css */
.center {
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 1000px;
  margin-left: 2%;
}

/* 메인페이지 최신글 2개 */
.mainContent {
  width: 100%;
  border-bottom: 1px solid #d5d6dc;
  margin-top: 2%;
  padding-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
}

.choiceContentView {
  display: flex;;
}

.choiceView {
  margin-top: 3%;
  margin-left: 80%;
}
.choiceView img{
  width: 15%;
}

.movePageMargin {
  margin-top: 2%;
}

/* 최신글 제목 */
.movePage {
  color: black;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
}
/* 가로로 2개씩 보이기 위해 만든 div박스 */
.contentBox {
  width: 45%;
  margin-right: 2%;
}

.contentImg {
  width : 100%;
}
.contentTitle {
  font-size: 21px;
  font-weight: bold;
}

.gray {
  color: #d5d6dc;
  font-size: 13px;
}
.blue {
  color: #0076e5;
  font-size: 14px;
}
/* p { margin: 0px 0px 0px 0px; line-height: 120%; } */
</style>
