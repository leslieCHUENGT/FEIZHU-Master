"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.verifyLogin = exports.encryptPassword = exports.checkUserExist = exports.userValidator = void 0;
const bcrypt = require('bcryptjs');
const { getUerInfo } = require('./user.service');
const { userFormateError, userAlreadyExited, userRegisterError, userDoesNotExist, userLoginError, invalidPassword, samePassword } = require('./user.ErrorMessage');
const userValidator = async (ctx, next) => {
    const { name, password } = ctx.request.body;
    if (!password) {
        console.error('密码为空', ctx.request.body);
        ctx.app.emit('error', userFormateError, ctx);
        return;
    }
    if (!name) {
        console.error('用户名为空', ctx.request.body);
        ctx.app.emit('error', userFormateError, ctx);
        return;
    }
    await next();
};
exports.userValidator = userValidator;
const checkUserExist = async (ctx, next) => {
    const { name } = ctx.request.body;
    try {
        const res = await getUerInfo({ name });
        if (res) {
            ctx.app.emit('error', userAlreadyExited, ctx);
            return;
        }
        else {
            await next();
        }
    }
    catch (err) {
        console.error(err);
        return ctx.app.emit('error', userRegisterError, ctx);
    }
};
exports.checkUserExist = checkUserExist;
const encryptPassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    ctx.request.body.password = hash;
    await next();
};
exports.encryptPassword = encryptPassword;
const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body;
    try {
        const res = await getUerInfo({ name });
        if (!res) {
            ctx.app.emit('error', userDoesNotExist, ctx);
            return;
        }
        const isMatch = await bcrypt.compare(password, res.password);
        if (!isMatch) {
            ctx.app.emit('error', invalidPassword, ctx);
            return;
        }
        await next();
    }
    catch (err) {
        console.error(err);
        return ctx.app.emit('error', userLoginError, ctx);
    }
};
exports.verifyLogin = verifyLogin;
async function checkPassword(ctx, next) {
    const id = ctx.state.user.id;
    const res = await getUerInfo({ id });
    const lastPassword = res.password;
    const newPassword = ctx.request.body.password;
    const isMatch = await bcrypt.compare(newPassword, lastPassword);
    console.log(isMatch);
    if (isMatch) {
        ctx.app.emit('error', {
            code: 400,
            message: '输入的密码与旧密码相同，请重新输入！'
        }, ctx);
        return;
    }
    await next();
}
exports.checkPassword = checkPassword;
//# sourceMappingURL=user.middleware.js.map