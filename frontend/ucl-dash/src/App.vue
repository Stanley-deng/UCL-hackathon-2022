<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <RouterView />
</template>

<style>
:root {

  /* Colors: */
  --third: #AC145A;
  --unnamed-color-ffffff: #FFFFFF;
  --secondary: #C6B0BC;
  --primary: #500778;
  --background-grey: #FAFAFA;

}
*{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  /*Move this later*/
  background-color: var(--background-grey) !important;
}


</style>
