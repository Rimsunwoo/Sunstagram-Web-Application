<template>
  <div class="sign-box">
    <img
      class="logoImg"
      src="https://fontmeme.com/permalink/221108/b1e1b2f19c2fd3c17248f0d531eaa9f0.png"
      alt=""
    />
    <form action="">
      <div class="input-box">
        <label for="sign-id">ID </label>
        <div>
          <input
            @change="checkedId = null"
            v-model="joinUser.id"
            type="text"
            required
            minlength="5"
            maxlength="12"
            id="sign-id"
          />
          <button @click.prevent="idCheck">중복확인</button>
        </div>
        <span v-if="checkedId == true" style="color: green"
          >Can Use this ID</span
        >
        <span v-if="checkedId == false" style="color: darkred"
          >Already exists</span
        >
      </div>
      <div class="input-box">
        <label for="sign-name">Name </label>
        <input v-model="joinUser.name" type="text" id="sign-name" />
      </div>
      <div class="input-box">
        <label for="sign-pw"> PassWord </label>
        <input
          type="password"
          v-model="joinUser.pw"
          id="sign-pw"
          minlength="5"
          maxlength="12"
        />
      </div>
      <div class="input-box">
        <label for="pw-confirm"
          >Confirm PassWord <span v-if="confirmPw == true">✅</span>
          <span v-if="confirmPw == false">❌</span>
        </label>
        <input
          @change="ConfirmPwFunc"
          type="password"
          v-model="joinUser.pwc"
          id="pw-confirm"
        />
      </div>

      <div class="submit-box">
        <span v-if="idMsg == false">Please Check 중복확인</span>
        <span v-if="pwMsg == false">Failed to Confirm PassWord!</span>
        <input
          type="submit"
          class="loginBtn signupBtn"
          value="Sign Up"
          @click.prevent="signupClick"
        />
      </div>
    </form>

    <div>
      <span>Already have an account?</span>
      <router-link class="login" to="/"><span> log in</span></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      joinUser: {
        id: "",
        pw: "",
        pwc: "",
        name: "",
      },
      checkedId: null,
      confirmPw: null,
      idMsg: true,
      pwMsg: true,
    };
  },
  methods: {
    idCheck() {
      axios.post("/join", this.joinUser).then((a) => {
        if (a.data == true) {
          this.checkedId = true;
        } else {
          this.checkedId = false;
        }
      });
    },
    ConfirmPwFunc() {
      if (this.joinUser.pw == this.joinUser.pwc) {
        this.confirmPw = true;
      } else {
        this.confirmPw = false;
      }
    },

    signupClick() {
      if (this.checkedId !== true) {
        this.idMsg = true;
      } else if (this.confirmPw !== true) {
        this.pwMsg = true;
      } else {
        axios.post("/signUp", this.joinUser).then((a) => {
          this.$router.push("/home");
        });
      }
    },
  },
};
</script>

<style>
.sign-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}
.input-box {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.submit-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login {
  font-size: 15px;
  color: steelblue;
  font-weight: 900;
  text-decoration-line: none;
}
.signupBtn {
  margin-bottom: 10px;
}
#sign-id {
  margin-right: 7px;
}
.hidden {
  display: none;
}
</style>
