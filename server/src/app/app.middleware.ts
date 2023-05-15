/**
 * 错误处理中间件
 */
const errHandler = (err: any, ctx: any) => {
  let status = 500;
  switch (err.code) {
    case 400:
      status = 400; // Bad Request
      break;
    case 401:
      status = 401; // Unauthorized
      break;
    case 404:
      status = 404; // Not Found
      break;
    case 409:
      status = 409; // Conflict
      break;
    default:
      status = 500; // Internal Server Error
  }
  ctx.status = status;
  ctx.body = err;
};



module.exports = errHandler;
