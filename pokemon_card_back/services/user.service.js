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
                        password: UtilsService.dehash(doc.data().password, 10)
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
                        password: UtilsService.dehash(doc.data().password, 10)
                    };
                } else {
                    return null;
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByusername(username) {
        try {
            return await admin.firestore().collection('users').where('username', '==', username).get().then((snapshot) => {
                if (snapshot.empty) {
                    return null;
                } else {
                    console.log(snapshot.docs[0].data());
                    return {
                        id: snapshot.docs[0].id,
                        username: snapshot.docs[0].data().username,
                        password: UtilsService.dehash(snapshot.docs[0].data().password, 10)
                    };
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async createUser(user) {
        try {
            user.password = UtilsService.hash(user.password);
            return await admin.firestore().collection('users').add(JSON.parse(JSON.stringify(user)));
        } catch (error) {
            console.log(error);
        }
    }

    async updateUser(id, user) {
        try {
            user.password = UtilsService.hash(user.password);
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
        if (username === undefined || password === undefined) {
            return {
                error: 'username or password is undefined'
            };
        }
        const user = await this.getUserByusername(username);
        if (user === null) {
            console.log('user not found');
            await this.createUser(new User({
                username: username,
                password: UtilsService.hash(password)
            }));
            await tokenService.updateToken(username);
            return user;
        }
        console.log(user, password);
        if (user.password === password) {
            console.log('user found');
            tokenService.updateToken(username);
            return user;
        }
        return {
            error: 'wrong password'
        };
    }
}

module.exports = new UserService();