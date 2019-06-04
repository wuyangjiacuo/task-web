// main.Data 参数类型
export interface MainData {
  userInfo: UserInfo
}

interface UserInfo {
  name: string
}

// VUEX main.State 参数类型
export interface MainState {
  main: MainData
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

