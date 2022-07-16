<template>
  <div class="app">
    <!-- 轮播图 -->
    <van-swipe class="lunbo" :autoplay="3000">
      <van-swipe-item class="lun" v-for="(image, index) in images" :key="index">
        <img v-lazy="baseURL + image.imgSrc" />
      </van-swipe-item>
    </van-swipe>

    <!-- 搜索框 -->
    <van-search
      background="transparent"
      class="sear"
      v-model="value"
      show-action
      label
      placeholder="请输入搜索关键词"
    >
      <template #label>
        北京<van-icon @click="$router.push('/city')" name="arrow-down" />
      </template>
      <template #action>
        <van-icon name="map-marked" />
      </template>
    </van-search>

    <!-- 中间导航 -->
    <van-grid>
      <van-grid-item to="/home/list" icon="wap-home" text="整租" />
      <van-grid-item to="/home/list" icon="friends" text="合租" />
      <van-grid-item icon="map-marked" text="地图找房" />
      <van-grid-item to="/rentadd" icon="gold-coin" text="去出租" />
    </van-grid>

    <!-- 租房小组 -->
    <van-cell class="xiaozu" title="租房小组" value="更多" />
    <van-grid direction="horizontal" :column-num="2">
      <van-grid-item
        v-for="item in groups"
        :key="item.id"
        :icon="baseURL + item.imgSrc"
        :text="item.title"
      />
      <!-- <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" /> -->
    </van-grid>
  </div>
</template>

<script>
import { getSwiper, getGroups } from "@/api/home";
export default {
  data() {
    return {
      value: "",
      images: [
        // "https://img01.yzcdn.cn/vant/apple-1.jpg",
        // "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      groups: [],
      baseURL: "http://liufusong.top:8080",
    };
  },
  created() {
    this.getSwiper();
    this.getGroups();
  },
  methods: {
    // 获取轮播图数据
    async getSwiper() {
      const res = await getSwiper();
      // console.log(res.data.body);
      this.images = res.data.body;
    },
    // 获取租房小组数据
    async getGroups() {
      const res = await getGroups();
      // console.log(res.data.body);
      this.groups = res.data.body;
    },
  },
};
</script>

<style scoped lang="less">
.app {
  position: relative;
  .sear {
    width: 95%;
    position: absolute;
    top: 20px;
    left: 10px;
  }
}
.lun {
  width: 375px;
  height: 212px;
  img {
    width: 100%;
    height: 100%;
  }
}
.xiaozu {
  background-color: #eee;
}
</style>
