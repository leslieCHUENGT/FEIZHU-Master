import { Next } from 'koa';
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../app/app.config')
const { TokenExpiredError, JsonWebTokenError } = require('./auth.ErrorMessage')
/**
 * 身份认证
 */
const auth = async (ctx: any, next: Next) => {
    const { authorization } = ctx.request.header
    const token = authorization.replace('Bearer', '')

    try {
        // 验证token
        const user = jwt.verify(token, JWT_SECRET)
        ctx.state.user = user
    } catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token已过期', err);
                // 触发应用程序的全局错误事件
                return ctx.app.emit('error', TokenExpiredError, ctx)
            case 'JsonWebTokenError':
                console.error('无效的token', err);
                return ctx.app.emit('error', JsonWebTokenError, ctx)
        }
    }
    // 让当前中间件在等待下一个中间件/路由处理器执行完毕之前暂停执行
    await next() 
}

/**
 * 修改密码
 */

module.exports = {
    auth
}