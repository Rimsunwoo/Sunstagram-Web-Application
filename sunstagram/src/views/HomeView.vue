<template>
  <div class="height-box">
    <Login v-if="$store.state.logedIn == false" />
    <div class="header-box" v-if="$store.state.logedIn == true">
      <div class="header">
        <ul class="header-button-left">
          <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
          <li @click="clickNext">{{ currentBtn }}</li>
        </ul>
        <img
          src="https://fontmeme.com/permalink/221108/b1e1b2f19c2fd3c17248f0d531eaa9f0.png"
          class="logo"
        />
      </div>
    </div>
    <Container v-if="$store.state.logedIn == true" />

    <div class="footer" v-if="$store.state.logedIn == true">
      <div class="footer-button">
        <div>
          <i class="fa-solid fa-house" @click="$store.commit('clickHome')"></i>
        </div>
        <div>
          <input @change="fileUpload" type="file" id="file" class="inputfile" />
          <label for="file" class="input-plus"
            ><i class="fa-regular fa-square-plus fa-lg"></i
          ></label>
        </div>
        <div>
          <router-link to=""
            ><i class="fa-solid fa-user-large"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "../components/Container.vue";
import Login from "../components/Login.vue";
export default {
  components: {
    Login,
    Container,
  },
  data() {
    return {
      currentBtn: "next",
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("logedInUser")) != null) {
      this.$store.commit("login");
    } else if (JSON.parse(localStorage.getItem("logedInUser")) == null) {
      this.$store.commit("logout");
    }
    console.log(JSON.parse(localStorage.getItem("logedInUser")));
  },
  methods: {
    fileUpload(e) {
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      this.$store.commit("uploadImg", url);
    },
    clickNext() {
      if (this.$store.state.step == "filterPage") {
        this.$store.commit("pageChange");
        this.currentBtn = "upload";
      } else if (this.$store.state.step == "writePage") {
        this.$store.commit("uploadPost");
        this.$store.commit("pageChange");
        this.currentBtn = "next";
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  height: 35px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header-box {
  position: sticky;
  z-index: 2;
  top: 0;
}
.header {
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  padding-bottom: 8px;
  display: block;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 15px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 15px;
}

.footer {
  width: 100%;
  max-width: 460px;
  padding-bottom: 10px;
  position: fixed;
  bottom: 0;
  background-color: whitesmoke;
}

.footer-button {
  display: flex;
  justify-content: space-around;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}
.logo {
  width: 100px;
}
i {
  color: black;
}
</style>
