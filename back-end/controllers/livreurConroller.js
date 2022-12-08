const livreur = require("../models/User");
const Role = require("../models/Role");
const mailer = require("../middlewares/mailer");
const bcrypt = require("bcryptjs");
const Generate_password_secure = require("secure-random-password");
const Storage = require("local-storage");


const Addlivreur = async (req, res) => {
  const { body } = req;
  if (!body.name || !body.email || !body.phone) throw Error("Fill all filled");
  else {
    const findlivreur = await livreur.findOne({ email: body.email });
    if (findlivreur) throw Error("email a already existed");
    else {
      const stockPassword = Generate_password_secure.randomPassword({
        characters: [
          Generate_password_secure.lower,
          Generate_password_secure.upper,
          Generate_password_secure.digits,
        ],
      });

      const generatePassword = await bcrypt.hash(stockPassword, 10);
      const role_livreur = await Role.findOne({ name: "livreur" });
      const creatlivreur = await livreur.create({
        ...body,
        password: generatePassword,
        role_id: role_livreur._id,
        status: "Active",
      });
      if (!creatlivreur) throw Error("error");
      Storage("stockPassword", stockPassword);
      mailer.main("Addlivreur", creatlivreur);
      await res.send(creatlivreur);
    }
  }
};



module.exports = {
    Addlivreur,
};
