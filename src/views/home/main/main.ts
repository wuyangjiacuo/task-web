import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { MainData } from '@/types/views/main.interface'
import { TodoList } from "@/components" // 组件

@Component({
  components: {
    TodoList
  }
})
export default class Main extends Vue {
  // Getter
  @Getter userInfo
    
  // Action
  @Action GET_USER_INFO_ASYN
  @Action CHECK_LOGIN_STATE

  // data
  activeName: string = 'first'
  src: string = ''

  created() {
    // console.log(this.main)
  }
    
  activated() {
    //
  }

  mounted() {
    //
    this.CHECK_LOGIN_STATE()
    this.GET_USER_INFO_ASYN()
  }

  // 初始化函数
  init() {
    //
  }
  handleClick(tab, event) {
    // console.log(tab)
  }
}
