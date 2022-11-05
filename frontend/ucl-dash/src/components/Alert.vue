<template>
  <div class="center">
    <div class="alert-cont">
      <div class="alert-text">
      Leave your current location in 5 minutes to reach on time!!
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Alert.vue"
}
</script>

<style scoped>
  .alert-cont{
    float: left;
    height: auto;

  }
  .alert-text{
    width: auto;
    min-width: 200px;
    background-color: #FFB300;
    padding: 5px 10px;
    border: solid 2px #AC145A;
    font: normal normal normal 20px/27px Segoe UI;
    border-radius: 8px;
    color: white;
    font-weight: bold;
  }
  .center{
    margin: 15px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
</style>