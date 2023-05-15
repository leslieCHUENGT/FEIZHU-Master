"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../app/app.config');
const { createUser, getUerInfo, updateById } = require('./user.service');
class UserController {
    async register(ctx, next) {
        const { name, password } = ctx.request.body;
        try {
            const user = await createUser(name, password);
            ctx.body = '注册成功';
        }
        catch (err) {
            console.log(err);
            ctx.body = '注册失败';
        }
    }
    async login(ctx, next) {
        const { name } = ctx.request.body;
        try {
            const _a = await getUerInfo({ name }), { password } = _a, res = __rest(_a, ["password"]);
            ctx.body = {
                code: 200,
                message: '用户登录成功',
                result: {
                    token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
                },
            };
        }
        catch (err) {
            console.error('用户登录失败', err);
        }
    }
    async changePassword(ctx, next) {
        const id = ctx.state.user.id;
        const password = ctx.request.body.password;
        try {
            await updateById({ id, password });
            ctx.body = {
                code: 200,
                message: '修改密码成功',
            };
        }
        catch (err) {
            console.error('修改密码失败', err);
            ctx.body = {
                code: 500,
                message: '修改密码失败',
            };
        }
    }
}
module.exports = new UserController();
//# sourceMappingURL=user.controller.js.map