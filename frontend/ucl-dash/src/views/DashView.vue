<script setup>
import Dashboard from "../components/Dashboard.vue";
</script>

<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profile.vue",
  data() {
    return {
      fullname: "John Doe",
    };
  },
  mounted() {
    this.getDashboardDetail();
  },
  methods: {
    async getDashboardDetail() {
      try {
        const BODY_TOKEN = {
          token: process.env.VUE_APP_API_TOKEN
        };

        const result = await axios.post(
          "http://127.0.0.1:9090/api/dashboard",
          BODY_TOKEN
        );
        if (result.status === 200) {
          const DATA = result.data;
          console.log("data:", DATA);

          this.$store.dispatch("app/addDashboardDetail", DATA);
        }
      } catch (error) {
        console.log("Error DashView.vue.", error);
      }
    },
  },
};
</script>



<style scoped>
</style>