<template>
  <div class="">
    newsRoom
  </div>

</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const newsRoom = createNamespacedHelpers('newsRoom')

export default {
  computed:{
    ...newsRoom.mapState([
      'newsRoomData',
    ])
  },

  methods: {
    ...newsRoom.mapActions([
      'getNewsRoom'
    ])
  },

  mounted() {
    this.getNewsRoom()
  },

}
</script>

<style scoped>
</style>
