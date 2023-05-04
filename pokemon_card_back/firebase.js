function initAppFirebase() {
    const admin = require("firebase-admin");
    const serviceAccount = require("./serviceAccountKey.json");
    firebaseApp = admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
    return firebaseApp;
}

const admin = initAppFirebase()


exports.admin = admin;