<template>
  <div class="">

    <div class="popularData" v-for="(listTrendData, index) in listTrendData">
      <p class="blue">TREND</p>
      <p>{{listTrendData[3]}}</p>
      <p class="blue">{{listTrendData[4]}}</p>
    </div>

    <div class="popularData" v-for="(popularData, index) in popularData">
      <p class="blue">INSIDE</p>
      <p>{{insideData[index][3]}}</p>
      <p class="blue">{{insideData[index][4]}}</p>
    </div>

    <div class="popularData" v-for="(popularData, index) in popularData">
      <p class="blue">NEWSROOM</p>
      <p>{{newsRoomData[index][3]}}</p>
      <p class="blue">{{newsRoomData[index][4]}}</p>
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
      popularData: [1,2]
    }
  },

  computed:{
    ...newsRoom.mapState([
      'newsRoomData',
    ]),
    ...trend.mapState([
      'listTrendData'
    ]),
    ...inside.mapState([
      'insideData',
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

.popularData {
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
