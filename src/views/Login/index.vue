<template>
  <div class="login">
    <div class="top"></div>
    <div class="form">
      <div>
        <SvgIcon icon-class="username" class="icon" />
        <input
          type="text"
          placeholder="请输入账号"
          v-model="loginForm.username"
        />
      </div>
      <div>
        <SvgIcon icon-class="password" name="password" class="icon" />
        <input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        />
      </div>
    </div>
    <button class="login-btn" @click="fnLogin">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        captcha: "",
        loginFlag: "2",
        random: "",
        captchaImg: "",
      },
    };
  },
  methods: {
    async fnLogin() {
      let res = await this.$store.dispatch("login", this.loginForm);
      const { status, msg } = res;
      if (status == 200) {
        this.$message.success("登录成功");
        this.$router.push({ path: "/exam" });
      } else {
        this.$message.warning(msg);
      }
    },
  },
};
</script>

<style scoped lang="less">
.login {
  // background: #fff;
  height: 100vh;
  text-align: center;

  .top {
    height: 235px;
    background-size: contain;

    .logo {
      width: 163px;
      height: 58px;
      margin-top: 60px;
    }

    .tab {
      margin-top: 33px;
      display: flex;
      justify-content: space-between;
      padding: 0 68px;

      height: 25px;
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: center;
      color: #ffffff;
      line-height: 25px;
      text-shadow: 0px 4px 12px 0px rgba(132, 161, 201, 0.5);

      > div:nth-child(1) {
        &::after {
          content: "";
          width: 25px;
          height: 4px;
          background: #fcfdfe;
          border-radius: 4px;
          display: inherit;
          margin: 5px auto;
        }
      }

      > div:nth-child(2) {
        height: 22px;
        opacity: 0.65;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: center;
        line-height: 22px;
      }
    }
  }

  .form {
    > div {
      width: 305px;
      height: 42px;
      background: #fcfdfe;
      border: 1px solid #ebedf0;
      border-radius: 22px;
      box-shadow: 0px 4px 14px 0px rgba(151, 175, 209, 0.15);
      margin: 0 auto;
      margin-top: 20px;

      display: flex;
      align-items: center;
      padding-left: 25px;

      .app-svg-icon {
        margin-right: 10px;
        width: 14px;
        height: 18px;
      }

      > input {
        border: 0px;
        width: 80%;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #b4b7bc;
        background: #fcfdfe;
        line-height: 20px;
      }
    }
  }
  .login-btn {
    width: 305px;
    height: 44px;
    background: linear-gradient(136deg, #59a7ff 0%, #2d6eff);
    border-radius: 23px;
    border: 0px solid #fff;
    margin-top: 20px;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    line-height: 44px;
  }
}
</style>
