import Base from "./Base";

class User extends Base {
  getUserDetail = (id: number | string) =>
    this.apiGet(`/api/user/detail/${id}`);

  getListUser = (username: string) =>
    this.apiGet(`/api/user/get-list-user?username=${username || ""}`);

  updateAvatar = (photoUrl: any) => this.apiPut("/api/user/avatar", photoUrl);
  updateCover = (photoUrl: any) => this.apiPut("/api/user/cover", photoUrl);
}

export default new User();
