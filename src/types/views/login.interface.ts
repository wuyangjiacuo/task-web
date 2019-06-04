// login.Data 参数类型
export interface LoginData {
  pageName: string
}
export interface FormData {
  phone: string,
  password: string
  // [propName: string]: any; // 任意属性，确定属性和可选属性必须是任意属性的子集
}

// VUEX login.State 参数类型
export interface LoginState {
  login?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

