"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../app/app.config');
const { TokenExpiredError, JsonWebTokenError } = require('./auth.ErrorMessage');
const auth = async (ctx, next) => {
    const { authorization } = ctx.request.header;
    const token = authorization.replace('Bearer ', '');
    try {
        const user = jwt.verify(token, JWT_SECRET);
        ctx.state.user = user;
    }
    catch (err) {
        switch (err.name) {
            case 'TokenExpiredError':
                console.error('token已过期', err);
                return ctx.app.emit('error', TokenExpiredError, ctx);
            case 'JsonWebTokenError':
                console.error('无效的token', err);
                return ctx.app.emit('error', JsonWebTokenError, ctx);
        }
    }
    await next();
};
module.exports = {
    auth
};
//# sourceMappingURL=auth.middleware.js.map