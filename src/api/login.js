import axios from "@/utils/request";

export const getLogin = (data) =>
  axios({
    url: "/user/login",
    method: "POST",
    data,
  });
