/**
 * 自定义错误提示信息
 */
module.exports = {
    userFormateError: {
      code: 400,
      message: '用户名或密码为空',
      result: ''
    },
    userAlreadyExited: {
      code: 409,
      message: '用户已经存在',
      result: ''
    },
    userRegisterError: {
      code: 500,
      message: '用户注册错误',
      result: ''
    },
    userDoesNotExist: {
      code: 404,
      message: '用户不存在',
      result: ''
    },
    userLoginError: {
      code: 401,
      message: '用户登录失败',
      result: ''
    },
    invalidPassword: {
      code: 401,
      message: '密码不匹配',
      result: ''
    },
    samePassword: {
        code:401,
        message:'前后密码一致,重新输入',
        result:''
    }
  };
  