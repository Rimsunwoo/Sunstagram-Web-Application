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
        placeholder="Phone number, email or username"
      />
      <input class="loginPw" type="password" placeholder="Password" />
      <router-link to="/" style="text-decoration-line: none">
        <input class="loginBtn" type="submit" value="log in" />
      </router-link>
    </form>
    <div class="spanBox">
      <span>Forgot your login details? </span>
      <span>Get help logging in.</span>
    </div>
    <hr style="border: 1px solid black; width: 80%; opacity: 0.1" />
    <a class="loginGoogle" href="#">Log in with Google</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        userId: "",
        userPw: "",
      },
    };
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
</style>
