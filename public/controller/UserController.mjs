let bcrypt = require("bcrypt");
let User = require("../model/User.mjs");
let JWT = require("jsonwebtoken");

let Register = async (req, res) => {
  //!el register hna h5leha ta5od el req,res 3shan fl route mktbhom4
  try {
    let { username, password } = req.body;
    let existUser = await User.findOne({ username });
    if (existUser) {
      return res.status(400).json({
        Error: "Username already exists from UserController Register",
      });
    }
    let hash = await bcrypt.hash(password, 10);
    let user = await User.create({ username, password: hash });

    let token = JWT.sign({ id: user.id }, "aweda-secret-key");
    res.json({ token, user: { id: user.id, username: user.username } });
  } catch (e) {
    res
      .status(500)
      .json({ Error: "serviers Error from UserController Register" });
  }
};

let Login = async (req, res) => {
  try {
    let { username, password } = req.body;
    let user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(404).json({ Error: "invalid password or username" });
    }
    let token = JWT.sign({ id: user.id }, "aweda-secret-key");
    res.json({ token, user: { id: user.id, username: user.username } });
  } catch (e) {
    res.status(500).json({ Error: "serviers Error from UserController Login" });
  }
};

export default { Login, Register };
