import { action, observable } from 'mobx';
interface IUser {
  name: string;
  age?: number | string;
  color?: string;
}
export default class UserStore {
  @observable name: string = '张三';
  @observable userList: IUser[] = [];
  constructor(
    initialState: any = {
      initName: 'detail-store',
      initUser: [{ name: '测试', age: 18, color: 'red' }],
    }
  ) {
    this.name = initialState.initName;
    this.userList = initialState.initUser;
  }
  @action
  public upadteName = (newName: string) => {
    this.name = newName;
  };
}
