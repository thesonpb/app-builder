declare const permissionArray: ["view", "edit"];
export declare type Perrmissions = (typeof permissionArray)[number];

export interface UserInterface {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  photos: string;
  cover: string;
}

export interface SuccessLogin {
  token: string;
  type: string;
  id: number;
  userName: string;
  roles: Array<string>;
}

export interface SignupRequest {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface Page {
  id?: number;
  userId?: number;
  name?: string;
  json?: string;
  localUrl?: string;
  remoteUrl?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface Component {
  id: number;
  name: string;
  isContainer: boolean;
  icon: any;
  renderItem: any;
}
export interface GroupComponent {
  id: number;
  groupName: string;
  components: Array<Component>;
}
