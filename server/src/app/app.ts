const Koa = require('koa');
const cors = require('koa-cors');
const useRouter = require('../user/user.router')
const avatarRouter = require('../avatar/avatar.router')
const { koaBody } = require('koa-body')
const errHandler = require('./app.middleware')
const { ALLOW_ORIGIN } = require('./app.config')


const app = new Koa()

app.use(koaBody())

app.use(cors({
    origin: ALLOW_ORIGIN, // 允许跨域的源，* 代表所有源
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
/**
 * 启用路由
 */
app.use(useRouter.routes())
app.use(avatarRouter.routes());

/**
 * 监听错误
 */
app.on('error', errHandler)


module.exports = app