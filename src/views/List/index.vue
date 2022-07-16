<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      background="green"
      class="sear"
      v-model="value"
      show-action
      label="北京"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div>搜索</div>
      </template>
    </van-search>

    <!-- <van-dropdown-menu>
      <van-area title="标题" :area-list="areaList" />
    </van-dropdown-menu> -->
    <!-- <div class="tan">
      <van-cell is-link @click="showPopup">展示弹出层 </van-cell>
    </div>


    <van-popup
      get-container="van-cell"
      position="top"
      :style="{ height: '40%' }"
      v-model="show"
      >内容</van-popup
    > -->
    <div class="box">
      <div @click="cli1" class="box1">1<van-area title="标题" :area-list="areaList" /></div>
      <div class="box1">2</div>
      <div class="box1">3</div>
      <div class="box1">4</div>
    </div>

    <div></div>
    <!-- <van-cell is-link @click="showPopup">展示弹出层 </van-cell>
    <van-popup
      get-container="van-cell"
      position="top"
      :style="{ height: '40%' }"
      v-model="show"
    >
      <van-area  title="标题" :area-list="areaList" />
    </van-popup> -->

    <!-- <van-dropdown-menu>
      
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
      <van-area title="标题" :area-list="areaList" />
    </van-dropdown-menu> -->

    <!-- <van-row type="flex" justify="space-around">
      <van-col span="4">区域</van-col>
      <van-col span="4">方式</van-col>
      <van-col span="4">租金</van-col>
      <van-col span="4">筛选</van-col>
    </van-row> -->

    <!-- <van-popup
      get-container="sear"
      v-model="show"
      :style="{ height: '50%', width: '100%' }"
    >
      <van-cell title="北京"></van-cell>
    </van-popup> -->

    <hr />
    <!-- 房源信息 -->
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
import { getHouses } from "@/api/list";
import { areaList } from "@vant/area-data";
export default {
  data() {
    return {
      
      active: 0,
      areaList,
      // value1: 0,
      // value2: 'a',
      // value3: 0,
      // value4: 'a',
      // option1: [
      //   { text: '区域', value: 0 },
      //   { text: '新款商品', value: 1 },
      //   { text: '活动商品', value: 2 },
      // ],
      // option2: [
      //   { text: '方式', value: 'a' },
      //   { text: '好评排序', value: 'b' },
      //   { text: '销量排序', value: 'c' },
      // ],
      // option3: [
      //   { text: '租金', value: 0 },
      //   { text: '新款商品', value: 1 },
      //   { text: '活动商品', value: 2 },
      // ],
      // option4: [
      //   { text: '筛选', value: 'a' },
      //   { text: '好评排序', value: 'b' },
      //   { text: '销量排序', value: 'c' },
      // ],
      show: false,
      value: "",
      houses: [],
      baseURL: "http://liufusong.top:8080",
    };
  },
  created() {
    this.getHouses();
  },
  methods: {
    
    async getHouses() {
      const res = await getHouses();
      console.log(res);
      this.houses = res.data.body.list;
    },
    showPopup() {
      this.show = true;
    },
  },
};
</script>

<style scoped lang="less">
.van-col {
  font-size: 17px;
}
.box{
  display: flex;
  justify-content: space-around;
  .box1{
    background-color: pink;
  }
}
</style>
