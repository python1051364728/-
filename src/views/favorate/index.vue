<template>
  <div>
    <van-nav-bar
      @click-left="$router.push('/home/profile')"
      left-arrow
      title="收藏列表"
    />
    <van-card
      v-for="(item, index) in favorites"
      :key="index"
      :price="item.price"
      :desc="item.desc"
      :title="item.title"
      :thumb="baseURL + item.houseImg"
    >
      <template #tags>
        <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
import { getFavorites,  } from "@/api/user";
import { mapState } from "vuex";
export default {
  data() {
    return {
      favorites: [],
      baseURL: "http://liufusong.top:8080",
    };
  },
  created() {
    this.getFavorites();
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    // 查看收藏列表
    async getFavorites() {
      const res = await getFavorites(this.user);
      this.favorites = res.data.body;
      console.log(res);
    },
    // 发布房源
    async postUserHouses() {
      const res = await postUserHouses();
    },
    // 已发布的房源列表
    async getUserHouses() {
      const res = await getUserHouses();
    },
  },
};
</script>

<style></style>
