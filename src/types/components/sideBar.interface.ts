// sideBar.Data 参数类型
export interface SideBarData {
  componentName: string
}
export interface MenuItem {
  id?: number,
  label?: string,
  subMenu?: MenuItem
}
