<template>
  <div>
    <van-nav-bar
      @click-left="$router.push('/home/profile')"
      left-arrow
      title="账号登录"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="用户名"
        placeholder="请输入账号"
        :rules="rules.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px">
        <van-button color="#21b97a" block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { getLogin } from "@/api/login";
import { Toast } from "vant";
import { getUser } from "@/api/user";
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
          },
          {
            // pattern: /[a-zA-Z][a-zA-Z0-9_]{5,8}/,
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
          },
          {
            // pattern: /[a-zA-Z][a-zA-Z0-9_]{5,8}/,
          },
        ],
      },
    };
  },

  methods: {
    async onSubmit() {
      try {
        const res = await getLogin(this.user);
        // console.log(res.data.body.token);
        this.$store.commit("setUserToken", res.data.body.token);
        // const res1 = await getUser(user);
        // console.log(res1);
        this.$router.push("/home/profile");
      } catch (error) {
        // console.log(error);
        Toast.fail("账号或密码错误");
      }
    },
  },
};
</script>

<style scoped lang="less">
/deep/.van-field {
  width: 345px;
  height: 60px;
  line-height: 60px;
}
</style>
