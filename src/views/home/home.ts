import { Component, Vue, Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { HomeData } from '@/types/views/home.interface'
import { SideBar, TodoForm } from "@/components/index" // 组件


@Component({
  components: {
    SideBar,
    TodoForm
  }
})
export default class Home extends Vue {


  // data
  data: HomeData = {
    pageName: 'home'
  }
  userName: string = '';
  avatarUrl: string = '';

  @Getter addFormVisible;
  @Getter userInfo;
  @Getter showAddBtn;
  @Action TOGGLE_ADDFORM_VISIBLE;
  @Action SET_USER_INFO;
  @Action LOGOUT_THEN_GO_LOGIN;
  mounted() {
    this.SET_USER_INFO()
  }

  logOut() {
    this.$confirm('退出登录?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.LOGOUT_THEN_GO_LOGIN()
      // this.$router.push('/login')
    }).catch((e) => {
      console.log(e)
    })
  }
  showAddForm() {
    this.TOGGLE_ADDFORM_VISIBLE()
  }
  handleClose() {
    this.TOGGLE_ADDFORM_VISIBLE()
  }
  @Watch('userInfo')
  onUserInfoChange(val, oldVal) {
    this.avatarUrl = val.avatarUrl
    this.userName = val.name
  }
}
