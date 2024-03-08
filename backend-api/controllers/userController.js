
const User1 = require("../models/userModel");
const { generateToken } = require("../helpers/generateToken");



const ayesha = async (req, res) => {
  console.log(generateToken( "65c8610bad08542c975a7c53"));
}
/* test route is creating users  in DB*/

const test = async (req, res) => {
  console.log("It's working");
  const { email, password } = req.body;
  try {
    const newUser = await User1.create({ email, password });
    res.json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};


module.exports = {  test, ayesha };
