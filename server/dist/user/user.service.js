"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
class UserService {
    async createUser(name, password) {
        const res = await user_model_1.default.create({ name, password });
    }
    async getUerInfo({ id, name, password }) {
        const whereOpt = {};
        id && Object.assign(whereOpt, { id });
        name && Object.assign(whereOpt, { name });
        password && Object.assign(whereOpt, { password });
        const res = await user_model_1.default.findOne({
            attributes: ['id', 'name', 'password'],
            where: whereOpt,
        });
        return res ? res.dataValues : null;
    }
    async updateById({ id, name, password }) {
        const whereOpt = { id };
        const newUser = {};
        name && Object.assign(newUser, { name });
        password && Object.assign(newUser, { password });
        const res = await user_model_1.default.update(newUser, { where: whereOpt });
        return res[0] > 0 ? true : false;
    }
}
module.exports = new UserService();
//# sourceMappingURL=user.service.js.map