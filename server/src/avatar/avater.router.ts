const UserRouter = require('koa-router')
import * as avatarController from './avatar.controller';
import { authGuard } from '../auth/auth.middleware';
import { avatarInterceptor, avatarProcessor } from './avatar.middleware';

const router = new UserRouter()

/**
 * 上传头像
 */
router.post(
  '/avatar',
  authGuard,
  avatarInterceptor,
  avatarProcessor,
  avatarController.store,
);

/**
 * 头像服务
 */
router.get('/users/:userId/avatar', avatarController.serve);

/**
 * 导出路由
 */
 module.exports = router
