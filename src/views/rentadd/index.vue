<template>
  <div class="app">
    <van-nav-bar @click-left="$router.push('/home/star')" fixed left-arrow title="发布房源"></van-nav-bar>
    <van-cell class="fangyuan" title="房源信息"></van-cell>
    <van-cell title="小区名称" is-link value="请输入小区名称" />

    <van-cell-group class="shurukuang">
      <van-field v-model="value" label="租金" placeholder="请输入租金/月" />
      <div class="txt">￥/月</div>
    </van-cell-group>

    <van-cell-group class="shurukuang">
      <van-field
        v-model="value1"
        label="建筑面积"
        placeholder="请输入建筑面积"
      />
      <div class="txt">㎡</div>
    </van-cell-group>

    <van-cell title="户型" is-link value="请选择" />

    <van-cell title="所在楼层" is-link value="请选择" />

    <van-cell title="朝向" is-link value="请选择" />

    <van-cell title="房屋标题" />

    <van-cell-group class="shurukuang">
      <van-field
        v-model="value2"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
      />
      <div class="txt">㎡</div>
    </van-cell-group>

    <van-cell title="房屋图像" />
    <van-uploader :after-read="afterRead" />

    <van-cell title="房屋配置" />
    <van-grid>
      <van-grid-item text="衣柜">
        <template #icon>
          <div class="iconfont icon-yigui"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="洗衣机">
        <template #icon>
          <div class="iconfont icon-xiyiji"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="空调">
        <template #icon>
          <div class="iconfont icon-kongtiao"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="天然气">
        <template #icon>
          <div class="iconfont icon-meiqitianranqi"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="冰箱">
        <template #icon>
          <div class="iconfont icon-bingxiang"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="暖气">
        <template #icon>
          <div class="iconfont icon-mingzhuangnuanqi"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="电视">
        <template #icon>
          <div class="iconfont icon-dianshi"></div>
        </template>
      </van-grid-item>
      <van-grid-item text="热水器">
        <template #icon>
          <div class="iconfont icon-reshuiqi"></div>
        </template>
      </van-grid-item>
    </van-grid>

    <van-cell title="房屋描述" />
    <van-field
      style="height: 200px"
      v-model="message"
      rows="1"
      autosize
      type="textarea"
      placeholder="请输入房屋描述信息"
    />

    <van-tabbar class="btn" v-model="active">
      <van-button class="btn1" type="default">取消</van-button>
      <van-button class="btn1" type="primary">提交</van-button>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      value1: "",
      value2: "",
    };
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
};
</script>

<style scoped lang="less">
.app {
  padding-bottom: 50px;
}
.fangyuan {
  color: #21b97a;
}
.btn {
  display: flex;
  justify-content: space-between;
  .btn1 {
    flex: 1;
  }
}
.shurukuang {
  display: flex;
  align-items: center;
  .txt {
    width: 45px;
    font-size: 14px;
    color: #888;
    text-align: center;
  }
}
</style>
