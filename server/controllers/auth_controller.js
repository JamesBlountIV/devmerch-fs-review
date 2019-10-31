const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const db = req.app.get("db");
  const { username, firstName, lastName, password } = req.body;
};

module.exports = {};
