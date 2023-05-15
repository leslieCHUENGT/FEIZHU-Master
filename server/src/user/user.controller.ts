import { Context, Next } from 'koa';
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { JWT_SECRET } = require('../app/app.config')
const { createUser, getUerInfo, updateById } = require('./user.service')


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
    /**
     * 修改密码 
     */
    async changePassword(ctx: any, next: Next) {
        const id = ctx.state.user.id  // 拿到用户的id
        const password = ctx.request.body.password // 获取用户修改的新密码
        try {
            await updateById({ id, password })
            ctx.body = {
                code: 200,
                message: '修改密码成功',
            }
        } catch (err) {
            console.error('修改密码失败', err)
            ctx.body = {
                code: 500,
                message: '修改密码失败',
            }
        }
    }
}


module.exports = new UserController()