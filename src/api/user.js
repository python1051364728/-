import axios from "@/utils/request";

export const getUser = () =>
  axios({
    url: "/user",
    method: "GET",
  });

// 获取查看收藏列表
export const getFavorites = () =>
  axios({
    url: "/user/favorites",
    method: "GET",
  });

// 发布房源 /user/houses
export const postUserHouses = (body) =>
  axios({
    url: "/user/houses",
    method: "POST",
    data: {
      body,
    },
  });

// 查看已发布的房源列表 /user/houses
export const getUserHouses = () =>
  axios({
    url: "/user/houses",
    method: "GET",
  });
