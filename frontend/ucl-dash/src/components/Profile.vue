<template>
  <div class="profile-cont">
    <div class="profile-picture-center">
      <div class="profile-picture">
        <img src="../assets/john.jpg">
      </div>
    </div>
    <div class="username">
      John Doe
    </div>
    <div class="course">
      MSc. Software Systems Engineering
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile.vue"
}
</script>

<style scoped>
  .profile-cont{
    width: 225px;
    height: auto;
    padding: 10px 30px 20px;
    background-color: white;
    border: 1px solid var(--secondary);
    border-radius: 8px;
  }
  .profile-picture{
    width: 100px;
    height: 100px;
    overflow: hidden;
    padding: 10px;
    /*display: flex;*/
    /*justify-content: center;*/
  }
  .profile-picture-center{
    display: flex;
    justify-content: center;
  }


  .profile-picture img{
    width: 100%;
    height: auto;
    border: 5px solid var(--primary);
    border-radius: 50%;
  }
  .username{
    color: var(--primary);
    text-align: center;
    font: normal normal bold 20px/27px Segoe UI;
  }
  .course{
    color: var(--primary);
    text-align: center;
    font: normal normal normal 20px/27px Segoe UI;
  }
</style>