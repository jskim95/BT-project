<template>
  <div class="">
    inside
    {{insideData[0][3]}}
  </div>

</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const inside = createNamespacedHelpers('inside')

export default {
  computed:{
    ...inside.mapState([
      'insideData',
    ])
  },

  methods: {
    ...inside.mapActions([
      'getInside'
    ])
  },

  mounted() {
    this.getInside()
  },

}
</script>

<style scoped>
</style>
