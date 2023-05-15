import { Next } from 'koa';
declare const userValidator: (ctx: any, next: Next) => Promise<void>;
declare const checkUserExist: (ctx: any, next: Next) => Promise<any>;
declare const encryptPassword: (ctx: any, next: Next) => Promise<void>;
declare const verifyLogin: (ctx: any, next: Next) => Promise<any>;
declare function checkPassword(ctx: any, next: Next): Promise<void>;
export { userValidator, checkUserExist, encryptPassword, verifyLogin, checkPassword };
