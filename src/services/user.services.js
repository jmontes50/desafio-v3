import Services from './class.services.js';

import UserDao from "../daos/mongodb/user.dao.js";

export default class UserServices extends Services {
    constructor() {
        super(new UserDao())
    }
}