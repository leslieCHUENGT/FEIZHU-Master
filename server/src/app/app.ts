const Koa = require('koa');
const cors = require('koa-cors');
const Router= require('../user/user.router')
const { koaBody } = require('koa-body')
const errHandler = require('./app.middleware')
const { ALLOW_ORIGIN } = require('./app.config')
import { Context, Next } from "koa";

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
app.use(Router.routes())
/**
 * 监听错误
 */
app.on('error', errHandler)


module.exports = app