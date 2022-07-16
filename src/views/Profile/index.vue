<template>
  <div>
    <!-- 未登录 -->
    <div class="father" v-if="!user">
      <img src="./bg.png" alt="" />
      <div class="son">
        <!-- 头像 -->
        <div class="head">
          <img src="./avatar.png" alt="" />
        </div>
        <!-- 登录按钮 -->
        <div class="btn">
          <div>游客</div>
          <van-button
            @click="$router.push('/login')"
            class="loginBtn"
            type="primary"
            >去登录</van-button
          >
        </div>
      </div>
    </div>

    <!-- 已登录 -->
    <div class="father" v-else>
      <img src="./avatar11.png" alt="" />
      <div class="son">
        <!-- 头像 -->
        <div class="head">
          <img src="./avatar.png" alt="" />
        </div>
        <!-- 登录按钮 -->
        <div class="btn">
          <div>黑马好客VIP</div>
          <van-button @click="loginOut" class="loginBtn" type="primary"
            >退出</van-button
          >
        </div>
      </div>
    </div>

    <van-grid :column-num="3" route>
      <van-grid-item to="/favorate" icon="star-o" text="我的收藏" />
      <van-grid-item to="/rent" icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>

    <div class="ad">
      <img src="./join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getUser } from "@/api/user";
import { Dialog } from "vant";
export default {
  computed: {
    ...mapState(["user"]),
  },
  created() {},
  methods: {
    // async getUser() {
    //   const res = await getUser(this.user);
    //   console.log(res);
    // },
    async loginOut() {
      await Dialog.confirm({
        title: "提示",
        message: "是否退出？",
      });
      console.log("点击了退出");
      this.$store.commit("setUserToken", null);
    },
  },
};
</script>

<style scoped lang="less">
.father {
  position: relative;
  height: 300px;
  width: 375px;
  // text-align: center;
  font-size: 13px;
  // background-color: blue;
  img {
    width: 375px;
    height: 191px;
  }
  .son {
    position: absolute;
    bottom: 0;
    left: 13.5%;
    // margin-left: 50%;
    // margin-left: -30%;
    width: 278px;
    height: 165px;
    // box-shadow: 0px 0px 1px 1px #255;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    // background-color: #fff;
    .head {
      position: relative;
      left: 50%;
      margin-left: -35px;
      margin-top: -35px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      // background-color: red;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btn {
      margin-left: 100px;
      margin-top: 10px;
    }
  }
  .loginBtn {
    color: #fff;
    font-size: 12px;
    margin-top: 20px;
  }
}
.ad {
  text-align: center;
  margin-top: 10px;
  img {
    width: 92%;
  }
}
</style>
