<template>
  <div>
    <van-nav-bar
      @click-left="$router.push('/home/star')"
      left-arrow
      title="城市列表"
    />

    <van-index-bar >
      <div v-for="(item, index) in FirstPin" :key="index">
        <van-index-anchor :index="item" />
        <van-cell
          v-for="(itm, ind) in sortCityFn(item)"
          :key="ind"
          :title="itm.label"
        />
      </div>
    </van-index-bar>
    <!-- <van-index-bar v-for="(item, index) in FirstPin" :key="index">
      <van-index-anchor :index="item" />
      <van-cell
        v-for="(itm, ind) in sortCityFn(item)"
        :key="ind"
        :title="itm.label"
      />
    </van-index-bar> -->
  </div>
</template>

<script>
import { getCity, getHot } from "@/api/area";
export default {
  data() {
    return {
      FirstPin: [
        "热门城市",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
      citys: [],
      hotCitys: [],
    };
  },
  created() {
    this.getCity();
  },
  methods: {
    sortCityFn(val) {
      return this.citys.filter((item) => {
        return item.short.charAt(0).toUpperCase() === val;
      });
    },
    // 获取城市列表
    async getCity() {
      const res = await getCity(1);
      this.citys = res.data.body;
    },
  },
};
</script>

<style></style>
