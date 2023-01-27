import Base from "./Base";
import { Page as PageInterface } from "./interface";

class Page extends Base {
  createPage = (body: PageInterface) => this.apiPost("/api/page/create", body);

  getPageDetail = (id: number | string) =>
    this.apiGet(`/api/page/detail/${id}`);

  getPageJson = (userName: string, pageName: string) =>
    this.apiGet(`/api/page/get-page-json/${userName}/${pageName}`);

  getListCurrentPageName = () =>
    this.apiGet(`/api/page/get-list-current-page-name`);

  updatePageJson = (body: any) =>
    this.apiPut(`/api/page/update-json/${body.id}`, body.page);

  editPage = (body: PageInterface) =>
    this.apiPut(`/api/page/edit/${body.id}`, body);

  deletePage = (id: number | string) =>
    this.apiDelete(`/api/page/delete/${id}`);
}
export default new Page();
