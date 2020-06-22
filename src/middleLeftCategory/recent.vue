<template>
  <div class="">

    <div class="recentData" v-for="(recentInsideData, index) in recentInsideData">
      <p class="blue">INSIDE</p>
      <p>{{recentInsideData[3]}}</p>
      <p class="blue">{{recentInsideData[4]}}</p>
    </div>

    <div class="recentData" v-for="(recentNewsRoomData, index) in recentNewsRoomData">
      <p class="blue">NEWSROOM</p>
      <p>{{recentNewsRoomData[3]}}</p>
      <p class="blue">{{recentNewsRoomData[4]}}</p>
    </div>

    <div class="recentData" v-for="(listTrendData, index) in listTrendData">
      <p class="blue">TREND</p>
      <p>{{listTrendData[3]}}</p>
      <p class="blue">{{listTrendData[4]}}</p>
    </div>

  </div>
</template>

<script>

import {createNamespacedHelpers} from 'vuex'

const newsRoom = createNamespacedHelpers('newsRoom')
const trend = createNamespacedHelpers('trend')
const inside = createNamespacedHelpers('inside')

export default {

  data() {
    return {
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
  },

  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>

.title {
  color: black;
  font-size: 16px;
}

.recentData {
  margin-top: 10%;
  padding-bottom: 8%;
  border-bottom: 1px solid #d5d6dc;
}
.blue {
  color: #0076e5;
  font-size: 12px;
}

p { margin: 5px 0px 0px 0px; line-height: 120%; }
</style>
