<template>
  <div class="">
    trend
  </div>

</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const trend = createNamespacedHelpers('trend')

export default {
  computed:{
    ...trend.mapState([
      'trendData',
    ])
  },

  methods: {
    ...trend.mapActions([
      'getTrend'
    ])
  },

  mounted() {
    this.getTrend()
  },

}
</script>

<style scoped>
</style>
