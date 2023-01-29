import Base from "./Base";
import { LoginRequest, SignupRequest } from "./interface";
import Cookie from "js-cookie";

const catchError = (error: any) => {
  let message;
  //TODO: check mã lỗi và throw ra message
  switch (error.response.data.message) {
    case "Bad credentials":
      message = "Incorrect username or password!";
      break;
    default:
      break;
  }
  throw message;
};
const setToken = (token: any) => {
  if (token) {
    Cookie.set("access_token", token, {
      expires: 1 / 24,
      sameSite: "Lax",
    });
  } else {
    Cookie.remove("access_token");
  }
};
class Auth extends Base {
  login = (body: LoginRequest) => this.apiPost(`/api/auth/signin`, body);
  getTokenByUsernamePassword = async (data: LoginRequest) => {
    const res = await this.login(data).catch(catchError);
    setToken(res.token);
    this.getToken();
    return res;
  };

  signup = (body: SignupRequest) => this.apiPost(`/api/auth/signup`, body);

  logout = () => {
    localStorage.removeItem("user");
    setToken(null);
  };
}
export default new Auth();
