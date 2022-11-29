<template>
  <div class="container">
    <img
      class="logoImg"
      src="https://fontmeme.com/permalink/221108/b1e1b2f19c2fd3c17248f0d531eaa9f0.png"
      alt=""
    />
    <form class="loginForm" action="">
      <input
        class="loginId"
        type="text"
        required
        placeholder="Phone number, email or username"
        v-model="loginData.userId"
      />
      <input
        class="loginPw"
        type="password"
        required
        placeholder="Password"
        v-model="loginData.userPw"
      />
      <input
        class="loginBtn"
        type="submit"
        @click.prevent="clickLogin"
        value="log in"
      />
    </form>
    <div class="spanBox">
      <span>Forgot your login details? </span>
      <span>Get help logging in.</span>
    </div>
    <div class="googleBox">
      <hr style="border: 1px solid black; width: 80%; opacity: 0.1" />
      <a class="loginGoogle" href="#">Log in with Google</a>
    </div>
    <span class="failMsg" v-if="idFail == true"
      >Sorry, your ID was incorrect.</span
    >
    <span class="failMsg" v-if="pwFail == true"
      >Sorry, your Password was incorrect.
    </span>
    <router-link class="signupBox" to="/join">
      <span>Don't have an account? <strong> Sign up</strong></span>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loginData: {
        userId: "",
        userPw: "",
      },
      idFail: false,
      pwFail: false,
    };
  },
  methods: {
    clickLogin() {
      axios.post("/login", this.loginData).then((a) => {
        if (a.data.message == "idFail") {
          this.idFail = true;
          this.pwFail = false;
        } else if (a.data.message == "pwFail") {
          this.pwFail = true;
          this.idFail = false;
        } else if (a.data.message == "success") {
          this.loginData.userPw = a.data.encryptedPw;
          this.$store.commit("tryLogin", this.loginData);
        }
      });
    },
  },
};
</script>

<style>
body {
  height: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}
.logoImg {
  margin-bottom: 60px;
}
.loginId,
.loginPw {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  margin-top: 10px;
  background-color: whitesmoke;
  border-style: none;
}
.loginBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-style: none;
  width: 300px;
  height: 40px;
  background-color: steelblue;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
  color: white;
}
.loginForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.spanBox {
  font-size: 10px;
  margin-bottom: 10px;
}
.loginGoogle {
  margin-top: 20px;
  color: steelblue;
  text-decoration-line: none;
}
::placeholder {
  opacity: 0.9;
}
.googleBox {
  margin-bottom: 20px;
}
.signupBox {
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 460px;
  display: flex;
  justify-content: center;
  padding: 30px 0px;
  position: fixed;
  bottom: 0;
  text-decoration: none;
  color: black;
}
.failMsg {
  color: red;
}
</style>
