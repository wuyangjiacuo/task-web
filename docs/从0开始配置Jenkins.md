1. 配置服务器[参考文档](https://blog.csdn.net/tomatocc/article/details/83930714)
  1. 镜像市场搜索`java`选择:`Java运行环境（Centos7 64 | JDK8|Tomcat8） V1.5.1`
  2. `root`设置密码为`Ilove**92`
  3. [下载Jenkins-Generic Java package(.war)](https://jenkins.io/download/)到本地
  4. final链接服务器主机为：47.100.188.220，端口22，用户名root，密码Ilove**92
  5. final上传刚才下载的jenkins.war,上传后会在bin目录下
  6. `cp`命令`cp jenkins.war /www/server/apache-tomcat-8.5.32/webapps/` `ls -a` 可以查看全部文件
  7. `cd www/server/apach-tomcate-8.5.32`
  8. `java -jar jenkins.war --httpPort=8090` 不加`--httpPort`会报错说`Address already in use`
  9. 得到一个自动生成的密码`0c5a23d199e14f0b8945a4d29b6b8eef`和路径`/root/.jenkins/secrets/initialAdminPassword`
2. 浏览器配置jenkins[参考文档](https://blog.csdn.net/qq_37185413/article/details/79555462)
  1. 浏览器打开`http://47.100.188.220:8090/jenkins`,键入密码后报错`Problem accessing /jenkins/. Reason:Not Found`,这是jenkins的一个bug
  2. 再次打开`http://47.100.188.220:8090`,不要访问jenkins路径,进入到的是安装插件页面
  3. 安装推荐的插件--静静等候
  4. 进入到创建管理员用户: admin,iamdudu92
  5. 进入jenkins管理页面-系统管理-插件管理-可选插件-安装rebuilder
  6. 系统管理-全局安全配置(因为误操作添加了一个用户导致admin都没有权限了,vim /root/.jenkins/config.cml,按i进入编辑模式,删除premission的所有内容,然后esc+:wq)
  7. 系统管理-全局工具配置,配置jdk8和maven3.6.1,应用并保存(服务器 cd ~ 查看readme.txt,输入env可以查看当前的环境变量,但还是没有找到java和maven的路径)安装jdk提示需要oracle的账户,遂注册:wuyangjiacuo@163.com,Iam**92
  8. 插件管理-安装Maven Integration
  9. 新建任务-maven项目
  10. 配置git地址;maven的POST steps选择调用顶层maven目标,目标是clean package,然后再添加一个执行shell脚本
  11. 启动任务报错说不能安装jdk,因为我用户名密码没配置好;`cd /root/.jenkins`,` rm -f hudson.tools.JDKInstaller.xml `删除jdk的密码配置
  12. 重启jenkins服务
3. 配置vue项目
  1. 安装插件NodeJS
  2. 全局工具配置,配置node的安装版本,随便弄
  3. 新建任务,构建一个自由风格的项目
  4. 选择丢弃旧的构建,保持天数和最大数随便弄
  5. 配置git地址
  6. 配置shell脚本
  7. 保存
  8. 启动报错：ERROR: Error fetching remote repo 'origin'，考虑是不是linux的SSH没有配置到git的原因[链接](https://www.cnblogs.com/feng0520/p/9070071.html)
  9. 服务器`ssh-keygen -t rsa`生成key,在`/root/.ssh/id_rsa.`
  10. key `ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC9S1BlVdvoIafNNAwSbq/FUpv3QY2nWeDO0vx+ma2u5q4ckIJLUBDO55y9WlA/qD3/RGXXDvkilzR0cMolWLNvdqRFnWDkebPFMGPl0GK+uqTjLLFCIsunVyiToL0EoVS5paAEdmRjYvm3xEh/h/YHzt4bGT2JD6lYAxK9lkAwqgKzuJtXtdedpnfTZWHZgvWZrByPd66inybw/JETurMfFNqtdxOnGTAy6fY2H5a/dw25+niJZavMwjDQV9qJB8uZmt7NYPxJjqmzlvhlOO0WZ396/7vUzmG5sPQMVgBiyMIcF9mteetvdT2gbc9xqNeh1EUuKcZ/+lA2z4aOgcnp root@iZplphsiwixglnZ`