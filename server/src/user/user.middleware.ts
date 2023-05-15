import { Next } from 'koa';
const bcrypt = require('bcryptjs');
const { getUerInfo } = require('./user.service');
const {
    userFormateError,
    userAlreadyExited,
    userRegisterError,
    userDoesNotExist,
    userLoginError,
    invalidPassword,
    samePassword
} = require('./user.ErrorMessage')

/**
 * 登录或注册时校验是否为空
 */
const userValidator = async (
    ctx: any,
    next: Next
) => {
    const { name, password } = ctx.request.body;
    // 检查密码是否为空
    if (!password) {
        console.error('密码为空', ctx.request.body);
        ctx.app.emit('error', userFormateError, ctx)
        return;
    }
    // 检查用户名是否为空
    if (!name) {
        console.error('用户名为空', ctx.request.body);
        ctx.app.emit('error', userFormateError, ctx)
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
            ctx.app.emit('error', userAlreadyExited, ctx)
            return;
        } else {
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
            ctx.app.emit('error', userDoesNotExist, ctx)
            return;
        }
        const isMatch = await bcrypt.compare(password, res.password);
        if (!isMatch) {
            ctx.app.emit('error', invalidPassword, ctx)
            return;
        }
        await next();
    } catch (err) {
        console.error(err);
        return ctx.app.emit('error', userLoginError, ctx);
    }
};

/**
 * 修改密码前判断密码是否一致
 */
async function checkPassword(ctx: any, next: Next) {
    const id = ctx.state.user.id;
    const res = await getUerInfo({ id }); // 通过id,获得用户信息
    const lastPassword = res.password; // 拿到用户的密码
    const newPassword = ctx.request.body.password; // 要修改的密码
    const isMatch = await bcrypt.compare(newPassword, lastPassword);
    console.log(isMatch)
    if (isMatch) {
        ctx.app.emit('error', {
            code: 400,
            message: '输入的密码与旧密码相同，请重新输入！'
        }, ctx);

        return;
    }
    await next();
}



export {
    userValidator,
    checkUserExist,
    encryptPassword,
    verifyLogin,
    checkPassword
};


