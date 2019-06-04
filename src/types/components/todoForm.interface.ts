// todoForm.Data 参数类型
export interface TodoFormData {
  componentName: string
}
export interface RuleForm {
  projectId: number,
  ownerId: number,
  remark: string,
  importance: number,
  content: string,
  qq: string,
  wechat: string,
  createTime: string,
  updateTime: string
}

export interface Rules {
  content: any[],
  remark: any[]
}