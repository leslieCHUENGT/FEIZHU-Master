# 项目目录
```js
|- src
    |- app
        |-  database
           |- mysql.ts
        |- app.config.ts
        |- app.middleware.ts
        |- app.ts
    |- user     # 每个功能模块坚持MVC架构
        |- user.controller.ts 
        |- user.ErrorMessage.ts
        |- user.middleware.ts
        |- user.model.ts
        |- user.router.ts
        |- user.service.ts
    |- auth
    |- file
    |- avatar
    |- like
    |- post
    |- tag
    |- comment
    |- main.ts
|- .env
|- tsconfigt.json
|- package.json
```
# 依赖包分析
-  "jsonwebtoken": jwt ，里面最主要涉及的就是 `sign` 标记 以及 `verify` 解析
-  "koa-bodyparser": 用于解析HTTP**请求体**中的JSON、文本、原始数据和URL编码数据,将这些数据解析为JavaScript对象 
-  "koa-compose": 则是将 koa/koa-router 各个中间件合并执行，结合 next() 就形成了洋葱式模型
-  "koa-router": 路由
-  "mysql2": 数据库 
-  "typescript": ts
-  "tsc-watch": 对 ts 文件进行编译以及监听、动态监测
-  "dotenv":结合 .env 文件 将数据库相关的信息，以及应用搭建的窗口号，放到 .env 文件里面，然后进行项目提交的时候注意不能够将 这部分个人信息提交到 公共平台上面，保护自己的隐私 

# 项目难点和亮点
## user模块
- `user.controller.ts `
  - 创建用户、用户登录(解构JWT)、修改密码
- `user.ErrorMessage.ts`
  - 每种错误对应的message
- `user.middleware.ts`
  - 封装bcryptjs加密中间件，实现防止被截获明文密码
  - 封装校验请求中间件，多种情况进行校验
- `user.service.ts`
  - id 、 name 、 password 
- `user.test.ts`
  - 测试创建用户接口
    - 创建用户时必须提供用户名
    - 创建用户时必须提供密码
    - 成功创建用户以后，响应状态码应该是 201
    - 响应里应该包含指定的属性
  - 测试用户帐户接口
    - 响应里应该包含指定的属性
    - 当用户不存在时，响应的状态码是 404
    - 更新用户时需要验证用户身份
    - 更新用户数据
## avatar模块
- `avatar.controller.ts `
  - store:上传文件函数。请求报文中获取信息，保存到数据库，作出响应。
  - serve:文件服务的函数。地址参数中的文件 ID 查找数据库中对应的文件信息，根据请求中的图像尺寸生成文件名和目录地址，最后返回文件给客户端。
  - metadata:获取文件信息的函数。数据库中查找对应的文件信息，然后返回该文件的部分信息给客户端。
- `avatar.middleware.ts`
  - 使用multer创建一个文件上传对象avatarUpload，并指定上传文件的目录（'uploads/avatar'）以及文件过滤器（avatarUploadFilter）；
  - 对avatarUpload对象调用.single('avatar')，从而定义了一个名为avatar的上传字段，并生成一个中间件avatarInterceptor，用于拦截客户端上传的文件；
  - 定义一个头像处理器avatarProcessor，该函数会在拦截到上传请求之后被调用。在该处理器中，首先获取客户端上传的文件信息file，然后根据该文件信息准备输出文件的路径filePath；
  - 接着，使用Jimp读取该文件，并对其进行三次尺寸调整操作。分别将其调整为256x256、128x128和64x64大小的图片，并设置图片质量为85%。最后将处理后的图片输出到指定路径下（包括-large、-medium和-small后缀），从而生成三张不同尺寸的缩略图；
- `avatar.service.ts`
  - id、 mimetype、 filename、size、userId
# 不足之处
- 对TS的使用处于初级阶段
- 部分功能还在编写中...



