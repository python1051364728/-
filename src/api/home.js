import axios from "@/utils/request";

// 获取轮播图
export const getSwiper = () =>
  axios({
    url: "/home/swiper",
  });

  // 获取租房小组
export const getGroups = () =>
  axios({
    url: "/home/groups",
  });
