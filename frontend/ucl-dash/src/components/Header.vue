<script setup>
import Search from './Search.vue'

</script>

<template>
  <div class="header-cont">
    <div class="header-icon">
      <img src="./icons/LogoWhite.png">
    </div>
    <div class="search-cont">
      <Search />
    </div>
  </div>
</template>



<style scoped>
  .header-cont{
    width: 100%;
    background-color: var(--primary);
    padding: 15px;
  }
  .header-icon{
    width: 300px;
    float: left;
  }
  .header-icon img{
    width: 100%;
  }
  .search-cont{
    float:right;
    margin-right: 50px;
  }
</style>