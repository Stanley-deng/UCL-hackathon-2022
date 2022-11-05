const db = require("../models");
const User = db.users;
const userRepository = require("../repository/user.repository");

async function create(req, res) {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
    }

    userRepository.create(newUser);
}


module.exports = {
    create
}