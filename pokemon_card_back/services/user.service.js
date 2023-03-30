const User = require('../models/user.model');

class UserService {

    async getAllUsers() {
        try {
            return await User.find();
        } catch (error) {
            console.log(error);
        }
    }

    async getUserById(id) {
        try {
            return await User.findById(id);
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByEmail(email) {
        try {
            return await User.findOne({
                email: email
            });
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user) {
        try {
            return await user.save();
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(id, user) {
        try {
            return await User.findByIdAndUpdate(id, user);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(id) {
        try {
            return await User.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserService();