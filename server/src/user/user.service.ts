import User from './user.model'

class UserService {

    /**
     * 创建用户
     */
    async createUser(name: string, password: string) {

        const res = await User.create({ name, password })

    }

    /**
     * 查询用户信息
     */
    async getUerInfo({ id, name, password }) {
        const whereOpt = {}

        id && Object.assign(whereOpt, { id })
        name && Object.assign(whereOpt, { name })
        password && Object.assign(whereOpt, { password })

        const res = await User.findOne({
            attributes: ['id', 'name', 'password'],
            where: whereOpt,
        })

        return res ? res.dataValues : null
    }

    /**
     * 修改密码
     */
    async updateById({ id, name, password }) {
        const whereOpt = { id }
        const newUser = {}
        name && Object.assign(newUser, { name })
        password && Object.assign(newUser, { password })

        const res = await User.update(newUser, { where: whereOpt })
        return res[0] > 0 ? true : false
    }

}


module.exports = new UserService()