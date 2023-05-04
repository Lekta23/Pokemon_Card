const admin = require("../firebase").admin;


class TokenService {


    generateToken() {
        return Math.random().toString(36).substr(2);
    }

    async updateToken(username) {
        return await admin.firestore().collection('tokens').where('username', '==', username).get().then((snapshot) => {
            if (snapshot.empty) {
                return admin.firestore().collection('tokens').add({
                    username: username,
                    token: this.generateToken()
                });
            } else {
                return admin.firestore().collection('tokens').doc(snapshot.docs[0].id).update({
                    token: this.generateToken()
                });
            }
        });
    }
}

module.exports = new TokenService();