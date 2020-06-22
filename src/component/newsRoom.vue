<template>

  <div class="">
    <p class="category">NEWSROOM</p>

    <div class="mainContent" v-if="moveContentPage == 0">
        <div class="contentBox" v-for="(listNewsRoomData, index) in listNewsRoomData">
          <a href="#"><img :src="listNewsRoomData[7]" class="contentImg" v-on:click="getContent(listNewsRoomData[8], index)"></a>
          <p class="gray"><span class="blue">NEWSROOM</span> {{listNewsRoomData[4]}}</p>
          <p class="contentTitle">{{listNewsRoomData[3]}}</p>
          <p class="content">{{listNewsRoomData[6]}}...</p>
        </div>
    </div>

    <div class="" v-if="moveContentPage == 1">
      <board-content v-bind:num="num" v-bind:category="category"></board-content>
    </div>

  </div>

</template>

<script>
import boardContent from './boardContent'

import {createNamespacedHelpers} from 'vuex'
const newsRoom = createNamespacedHelpers('newsRoom')

export default {
  components: {
    boardContent : boardContent,
  },

  computed:{
    ...newsRoom.mapState([
      'listNewsRoomData',
    ])
  },

  data() {
    return {
      category : '',
      num : 0,
      moveContentPage:0
    }
  },

  methods: {
    getContent(category, index) {
      this.num = index
      this.category = category
      this.moveContentPage = 1
    },
  },

  mounted() {
  },

}
</script>

<style scoped>

.category {
  font-size: 19px;
  color: #666;
  font-weight: bold;
  border-bottom: 1px solid #d5d6dc;
  padding-bottom: 2%;
}

.mainContent {
  width: 100%;
  border-bottom: 1px solid #d5d6dc;
  margin-top: 2%;
  padding-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
}

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
.content {
  color: #aaa;
  font-size: 14px;
}

.gray {
  color: #d5d6dc;
  font-size: 13px;
}
.blue {
  color: #0076e5;
  font-size: 14px;
}
img:hover {
  opacity: 0.8
}
</style>
