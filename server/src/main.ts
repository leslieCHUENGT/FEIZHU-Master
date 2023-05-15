const app = require('./app/app')

const { APP_PORT } = require('./app/app.config')
import seq from './app/database/mysql' 

app.listen(APP_PORT, () => {
    console.log(`服务器成功启动在${APP_PORT}端口上`);
})

seq
  .authenticate()
  .then(() => {
    console.log('数据库连接成功')
  })
  .catch((err: any) => {
    console.log('数据库连接失败', err)
  })