<template>
  <div class="">

    <div class="" v-if="category == 'INSIDE'">
      <p class="title">{{insideData[num][3]}}</p>
      <p class="day">PUBLISHED {{insideData[num][4]}} · UPDATED {{insideData[num][4]}}</p>
      <img class="pic" :src="insideData[num][7]">
      <p class="content">{{insideData[num][6]}}</p>
    </div>

    <div class="" v-if="category == 'NEWSROOM'">
      <p class="title">{{newsRoomData[num][3]}}</p>
      <p class="day">PUBLISHED {{newsRoomData[num][4]}} · UPDATED {{newsRoomData[num][4]}}</p>
      <img class="pic" :src="newsRoomData[num][7]">
      <p class="content">{{newsRoomData[num][6]}}</p>
    </div>

    <div class="" v-if="category == 'TREND'">
      <p class="title">{{trendData[num][3]}}</p>
      <p class="day">PUBLISHED {{trendData[num][4]}} · UPDATED {{trendData[num][4]}}</p>
      <img class="pic" :src="trendData[num][7]">
      <p class="content">{{trendData[num][6]}}</p>
    </div>

  </div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const newsRoom = createNamespacedHelpers('newsRoom')
const trend = createNamespacedHelpers('trend')
const inside = createNamespacedHelpers('inside')

export default {
  props:{
    num:{
      type: Number,
    },
    category: {
      type : String,
    },
  },
  computed:{
    ...inside.mapState([
      'insideData',
    ]),
    ...newsRoom.mapState([
      'newsRoomData',
    ]),
    ...trend.mapState([
      'trendData',
    ]),

  },
  data() {
    return {
    }
  },

  methods: {
  },

  mounted() {
  },

}
</script>

<style scoped>
.title {
  font-size: 30px;
}
.day {
  color: #aaa;
  font-size: 13px;
}
.pic {
  width: 70%;
  margin-left: 15%;
}
.content {
  margin-top: 3%;
  font-size: 14px;
}
</style>
