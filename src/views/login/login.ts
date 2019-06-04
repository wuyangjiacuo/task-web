import { Component, Vue, Watch } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { FormData } from '@/types/views/login.interface'
import LoginModule from '@/store'
// import {  } from "@/components" // 组件

@Component({})
export default class Login extends Vue {
  // Getter
  @Getter isLogin
    
  // Action
  @Action CHECK_LOGIN_STATE
  @Action LOGIN_THEN_GO_HOME

  // data
  form: FormData = {
    phone: '',
    password: ''
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    this.CHECK_LOGIN_STATE()
  }

  // 初始化函数
  init() {
    //
  }
  login() {
    this.LOGIN_THEN_GO_HOME(this.form)
  }
  // @Watch('isLogin')
  // onLoginStateChange(val: boolean, oldVal: boolean) {
  //   if (val) {
  //     this.$router.push('home');
  //   } else {

  //   }
  // }
}
