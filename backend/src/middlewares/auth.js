import admin from "../firebase/index";

exports.authCheck = async (req, res, next) => {
  try {
    const token = req.headers.authtoken;
    const firebaseUser = await admin.auth().verifyIdToken(token);
    req.user = firebaseUser;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(404).json({ err: "invalid token" });
  }
};
