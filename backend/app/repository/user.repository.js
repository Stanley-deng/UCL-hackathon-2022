const db = require("../models");
const User = db.users;

async function create(user) {
    const response = await User.create(user);
    return response;
};

async function updateDegree(filter, detail) {
    const response = await User.findOneAndUpdate(filter, detail);
    return response;
};

async function findOne(email) {
    const response = await User.findOne({ email: email });
    return response;
}

async function findByName(name) {
    const response = await User.find({name:{'$regex' : `^${name}`, '$options' : 'i'}}, 'name email department').exec();
    return response;
}

async function updateNote(note, email) {
    const filter = { email: email };
    const result = await User.findOneAndUpdate(filter, { note: note });
    return result;
}

module.exports = {
    create,
    updateDegree,
    findOne,
    findByName,
    updateNote,
}