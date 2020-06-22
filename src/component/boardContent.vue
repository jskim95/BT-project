<template>
  <div class="">
    {{num}}
    {{category}}
    <div class="" v-if="category == 'INSIDE'">
      <img :src="insideData[num][7]">
      {{insideData[num]}}
    </div>

    <div class="" v-if="category == 'NEWSROOM'">
      <img :src="newsRoomData[num][7]">
      {{newsRoomData[num]}}
    </div>

    <!-- <div class="" v-if="category == 'INSIDE'">
      {{insideData[num]}}
    </div> -->

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

</style>
