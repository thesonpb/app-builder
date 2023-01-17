import Base from "./Base";
import { Page as PageInterface } from "./interface";

class Page extends Base {
  createPage = (body: PageInterface) => this.apiPost("/api/page/create", body);

  getPageDetail = (id: number | string) =>
    this.apiGet(`/api/page/detail/${id}`);

  editPage = (body: PageInterface) =>
    this.apiPut(`/api/page/edit/${body.id}`, body);

  deletePage = (id: number | string) =>
    this.apiDelete(`/api/page/delete/${id}`);
}
export default new Page();
