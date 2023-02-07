import Base from "./Base";

class Proof extends Base {
  getNumberOfUsers = () => this.apiGet(`/api/public/number-of-users`);

  getNumberOfWebsites = () => this.apiGet(`/api/public/number-of-websites`);

  getNumberOfTemplates = () => this.apiGet(`/api/public/number-of-templates`);
}

export default new Proof();
