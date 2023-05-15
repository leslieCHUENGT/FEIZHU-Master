"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('./app/app');
const { APP_PORT } = require('./app/app.config');
const mysql_1 = __importDefault(require("./app/database/mysql"));
app.listen(APP_PORT, () => {
    console.log(`服务器成功启动在${APP_PORT}端口上`);
});
mysql_1.default
    .authenticate()
    .then(() => {
    console.log('数据库连接成功');
})
    .catch((err) => {
    console.log('数据库连接失败', err);
});
//# sourceMappingURL=main.js.map