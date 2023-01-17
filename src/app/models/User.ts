import Base from "./Base";

class User extends Base {
  getUserDetail = (id: number | string) =>
    this.apiGet(`/api/user/detail/${id}`);
}

export default new User();
