<script setup>
import TimetableEvent from "./TimetableEvent.vue";
</script>

<template>
  <div class="timetable-cont">
    <TimetableEvent />
    <TimetableEvent />
    <TimetableEvent />
    <TimetableEvent />

  </div>
</template>



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