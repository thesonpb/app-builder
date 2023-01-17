import axios from "axios";
import Cookie from "js-cookie";

const token = Cookie.get("access_token");

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: token
    ? {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-type": "application/json",
      },
});
