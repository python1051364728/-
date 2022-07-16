import axios from "@/utils/request";

// 获取房屋
export const getHouses = () =>
  axios({
    url: "/houses",
  });

// /houses
