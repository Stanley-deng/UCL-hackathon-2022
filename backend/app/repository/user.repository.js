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

module.exports = {
    create,
    updateDegree,
}