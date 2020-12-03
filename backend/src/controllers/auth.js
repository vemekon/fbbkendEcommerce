//import User from "../models/user";
const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { email } = req.user;
  const name = req.user.name || req.user.email.split("@")[0];
  const user = await User.findOneAndUpdate({ email }, { name }, { new: true });

  if (user) {
    console.log("updated", user);
    res.json(user);
  } else {
    const user = await new User({
      name,
      email,
    });
    user.save();
    console.log("new user", user);
    res.json(user);
  }
};
exports.create = () => (req, res) => {
  res.send("yoi hl");
};
exports.getCurrentUser = async (req, res) => {
  await User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
