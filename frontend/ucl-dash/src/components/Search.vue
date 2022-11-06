<template>
  <div class="search-cont">
    <input
      type="text"
      placeholder="Search"
      v-model="searchTerm"
      @keyup.enter="performSearchOperation"
    />
    <select name="type" id="search-select" v-model="selectedOption">
      <option value="Staff" selected>Staff</option>
      <option value="Student">Students</option>
    </select>
    <div class="wrapper">
      <a href="#demo-modal" v-on:click="performSearchOperation">Search</a>
    </div>
    <div id="demo-modal" class="modal">
      <div class="modal__content">
        <ul class="search-results">
          <li v-for="result in searchResults">
            <div class="search-result-item">
              {{ result.name + ", " + result.department }}
              {{ result.email }}
            </div>
          </li>
        </ul>

        <a href="#" class="modal__close">&times;</a>
      </div>
    </div>
    <div class="logout-link">
      <a href="#"> Logout </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      selectedOption: "Staff",
      searchTerm: "",
      searchResults: [],
    };
  },
  methods: {
    async performSearchOperation() {
      try {
        console.log("123");
        var result;
        const BODY_TOKEN = {
          token: process.env.VUE_APP_API_TOKEN
        };

        if (this.selectedOption === "Student") {
          result = await axios.post(
            `http://127.0.0.1:9090/api/user?name=${this.searchTerm}`,
            BODY_TOKEN
          );
        } else {
          result = await axios.post(
            `http://127.0.0.1:9090/api/user/staff?searchTerm=${this.searchTerm}`,
            BODY_TOKEN
          );
        }
        console.log("result:", result);
        if (result.status === 200) {
          this.searchResults = result.data;
        }
      } catch (error) {
        console.log("Error performSearchOperation() Search.vue.", error);
      }
    },
  },
};
</script>

<style scoped>
.search-cont {
  /*float: left;*/
}
.search-cont input,
select {
  float: left;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.search-cont input[type="text"] {
  width: 201px;
  height: 40px;
  background: url(../assets/search.svg) no-repeat scroll 7px 7px white;
  padding: 10px 10px 10px 40px;
  color: black;
  border: 0px solid var(--secondary);
  border-radius: 8px 0 0 8px;
  font-size: 18px;
}
.search-cont select {
  vertical-align: top;
  width: auto;
  background: no-repeat scroll 7px 7px white;
  height: 40px;
  padding: 10px 10px 10px 10px;
  color: black;
  border: 0px solid var(--secondary);
  /*border-radius: 0px 8px 8px 0;*/
  font-size: 18px;
}
.wrapper {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper a {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  display: inline-block;
  text-decoration: none;
  padding: 9px;
  background-color: #fff;
  border-radius: 0px 8px 8px 0;
}

.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(77, 77, 77, 0.7);
  transition: all 0.4s;
}

.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}

.modal__footer {
  text-align: right;
}
a {
  color: #585858;
}
i {
  color: #d02d2c;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}
.search-result-item {
  padding: 10px;
  border-radius: 8px;
}
.search-results li:nth-child(odd) {
  background: #e1e1e1;
}
.logout-link {
  /*display: flex;*/
  margin-left: 5px;
  padding: 5px;
  float: right;
  text-color: white;
  font: normal normal normal 20px Segoe UI;
}
.logout-link a {
  color: var(--secondary);
}
</style>