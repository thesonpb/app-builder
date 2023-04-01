import axios from "axios";
import Cookie from "js-cookie";
import { beUrl } from "../constants/baseUrl";

const token = Cookie.get("access_token");

export default axios.create({
  baseURL: beUrl,
  headers: token
    ? {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-type": "application/json",
      },
});
