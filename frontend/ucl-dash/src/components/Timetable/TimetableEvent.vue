<template>
  <div class="calendar-item-cont">
    <div class="top-text">
      <div class="type">
        Seminar
      </div>
      <div class="module-code">
        COMP0108
      </div>
    </div>
    <div class="module-name">
      Research Methods in Software Engineering
    </div>
    <div class="date">
      Monday 16th Nov
    </div>
    <div class="date">
      11:00 - 12:00
    </div>
    <div class="location">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="30" viewBox="0 0 21 30">
        <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7.5 -3)" fill="#c6b0bc"/>
      </svg>
      Gower Street (66-72) 01
    </div>
    <div class="professor">
      PETKE, Justyna (Dr)
    </div>
  </div>
</template>

<script>
export default {
  name: "TimetableEvent.vue"
}
</script>

<style scoped>
  .calendar-item-cont{
    width: 250px;
    height: 100%;
    /*background-color: #AC145A;*/
    /*border: 1px solid var(--secondary);*/
    border-right: 1px solid var(--secondary);
    /*border-left: 0 solid;*/
    border-bottom: 0px solid;
  }
  .top-text{
    margin: 10px;
  }
  .type{
    padding: 2px 10px;
    float: left;
    font: normal normal bold 14px/19px Segoe UI;
    background: var(--third) 0% 0% no-repeat padding-box;
    color: white;
    border-radius: 8px;
  }
  .module-code{
    color: var(--primary);
    text-align: right;
    font: normal normal normal 18px/24px Segoe UI;
  }
  .module-name{
    color: var(--primary);
    text-align: center;
    font: normal normal bold 20px/27px Segoe UI;
    margin: 10px 0px;
  }
  .date{
    color: var(--primary);
    text-align: center;
    font: normal normal normal 18px/24px Segoe UI;
  }
  .location{
    color: var(--primary);
    text-align: center;
    font: normal normal normal 18px/24px Segoe UI;
  }
  .location svg{
   align-content: center;
  }
  .professor {
    color: var(--primary);
    text-align: center;
    font: normal normal normal 18px/24px Segoe UI;
  }
</style>