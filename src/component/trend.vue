<template>
  <div class="">
    <p class="category">TREND</p>
    <div class="mainContent">
        <div class="contentBox" v-for="(listTrendData, index) in listTrendData">
          <a href="#"><img :src="listTrendData[7]" class="contentImg"></a>
          <p class="gray"><span class="blue">TREND</span> {{listTrendData[4]}}</p>
          <p class="contentTitle">{{listTrendData[3]}}</p>
          <p class="content">{{listTrendData[6]}}...</p>
        </div>
    </div>
  </div>


</template>

<script>

import {createNamespacedHelpers} from 'vuex'
const trend = createNamespacedHelpers('trend')

export default {
  computed:{
    ...trend.mapState([
      'listTrendData',
    ])
  },

  methods: {
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
