<template>
  <div>
    <van-nav-bar
      @click-left="$router.push('/home/profile')"
      left-arrow
      title="房屋管理"
    />

    <van-empty
      class="custom-image"
      image="http://liufusong.top:8080/img/not-found.png"
      description
    >
      <template #description>
        <p style="color: black">
          您还没有房源，
          <a class="aaa" href="http://localhost:8090/rentadd#/rentadd">去发布房源</a>
          吧~
        </p>
      </template>
    </van-empty>

    <van-card
      v-for="(item, index) in houses"
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
import { postUserHouses, getUserHouses } from "@/api/user";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      houses: [],
    };
  },
  computed: {
  ...mapState(['user'])
},
  created() {
    this.postUserHouses()
    this.getUserHouses()
  },
  methods: {
    async postUserHouses() {
      const res = await postUserHouses();
    },
    async getUserHouses() {
      const res = await getUserHouses(this.user);
      console.log(res);
    },
  },
};
</script>

<style>
.custom-image .van-empty__image {
  width: 150px;
  height: 97px;
}
.aaa {
  color: #33be85;
}
</style>
