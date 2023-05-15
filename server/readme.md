# 使用 koa+ts 实现登录注册功能

##### 项目目录

```
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

main.ts

```

const app = require('./app/app')

const { APP_PORT } = require('./app/app.config')
import seq from './app/database/mysql'

app.listen(APP_PORT, () => {
    console.log(`服务器成功启动在${APP_PORT}端口上`);
})

seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err: any) => {
    console.log('数据库连接失败', err)
  })
```

.env

```
# 应用的配置
APP_PORT = 3000
# 数据库配置
MYSQL_HOST = localhost
MYSQL_PORT = 3306
MYSQL_USER = root
MYSQL_PWD = 123456
MYSQL_DB = feizhu
# CORS
 ALLOW_ORIGIN = *
# 密钥
 JWT_SECRET = PUBLIC_KEY=LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUEwUlhySnZrNVlmcGo0aUhRUjIxVgp4N3MyQTV6VGszRlk1azluTVpJVitYbDNueWQ1SGtUSWtOZFluSUJueG0rVmtrd2ZwSlZvL09BbUYwT1FLd25ICkIvSTZjUTFLV2pmK002YXQvdTR0bm83d2FzOFFiQ0ZiREVqYXBvaURDUXF2Z0ZmYjdoM1FXeVlzemZZbnVkUlEKdDlSOTJVTUExeU0waXBUYVVvdG04Y21FeWFrNjFpZ2dyTG13SmxyNS85SE1uSFJIaXQvMUFlVHo5bHkvcnlCOAo1SS96Q3VjL2hjRmRhU0Y3NUFBa0lyRllMazl3dVZ5VWJGMFUwa1h2Zjg1eW5BeGx4a2NocThNRVJZTFhIaktvClhQeG44OGprb3JRV0ZIOElMV1NsL1BFbnRiOVp3U1hKODF4MTJhNi9UbDlTdEdsU2pLZXpVcW03eHc2Y1JXdTUKL0RqdytCd0xSVS9MdlhLTDRBS3RqZUNONlhHbFNDRnVsL1I5UzcwRE1PemFhekc4NGxwbWNlOHdjbkh4RkgzUAp3YUdkb2V5Sld2eFRHRG16K3FaR2RWNlNKdFBHMEplNjg0cS9MdGx6cjN5S1dWVkljbmQ0SzFLcVpXRDdlcVpFCmFtOS9TYkdVS2tVQlRIK1llNUpIYkdQRlJLaktzck5YVzVIMHdMU05SMjBOTExnZll5bDdEamdqd0YvRGNsbjIKOUk2YlN6SDlFaHBVSkRTRnp2TXIwb29kU0xwREhmYm01d1hzUWlNakJXakpiVUJEVUZ0SkFlbWl6UHBVWG4ybApzZENac3R6ejNoSEFKWnNkSzN6N1pyc01HemgzSTA5OTFmb0prRHRQb0crTi9sL01lL09jSy9VRWpmbXlwL2FuCnBXQ0RCRk9rWjByWDZmcVB3NFUzbllNQ0F3RUFBUT09Ci0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=


```

app.ts

```
const Koa = require('koa');
const userRouter = require('../user/user.router')
const {koaBody } = require('koa-body')
const  errHandler = require('./app.middleware')
const app = new Koa()

app.use(koaBody())
/**
 * 启用路由
 */
app.use(userRouter.routes())


module.exports = app
```

app.config.ts

```
const dotenv = require('dotenv')

dotenv.config()

module.exports = process.env
```
mysql.ts
```


const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PWD,
    MYSQL_DB,
  } = require('../app.config')

  const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
    host: MYSQL_HOST,
    dialect: 'mysql',
  })

  
export default seq
```
user.router.ts

```
import { Context, Next } from 'koa';
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../app/app.config')
const { createUser, getUerInfo } = require('./user.service')


class UserController {
    /**
     * 用户注册
     */
    async register(ctx: any, next: Next) {
        const { name, password } = ctx.request.body;
        try {
            const user = await createUser(name, password);
            ctx.body = '注册成功';
        } catch (err) {
            console.log(err);
            ctx.body = '注册失败';
        }
    }



    /**
     * 用户登录
     */
    async login(ctx: any, next: Next) {
        // ctx.body = '登录成功'
        const { name } = ctx.request.body
        try {
            // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
            const { password, ...res } = await getUerInfo({ name })
        
            ctx.body = {
              code: 200,
              message: '用户登录成功',
              result: {
                token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
              },
            }
          } catch (err) {
            console.error('用户登录失败', err)
          }

    }

}


module.exports = new UserController()
```

user.controller.ts
```
import { Context, Next } from 'koa';
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../app/app.config')
const { createUser, getUerInfo } = require('./user.service')


class UserController {
    /**
     * 用户注册
     */
    async register(ctx: any, next: Next) {
        const { name, password } = ctx.request.body;
        try {
            const user = await createUser(name, password);
            ctx.body = '注册成功';
        } catch (err) {
            console.log(err);
            ctx.body = '注册失败';
        }
    }



    /**
     * 用户登录
     */
    async login(ctx: any, next: Next) {
        // ctx.body = '登录成功'
        const { name } = ctx.request.body
        try {
            // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
            const { password, ...res } = await getUerInfo({ name })
        
            ctx.body = {
              code: 200,
              message: '用户登录成功',
              result: {
                token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
              },
            }
          } catch (err) {
            console.error('用户登录失败', err)
          }

    }

}


module.exports = new UserController()
```
user.middleware.ts

```
import {  Next } from 'koa';
const bcrypt = require('bcryptjs');
const { getUerInfo } = require('./user.service');
const { userFormateError, userAlreadyExited, userRegisterError, userDoesNotExist, userLoginError, invalidPassword } = require('./user.ErrorMessage') 

/**
 * 登录或注册时校验是否为空
 */
const userValidator = async (
  ctx: any,
  next: Next
)=> {
  const { name, password } = ctx.request.body;
  // 检查密码是否为空
  if (!password) {
    console.error('密码为空', ctx.request.body);
    ctx.body = userFormateError;
    return;
  }
  // 检查用户名是否为空
  if (!name) {
    console.error('用户名为空', ctx.request.body);
    ctx.body = userFormateError;
    return;
  }
  await next();
};

/**
 * 注册时检查用户是否已经存在
 */
const checkUserExist = async (
  ctx: any,
  next: Next
) => {
  const { name } = ctx.request.body;
  try {
    const res = await getUerInfo({ name });
    if (res) {
      ctx.body = userAlreadyExited;
      console.log( ctx.body)
      return;
    }else{
        await next();
    }
    
  } catch (err) {
    console.error(err);
    return ctx.app.emit('error', userRegisterError, ctx);
  }
};

/**
 * 创建前对密码进行加密
 */
const encryptPassword = async (
  ctx: any,
  next: Next
) => {
  const { password } = ctx.request.body;

  const salt = bcrypt.genSaltSync(10);
  // hash保存的是 密文
  const hash = bcrypt.hashSync(password, salt);

  ctx.request.body.password = hash;

  await next();
};

/**
 * 登录时校验账号密码是否正确
 */
const verifyLogin = async (
  ctx: any,
  next: Next
) => {
  const { name, password } = ctx.request.body;
  try {
    const res = await getUerInfo({ name });
    if (!res) {
      ctx.body = userDoesNotExist;
      return;
    }
    const isMatch = await bcrypt.compare(password, res.password);
    if (!isMatch) {
      ctx.body = invalidPassword;
      return;
    }
    await next();
  } catch (err) {
    console.error(err);
    return ctx.app.emit('error', userLoginError, ctx);
  }
};

export {
  userValidator,
  checkUserExist,
  encryptPassword,
  verifyLogin,
};


```
user.service.ts

```
import User from './user.model'

class UserService {
    
/**
 * 创建用户
 */
    async createUser (name: string, password: string){
        
        const res = await User.create({ name, password })
        
    }

/**
 * 查询用户信息
 */
    async getUerInfo({ id, name, password}) {
        const whereOpt = {}
    
        id && Object.assign(whereOpt, { id })
        name && Object.assign(whereOpt, { name })
        password && Object.assign(whereOpt, { password })
    
        const res = await User.findOne({
          attributes: ['id', 'name', 'password'],
          where: whereOpt,
        })
    
        return res ? res.dataValues : null
      }


      
}


module.exports = new UserService()
```
app.middleware.ts
```
/**
 * 错误处理中间件
 */
const errHandler = (err: any, ctx: any) => {
  let status = 500;
  switch (err.code) {
    case 400:
      status = 400; // Bad Request
      break;
    case 401:
      status = 401; // Unauthorized
      break;
    case 404:
      status = 404; // Not Found
      break;
    case 409:
      status = 409; // Conflict
      break;
    default:
      status = 500; // Internal Server Error
  }
  ctx.status = status;
  ctx.body = err;
};



module.exports = errHandler;

```

user.ErrorMessage.ts
```
/**
 * 自定义错误提示信息
 */
module.exports = {
    userFormateError: {
      code: 400,
      message: '用户名或密码为空',
      result: ''
    },
    userAlreadyExited: {
      code: 409,
      message: '用户已经存在',
      result: ''
    },
    userRegisterError: {
      code: 500,
      message: '用户注册错误',
      result: ''
    },
    userDoesNotExist: {
      code: 404,
      message: '用户不存在',
      result: ''
    },
    userLoginError: {
      code: 401,
      message: '用户登录失败',
      result: ''
    },
    invalidPassword: {
      code: 401,
      message: '密码不匹配',
      result: ''
    }
  };
  
```


