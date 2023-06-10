const User = require('../models/user.model');
const tokenService = require('./token.service');
const {
    UtilsService
} = require('./utils.service');
const admin = require('../firebase').admin;

class UserService {

    async getAllUsers() {
        try {
            return await admin.firestore().collection('users').get().then((snapshot) => {
                return snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        username: doc.data().username,
                        password: doc.data().password
                    };
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getUserById(id) {
        try {
            return await admin.firestore().collection('users').doc(id).get().then((doc) => {
                if (doc.exists) {
                    return {
                        id: doc.id,
                        username: doc.data().username,
                        password: doc.data().password
                    };
                } else {
                    return null;
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByUsername(username, setPassword) {
        try {
            const result = await admin.firestore().collection('users').where('username', '==', username).get();
            if (result.empty) {
                return null;
            }
            let password = result.docs[0].data().password;
            const user = {
                id: result.docs[0].id,
                username: result.docs[0].data().username,
                password: UtilsService.dehash(setPassword, password)
            };
            console.log('userService', user);
            return user;
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user) {
        console.log('user', user);
        try {
            user.password = await UtilsService.hash(user.password);
            return await admin.firestore().collection('users').add(JSON.parse(JSON.stringify(user)));
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(id, user) {
        try {
            user.password = await UtilsService.hash(user.password);
            return await admin.firestore().collection('users').doc(id).update(JSON.parse(JSON.stringify(user)));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUser(id) {
        try {
            return await admin.firestore().collection('users').doc(id).delete();
        } catch (error) {
            console.log(error);
        }
    }

    async loginUser(username, password) {
        console.log('ouais', username, password);
        if (username === undefined || password === undefined) {
            return {
                error: 'username or password is undefined'
            };
        }
        const user = await this.getUserByUsername(username, password);
        console.log('user', user);
        if (user === null) {
            console.log('user not found');
            await this.createUser(new User({
                username: username,
                password: password
            }));
            const token = tokenService.updateToken(username);
            return token;
        }

        if (user.password === true) {
            console.log('user found');
            const token = tokenService.updateToken(username);
            return token;
        }
        return {
            error: 'wrong password'
        };
    }

    async disconnectUser(token) {
        console.log(token);
        await tokenService.deleteToken(token);
        return {
            message: 'user disconnected'
        };
    }
}

module.exports = new UserService();