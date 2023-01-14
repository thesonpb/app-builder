export interface Template {
  id: number;
  name: string;
  image: string;
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
