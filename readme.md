# 项目目录
```js
|- src
    |- app
        |-  database
           |- mysql.ts
        |- app.config.ts
        |- app.middleware.ts
        |- app.ts
    |- user
        |- user.controller.ts
        |- user.ErrorMessage.ts
        |- user.middleware.ts
        |- user.model.ts
        |- user.router.ts
        |- user.service.ts
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
- MVC项目架构搭建，职责分离
- 自定义封装中间件，细腻处理后端安全以及功能实现
  - 封装bcryptjs加密中间件，实现防止被截获明文密码
  - 封装校验请求中间件，实现前后端校验
  - 封装错误处理中间件，利用洋葱模型，实现统一错误管理
- JEST测试开发，实现高效构建

# 不足之处
- 对TS的使用处于初级阶段
- 部分功能还在编写中...



