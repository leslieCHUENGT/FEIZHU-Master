const { DataTypes } = require('sequelize');

import seq from '../app/database/mysql';

// 创建模型(Model feizhu -> 表 feizhu)
const User = seq.define('user', {
  // id 会被sequelize自动创建, 管理
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名, 唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  }
});

// 强制同步数据库(创建数据表)
// User.sync({ force: true });

export default User;
