import httpCommon from "../common/http-common";
import axios from "axios";
import Cookie from "js-cookie";

let http = httpCommon;

class Base {
  getToken() {
    const token = Cookie.get("access_token");
    http = axios.create({
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
  }

  apiGet(url: string) {
    return http.get<any>(url).then((res) => res.data);
  }
  apiPost(url: string, body: any) {
    return http.post<any>(url, body).then((res) => res.data);
  }
  apiPut(url: string, body: any) {
    return http.put<any>(url, body).then((res) => res.data);
  }
  apiDelete(url: string) {
    return http.delete<any>(url).then((res) => res.data);
  }
}

export default Base;
