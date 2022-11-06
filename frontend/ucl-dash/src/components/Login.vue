<script setup>
import LoginHeader from '../components/LoginHeader.vue';
</script>

<template>
  <div class="login-cont">
    <div>
      <LoginHeader />
    </div>
    <div class="login-button-area">
      <a href="https://uclapi.com/oauth/authorise?client_id=1669290082760730.2277398299135449&state=IBHyZJcTW1MERJsVT7Y5CfTnwvjA204h">
        <button type="submit">
        Login Via UCL
      </button>
      </a>    
    </div>
  </div>

</template>

<style scoped>
.login-cont{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.login-button-area{
  flex: 1;
  width: 100%;
  height: 100%;
  background-image: url("../src/assets/dashWallpaper2.png");
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-button-area button {
  color: var(--primary);
  /*text-align: left;*/
  font: normal normal bold 30px Segoe UI;
  /*background-color: white;*/
  border: 1px solid var(--secondary);
  padding: 20px;
}
</style>