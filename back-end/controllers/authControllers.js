const User = require("../models/User");
const Role = require("../models/Role");
const mailer = require("../middlewares/mailer");
const jwt = require("jsonwebtoken");
var storage = require("local-storage");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { body } = req;
  if (!body.name || !body.email || !body.password || !body.phone)
    throw Error("Inputs is not filled");
  else {
    const finduser = await User.findOne({ email: body.email });
    if (finduser) throw Error("email a already existed");
    else {
      const password_hash = await bcrypt.hash(body.password, 10);
      const client_role = await Role.findOne({ name: "client" });
      const user = await User.create({
        ...body,
        password: password_hash,
        role_id: client_role._id,
        status: "Pending",
      });
      if (!user) throw Error("error");
      else {
        mailer.main("register", user);
        res.json({message: "Check your email"});
      }
    }
  }
};

const login = async (req, res) => {
  const { body } = req;
  if (!body.email || !body.password) throw Error("Inputs is not filled");
  const findUser = await User.findOne({ email: body.email });
  if (!findUser || !(await bcrypt.compare(body.password, findUser.password)))
    throw Error("email or password is incorrect");
  if (findUser.status == "Pending") throw Error("check your email");
  if (findUser.status == "Banned") throw Error("you cant to login");
  const token = await jwt.sign(
    { _id: findUser._id },
    process.env.SECRET_TOCKEN
  );
  storage("token", token);
  const roles = await Role.findOne({role_id:findUser.role_id})
 
  console.log(roles)
  res.json({ name: findUser.name, role_id: roles.name, token: storage("token") });
};

const verifyEmail = async (req, res) => {
  const token = req.params;
  const verfy_tocken = await jwt.verify(token.token, process.env.SECRET_TOCKEN);
  const find_user = await User.findOne({ email: verfy_tocken.email });
  if (find_user == "Active") throw Error("Déja active");
  if (find_user == "Banned") throw Error("Your acount Banned");
  const verify_email = await User.updateOne(
    { email: find_user.email },
    { $set: { status: "Active" } }
  );
  if (!verify_email) throw Error("Error");
  res.redirect('http://localhost:3000/login')
  // res.send("Your acount is Actived");
  
};

const resetPassword = async (req, res) => {
  const { body } = req;
  if (
    !body.last_password ||
    !body.new_password ||
    body.new_password != body.confirm_new_password
  )
    throw Error("Fill all filled");
  const token_rest = storage("token");
  const user_reset = await jwt.verify(token_rest, process.env.SECRET_TOCKEN);
  const find_user_reset = await User.findById(user_reset._id);
  const verfy_last_password = await bcrypt.compare(
    body.last_password,
    find_user_reset.password
  );
  if (!verfy_last_password) throw Error("your password is inccorect");
  const hash_new_password = await bcrypt.hash(body.new_password, 10);
  const update_reset_password = await User.updateOne(
    { _id: find_user_reset._id },
    { $set: { password: hash_new_password } }
  );
  if (!update_reset_password) throw Error("password not apdated");
  res.json({ message: "your password is changed" });
};

const forgetPassword = async (req, res) => {
  const email = req.body.email;
  if (!email) throw Error("email not required");
  const forget_password_email = await User.findOne({ email: email });
  if (!forget_password_email) throw Error("email inccorect");
  mailer.main("forgetPassword", forget_password_email);
  res.json("check your email");
};

const veriyfyForgetPassword = async (req, res) => {
  const token = req.params.token;
  const verfy_token = await jwt.verify(token, process.env.SECRET_TOCKEN);
  const verify_token_email = await User.findOne({ email: verfy_token.email });
  const new_token = await jwt.sign(
    { id: verify_token_email._id },
    process.env.SECRET_TOCKEN
  );
  storage("new_token", new_token);
  res.json({ message: 'Redirect to "forme-forget-password"' });
};

const formeForgetPassword = async (req, res) => {
  const { body } = req;
  if (!body.password || body.password != body.confirm_password)
    throw Error("password not required");
  const verfy_form_tocken = await jwt.verify(
    storage("new_token"),
    process.env.SECRET_TOCKEN
  );
  const find_forget_password = await User.findById(verfy_form_tocken.id);
  if (!find_forget_password)
    throw Error("Error not found,replay to check your email");
  const hash_forget_password = await bcrypt.hash(body.password, 10);
  await User.updateOne(
    { _id: find_forget_password._id },
    { $set: { password: hash_forget_password } }
  );
  res.json({ message: "your password is changed" });
};

const logout = async (req, res) => {
  storage.clear();
  res.send({ message: "User is logouted" });
};

module.exports = {
  register,
  login,
  resetPassword,
  verifyEmail,
  logout,
  forgetPassword,
  veriyfyForgetPassword,
  formeForgetPassword,
};
