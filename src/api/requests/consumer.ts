import { Ajax } from '../base';

class ConsumerServer {
  baseUrl: string;
  constructor(URL: string) {
    this.baseUrl = URL;
  }
  reg(obj: object) {
    return Ajax.post(this.baseUrl + '/register', obj)
  }
  login(obj: object) {
    return Ajax.post(this.baseUrl + '/login', obj);
  }
  isLogin() {
    return Ajax.get(this.baseUrl + '/loginState');
  }
  logOut() {
    return Ajax.put(this.baseUrl + '/logOut');
  }
  userInfo() {
    return Ajax.get(this.baseUrl + '/userInfo')
  }
}

export default ConsumerServer;