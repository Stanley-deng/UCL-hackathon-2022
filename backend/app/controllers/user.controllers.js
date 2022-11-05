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

async function findByName(req, res) {
    try {
        const { name } = req.query;
        const users = await userRepository.findByName(name);
        res.status(200).send(users);
    } catch (error) {
        console.log("error on findByName userController:", error);
        res.status(500).send({
            message: error,
        })
    }
}

async function updateNote(req, res) {
    try {
        const note = req.body.note;
        const result = await userRepository.updateNote(note, req.email);
        res.status(200).send(result);
    } catch (error) {
        console.log("error on findByName userController:", error);
        res.status(500).send({
            message: error,
        })
    }
}

module.exports = {
    create,
    findByName,
    updateNote
}