<template>
  <div class="">
    <!-- <router-link to="/"><img class="mainLogo"  v-on:click="moveHome" src="../assets/mainLogo.png"></router-link> -->
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
