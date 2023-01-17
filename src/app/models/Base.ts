import http from "../common/http-common";

class Base {
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
