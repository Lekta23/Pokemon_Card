const admin = require("../firebase").admin;


class TokenService {


    generateToken() {
        return Math.random().toString(36).substr(2);
    }

    async updateToken(username) {
        return await admin.firestore().collection('tokens').where('username', '==', username).get().then(async (snapshot) => {
            if (snapshot.empty) {
                const token = this.generateToken();
                await admin.firestore().collection('tokens').add({
                    username: username,
                    token: token
                });
                return token;
            } else {
                const token = this.generateToken();
                await admin.firestore().collection('tokens').doc(snapshot.docs[0].id).update({
                    token: token
                }); 
                return token;
            }
        });
    }

    async deleteToken(token) {
        return await admin.firestore().collection('tokens').where('token', '==', token).get().then((snapshot) => {
            if (snapshot.empty) {
                return null;
            } else {
                return admin.firestore().collection('tokens').doc(snapshot.docs[0].id).delete();
            }
        });
    }
}

module.exports = new TokenService();