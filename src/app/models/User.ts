import Base from "./Base";

class User extends Base {
  getUserDetail = (id: number | string) =>
    this.apiGet(`/api/user/detail/${id}`);

  getListUser = (username: string) =>
    this.apiGet(`/api/user/get-list-user?username=${username || ""}`);
}

export default new User();
