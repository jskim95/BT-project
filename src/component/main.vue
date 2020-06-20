<template>
  <div class="">
    <div class="category">
      <router-link to="inside">inside 카테고리</router-link>
      <router-link to="newsRoom">newsRoom 카테고리</router-link>
      <router-link to="trend">trend 카테고리</router-link>
    </div>

    <router-view></router-view>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
.category {
  display: flex;
  flex-direction: column;
}
</style>
