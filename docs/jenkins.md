1. jenkins集成环境安装
  1.安装集成环境：https://market.aliyun.com/products/55530001/jxsc000096.html?spm=5176.204674.1085795.3.27853eadSZIeYB
  2.根据说明文档，进入http://47.100.188.220:8090/jenkins
  3.登陆阿里云控制台，链接密码635012，
  4.首次登陆控制台提示输入login和password，就使用我们更换阿里云系统盘时设置的login：root和密码：Ilove**92
  5.使用finalShell，主机为：47.100.188.220，端口22，用户名root，密码Ilove**92
  6.根据使用文档，查看jenkins的用户名为admin，密码自己看
  7.ok登陆成功
2. 配置jenkins
  1. 系统管理-系统设置
  2. 安装jdk提示需要oracle的账户,遂注册:wuyangjiacuo@163.com,Iam**92
  3. jdk选择安装jdk8,别名为jdk1.8
  4. maven选择3 .6.1,对应我开发的版本,name取为maven
  5. 点击创建新任务,取名task,选择构建一个maven项目