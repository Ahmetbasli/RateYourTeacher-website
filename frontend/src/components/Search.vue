<template>
  <div class="background-image">
    <div class="hero ">
      <h4 class="header">Find a teacher</h4>
      <div class="searchBar" :style="borderRadius">
        <div class="searchBarSearch">
          <div class="searchBarIcon">
            <v-icon medium>
              {{ searchIcon }}
            </v-icon>
          </div>
          <input
            class="searchBarInput"
            v-model="searchText"
            type="text"
            placeholder="Teacher Name"
          />
        </div>
        <div v-if="matches.length" class="searchBarSperatorLine"></div>
        <div :key="match._id" v-for="match in matches.slice(0, 5)">
          <div @click="goTeacherPage(match._id)" class="searchResults">
            <div class="searchResultsIcon">
              <v-icon medium>
                {{ searchResultsIcon }}
              </v-icon>
            </div>
            <h2 class="search-teacher-name">{{ match.name }}</h2>

            <h6 class="search-teacher-field">{{ match.facultyName }}</h6>
            <h2 class="search-teacher-universityName">
              ({{ match.commenters.length }})
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { mdiSchool } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
      borderRadius: {},
      searchIcon: mdiMagnify,
      searchResultsIcon: mdiSchool,
    };
  },
  props: {
    teachers: Array,
  },
  computed: {
    matches: function() {
      let filtred = this.teachers.filter((teacher) => {
        return teacher.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
      if (!this.searchText) filtred = [];
      return filtred;
    },
  },

  methods: {
    goTeacherPage(id) {
      router.push({ path: `/teacher/${id}` });
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .hero {
    height: 480px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .background-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../images/pexels-cottonbro-4769486.jpg");
    background-size: cover;
  }
  .header {
    margin-top: -25px;
    font-size: 40px;
    color: rgb(236, 232, 226);
    justify-self: center;
    align-self: start;
    grid-row: 2/ 3;
    grid-column: 1/ 2;
  }

  .searchBar {
    position: sticky;
    top: 70px;
    border-radius: 20px;
    width: 90%;
    background-color: white;
    margin-top: 60px;
    margin-left: 10px;
    margin-right: 10px;

    justify-self: center;
    align-self: start;
    grid-row: 2/ 4;
    grid-column: 1/ 2;
    box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.4);
    z-index: 400;
  }
  .searchBarSperatorLine {
    margin: 0px 30px;
    background: lightgray;
    height: 2px;
  }
  .searchBarInput {
    margin-left: 10px;
    font-size: 18px;
    outline: none;
  }
  .searchBarSearch {
    padding: 10px 10px;
    display: flex;
    align-items: center;
  }

  .searchBar:focus {
    outline: none;
  }

  .searchBar .searchResults {
    height: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
    /* box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.4); */
    border-radius: 12px;
    background-color: white;
    color: black;
    cursor: pointer;
    display: grid;
    grid-column: 1fr;
    grid-row: 1fr 1fr;
    z-index: 999;
  }
  .searchResults:hover {
    background-color: whitesmoke;
  }
  .search-teacher-name {
    margin-left: 50px;
    font-size: 18px;
    font-family: Georgia, sans-serif;
    grid-row: 1/ 2;
    grid-column: 1/ 2;
    justify-self: start;
    align-self: start;
  }
  .search-teacher-field {
    grid-row: 2/ 3;
    grid-column: 1/ 3;
    margin-left: 20px;
    font-size: 16px;
    justify-self: start;
    align-self: center;
    color: gray;
  }
  .search-teacher-universityName {
    grid-row: 1/ 3;

    font-size: 16px;
    justify-self: end;
    align-self: center;
    color: gray;
    margin-right: 20px;
  }
  .searchResultsIcon {
    grid-row: 1/ 3;
    grid-column: 1/ 2;
    align-self: start;
    justify-self: start;
    margin-left: 10px;
  }
}

@media only screen and (min-width: 768px) {
  .hero {
    height: 750px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .background-image {
    padding-top: 1000px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../images/pexels-cottonbro-4769486.jpg");
    background-size: cover;
    grid-column: 1/ 1;
    grid-row: 1/ 3;
  }
  .header {
    margin-top: -25px;
    font-size: 40px;
    color: rgb(236, 232, 226);
    justify-self: center;
    align-self: start;
    grid-row: 2/ 3;
    grid-column: 1/ 1;
  }

  .searchBar {
    border-radius: 12px;

    height: 50px;
    width: 570px;
    background-color: rgb(236, 232, 226);
    margin-top: 60px;
    justify-self: center;
    align-self: start;
    grid-row: 2/ 4;
    grid-column: 1/ 1;
    box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.4);
  }

  .searchBar input {
    padding-left: 20px;
    height: 50px;
    width: 570px;
    font-size: 18px;
    outline: none;
  }
  .searchBar:focus {
    outline: none;
  }

  .searchBar .searchResults {
    height: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    background-color: rgb(236, 232, 226);
    color: black;
    cursor: pointer;
    display: grid;
    grid-column: 1fr;
    grid-row: 1fr 1fr;
  }
  .searchResults:hover {
    background-color: rgb(194, 182, 165);
  }
  .search-teacher-name {
    margin-left: 40px;
    font-size: 22px;
    font-family: Georgia, sans-serif;
    grid-row: 1/ 2;
    grid-column: 1/ 2;
    justify-self: start;
    align-self: start;
  }
  .search-teacher-field {
    grid-row: 2/ 3;
    grid-column: 1/ 3;
    margin-left: 40px;
    font-size: 18px;
    justify-self: start;
    align-self: center;
    color: gray;
  }
  .search-teacher-universityName {
    grid-row: 1/ 3;

    font-size: 16px;
    justify-self: end;
    align-self: center;
    color: gray;
    margin-right: 20px;
  }
}
</style>
