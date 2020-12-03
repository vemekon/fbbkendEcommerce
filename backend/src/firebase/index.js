var admin = require("firebase-admin");

var serviceAccount = require("../../config/fbAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mekele-77f49.firebaseio.com",
});

module.exports = admin;
