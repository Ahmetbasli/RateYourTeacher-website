import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teachers: [],
    teacher: {},
    isAddCommentSectionOn: false,
  },
  mutations: {
    SET_TEACHERS(state, data) {
      state.teachers = data;
    },
    SET_TEACHERBYID(state, data) {
      state.teacher = data;
    },
    SET_ISADDCOMMENTSECTIONON(state) {
      console.log("togglemutation");

      state.isAddCommentSectionOn = !state.isAddCommentSectionOn;
    },
  },
  actions: {
    async fetchTeachers({ commit }) {
      const response = await axios.get("http://localhost:3000/post/all/json");
      commit("SET_TEACHERS", response.data);
    },
    async fetchTeacherById({ commit }, id) {
      const response = await axios.get(`http://localhost:3000/post/${id}`);
      commit("SET_TEACHERBYID", response.data);
    },
    toggleIsAddCommentSectionOn({ commit }) {
      console.log("toggle");
      commit("SET_ISADDCOMMENTSECTIONON");
    },
  },
  modules: {},
});
