const { register, login, changePassword } = require('./user.controller')
const UserRouter = require('koa-router')
const router = new UserRouter({ prefix: '/users' })
const { auth } = require('../auth/auth.middleware')
const {
    userValidator,
    checkUserExist,
    encryptPassword,
    verifyLogin,
    checkPassword
} = require('./user.middleware')

import { Context, Next } from 'koa';
/**
 * 注册接口
 */
router.post('/register', userValidator, checkUserExist, encryptPassword, register)

/**
 * 登录接口
 */
router.post('/login', userValidator, verifyLogin, login)
/**
 * 修改密码接口
 */
router.patch('/', auth,checkPassword, encryptPassword, changePassword)


router.get('/1', async (ctx:any, next:Next ) => {
    // 处理 GET /users 请求
    ctx.body = 'Hello, World!';
});

module.exports = router
