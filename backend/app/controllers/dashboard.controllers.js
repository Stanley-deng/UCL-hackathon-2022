// const db = require("../models");
// const User = db.users;
const userRepository = require("../repository/user.repository");

async function getAll(req, res) {
    console.log("userRepository: getAll()");

    // const TOKEN = req.cookie.TOKEN;

}


module.exports = {
    getAll
}