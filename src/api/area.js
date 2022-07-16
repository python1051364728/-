import axios from "@/utils/request";

// 获取城市列表数据
export const getCity = (level) =>
  axios({
    url: "/area/city",
    method: "GET",
    params: {
      level,
    },
  });

// 获取热门城市
export const getHot = (level) =>
  axios({
    url: "/area/hot",
    method: "GET",
  });
