import Base from "./Base";
import { Page as PageInterface } from "./interface";

class Page extends Base {
  createPage = (body: PageInterface) => this.apiPost("/api/page/create", body);

  clonePage = (id: any) => this.apiPost(`/api/page/clone/${id}`, {});

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

  getListSavedPage = () => this.apiGet(`/api/page/get-saved-list`);

  getListPublicPageOfUser = (id: any) =>
    this.apiGet(`/api/page/get-list-public-page-user/${id}`);

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

  getListShortcut = () => this.apiGet("/api/page/get-shortcut-list");

  deleteShortcut = (id: any) =>
    this.apiPost(`/api/page/add-to-shortcut-page/${id}/false`, {});

  addShortcut = (id: any) =>
    this.apiPost(`/api/page/add-to-shortcut-page/${id}/true`, {});

  renamePage = ({ id, body }: any) =>
    this.apiPut(`/api/page/rename/${id}`, body);
}
export default new Page();
