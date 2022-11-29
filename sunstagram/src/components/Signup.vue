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
          <input type="text" id="sign-id" />
          <button>중복확인</button>
        </div>
        <span class="hidden">Can Use this ID</span>
        <span class="hidden">Already exists</span>
      </div>
      <div class="input-box">
        <label for="sign-name">Name </label>
        <input type="text" id="sign-name" />
      </div>
      <div class="input-box">
        <label for="sign-pw">PassWord </label>
        <input type="password" id="sign-pw" />
      </div>
      <div class="input-box">
        <label for="pw-confirm">Confirm PassWord </label>
        <input type="password" id="pw-confirm" />
      </div>
    </form>
    <button class="loginBtn signupBtn">Sign Up</button>
    <div>
      <span>Already have an account?</span>
      <span class="login"> log in</span>
    </div>
  </div>
</template>

<script>
export default {};
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
.login {
  color: steelblue;
  font-weight: 900;
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
