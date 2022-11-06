<script setup>
import TimetableEvent from "./TimetableEvent.vue";
</script>

<template>
  <div class="timetable-cont">
    <TimetableEvent v-for="detail in timetable" :detail="detail"/>

  </div>
</template>

<script>
export default {
  name: "TimetableComponent",
  computed: {
    timetable() {
      const detail = this.$store.getters['app/studentTimetable']
      return detail;
    },
  }
}
</script>

<style scoped>
  .timetable-cont {
    display: flex;
    margin: 0 20px;
    float: left;
    min-width: 200px;
    height: 248px;
    background-color: white;
    border: 1px solid var(--secondary);
    border-radius: 8px;
    overflow: hidden;
  }
</style>