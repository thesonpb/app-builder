import Base from "./Base";
import { Page as PageInterface } from "./interface";

class Page extends Base {
  createPage = (body: PageInterface) => this.apiPost("/api/page/create", body);

  getPageDetail = (id: number | string) =>
    this.apiGet(`/api/page/detail/${id}`);

  getPagePrivacy = (id: number | string) =>
    this.apiGet(`/api/page/detail-privacy/${id}`);

  getPageListUser = (id: number | string) =>
    this.apiGet(`/api/page/detail-list-user/${id}`);

  getPageJson = (userName: string, pageName: string) =>
    this.apiGet(`/api/page/get-page-json/${userName}/${pageName}`);

  getListCurrentPageName = () =>
    this.apiGet(`/api/page/get-list-current-page-name`);

  getListCurrentPage = () => this.apiGet(`/api/page/get-list-current-page`);

  getListPublicPage = (params: any) =>
    this.apiGet(`/api/page/get-list-public-page`, params);

  updatePageJson = (body: any) =>
    this.apiPut(`/api/page/update-json/${body.id}`, body.page);

  updatePagePrivacy = (body: any) =>
    this.apiPut(`/api/page/update-privacy/${body.id}`, body.page);

  updatePageListUser = (body: any) =>
    this.apiPut(`/api/page/update-list-user/${body.id}`, body.listUser);

  editPage = (body: PageInterface) =>
    this.apiPut(`/api/page/edit/${body.id}`, body);

  deletePage = (id: number | string) =>
    this.apiDelete(`/api/page/delete/${id}`);
}
export default new Page();
