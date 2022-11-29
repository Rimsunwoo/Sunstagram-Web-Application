import { createStore } from "vuex";
import postData from "@/assets/postData";
import axios from "axios";
export default createStore({
  state: {
    logedIn: false,
    logedInUser: "",
    postData: postData,
    step: "postPage",
    uploadData: {
      name: "aa",
      userImage: "",
      postImage: "",
      likes: 0,
      date: "",
      content: "",
      filter: "",
    },
  },
  getters: {},
  mutations: {
    login(state) {
      state.logedIn = true;
    },
    logout(state) {
      state.logedIn = false;
    },
    tryLogin(state, payload) {
      state.logedIn = true;
      state.logedInUser = payload;
      localStorage.setItem("logedInUser", JSON.stringify(state.logedInUser));
    },
    clickHome(state) {
      state.step = "postPage";
    },
    uploadImg(state, payload) {
      state.uploadData.postImage = payload;
      state.step = "filterPage";
    },
    filterChange(state, payload) {
      state.uploadData.filter = payload;
    },
    contentChange(state, payload) {
      state.uploadData.content = payload;
    },
    uploadPost(state) {
      let date = new Date();
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let month = date.getMonth();

      let day = date.getDate();

      state.uploadData.date = `${monthNames[month]}  ${day}`;
      state.postData.unshift(state.uploadData);
    },
    pageChange(state) {
      if (state.step == "filterPage") {
        state.step = "writePage";
      } else if (state.step == "writePage") {
        state.step = "postPage";
      }
    },
  },
  actions: {},
  modules: {},
});
