const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount, {
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: "https://devportfolio-may-2020.firebaseio.com",
});

const db = firebase.firestore();

module.exports = { db };
