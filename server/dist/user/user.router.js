"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { register, login, changePassword } = require('./user.controller');
const UserRouter = require('koa-router');
const router = new UserRouter({ prefix: '/users' });
const { auth } = require('../auth/auth.middleware');
const { userValidator, checkUserExist, encryptPassword, verifyLogin, checkPassword } = require('./user.middleware');
router.post('/register', userValidator, checkUserExist, encryptPassword, register);
router.post('/login', userValidator, verifyLogin, login);
router.patch('/', auth, checkPassword, encryptPassword, changePassword);
router.get('/1', async (ctx, next) => {
    ctx.body = 'Hello, World!';
});
module.exports = router;
//# sourceMappingURL=user.router.js.map