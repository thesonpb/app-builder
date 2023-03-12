import Base from "./Base";

class ImageFile extends Base {
  uploadImage = (body: any) => this.apiPost("/api/upload/image", body);
}

export default new ImageFile();
