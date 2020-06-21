<template>
  <div id="ALL">

    <div class="TopBox">
      <router-link to="/"><img class="mainLogo" src="../assets/mainLogo.png"></router-link>
    </div>

    <div class="mainBox">
      asdgaewr
    </div>
    <div class="gd">

      <div class="left">
        asdfasdfewr
      </div>

      <div class="center">

      </div>

    </div>

    <div class="category">
      <router-link to="inside">inside 카테고리</router-link>
      <router-link to="newsRoom">newsRoom 카테고리</router-link>
      <router-link to="trend">trend 카테고리</router-link>
    </div>

    <router-view></router-view>
  </div>

</template>

<script>
import $ from 'jquery'

  $(document).ready(function(){
    $(window).scroll(function(){
      var scrollValue = $(this).scrollTop()
      if(scrollValue>300) {
        console.log(scrollValue)
        $(".left").css("position", "fixed");
        $(".left").css("top", "0");
        $(".left").css("left", "0");
        $(".center").css("margin-left", "15%")
      } else {
        $(".left").css("position", "relative");
        $(".center").css("margin-left", "0%")
      }
    })
  })

export default {
}

</script>

<style scoped>

.TopBox {
  width: 100%;
  height: 60px;
  background: #2699fb;
}
.mainLogo {
  height: 50px;
  margin-top: 0.5%;
}

.mainBox {
  height: 300px;
  background: yellow;
}
.gd {
  display: flex;
  flex-direction: row;
}

.left {
  width: 15%;
  height: 600px;
  background: red;
}
.center {
  width: 70%;
  height: 2000px;
  background: #2699fb;
}

.category {
  display: flex;
  flex-direction: column;
}
</style>
