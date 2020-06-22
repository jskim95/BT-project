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

      </div>
    </div>

    <div class="mainBox">
      <img src='../assets/mainBanner1.png'>
    </div>
    <!-- {{allData[0][3]}}<br>
    {{allData[1][3]}}<br>
    {{allData[2][3]}}<br>
    {{allData[3][3]}}<br>
    {{allData[4][3]}}<br>
    {{allData[5][3]}}<br>
    {{allData[6][3]}}<br>
    {{allData[7][3]}}<br>
    {{allData[8][3]}}<br>
    {{allData[9][3]}}<br> -->


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

          <div class="movePageMargin">
            <router-link class="movePage" to="inside" >INSIDE</router-link>
          </div>
          <div class="mainContent inside">
            <div class="contentBox" v-for="(recentInsideData, index) in recentInsideData">
              <img :src="contentImg[index]" class="contentImg">
              <p class="gray"><span class="blue">INSIDE</span> {{recentInsideData[4]}}</p>
              <p class="contentTitle">{{recentInsideData[3]}}</p>
              <p>{{recentInsideData[6]}}...</p>
            </div>
          </div>

          <div class="movePageMargin">
            <router-link class="movePage" to="newsRoom">NEWSROOM</router-link>
          </div>
          <div class="mainContent newsRoom">
            <div class="contentBox" v-for="(recentNewsRoomData, index) in recentNewsRoomData">
              <img :src="contentImg[index]" class="contentImg">
              <p class="gray"><span class="blue">NEWSROOM</span>  {{recentNewsRoomData[4]}}</p>
              <p class="contentTitle">{{recentNewsRoomData[3]}}</p>
              <p>{{recentNewsRoomData[6]}}...</p>
            </div>
          </div>

          <div class="movePageMargin">
            <router-link class="movePage" to="trend">TREND</router-link>
          </div>

          <div class="mainContent trend">

            <div class="contentBox" v-for="(listTrendData, index) in listTrendData">
              <img :src="contentImg[index]" class="contentImg">
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
      contentImg : ["http://blog.sinsiway.com/newuploads/2020/06/1-1.png"]
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
    allData() {
      const {
        inside: {recentInsideData},
        newsRoom: {recentNewsRoomData},
        trend: {listTrendData},
      } = this.$store.state
      // , ...recentNewsRoomData,
      return {...recentInsideData, ...listTrendData}
    },
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
  width: 50%;
  margin-top: 1%;
}
.TopBoxLeft a{
  color: white;
  font-size: 19px;
  padding-left: 5%;
}

/* mainBanner css */

.mainBox {
  width: 70%;
  height: 340px;
  border-bottom: 1px solid #d5d6dc;
  margin-left: 17%;
  margin-top: 1%;
}
.mainBox img {
  width: 100%;
  height: 300px;
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
  height: 700px;
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
  width: 50%;
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
