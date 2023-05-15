"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('../user/user.router');
const { koaBody } = require('koa-body');
const errHandler = require('./app.middleware');
const { ALLOW_ORIGIN } = require('./app.config');
const app = new Koa();
app.use(koaBody());
app.use(cors({
    origin: ALLOW_ORIGIN,
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
app.use(Router.routes());
app.on('error', errHandler);
module.exports = app;
//# sourceMappingURL=app.js.map