<script setup>
import Header from '../components/Header.vue'
import Alert from "../components/Alert.vue";
import Profile from "../components/Profile.vue";
import Timetable from "../components/Timetable/Timetable.vue";
import UpcomingEvents from "./UpcomingEvents.vue";
import Notes from "./Notes.vue";

</script>
<template>
  <div>
    <Header />
    <div class="dash-cont">
    <Alert />
      <Profile />
      <Timetable />

      <UpcomingEvents />
      <Notes />
    </div>
  </div>
</template>

<style scoped>
  .dash-cont{
    display: flex;
    margin: 20px 50px;
    flex-wrap: wrap;
    justify-content: center;

  }
  .events-notes{
    display: flex;
    margin: 0 50px;
  }

</style>