<script setup>
import Header from '../components/Header.vue'
import Alert from "../components/Alert.vue";
import Profile from "../components/Profile.vue";
import Timetable from "../components/Timetable/Timetable.vue";
import UpcomingEvents from "./UpcomingEvents.vue";

</script>
<template>
  <div>
    <Header />
<!--    <Alert />-->

    <div class="dash-cont">
      <Profile />
      <Timetable />
<!--    </div>-->
<!--    <div class="events-notes">-->
      <UpcomingEvents />
    </div>
  </div>
</template>

<style scoped>
  .dash-cont{
    display: flex;
    margin: 20px 50px;
    flex-wrap: wrap;

  }
  .events-notes{

    display: flex;
    margin: 0 50px;
  }

</style>