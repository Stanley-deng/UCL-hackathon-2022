const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const db = require("../models");
const User = db.users;
const userRepository = require("../repository/user.repository");
const UCL_URL_STAFF = 'https://uclapi.com/search/people';

async function create(req, res) {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    department: req.body.department,
  };

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
    });
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
    });
  }
}
async function updateEvents(req, res) {
  console.log(req.body.events);
  try {
    const events = req.body.events;
    const result = await userRepository.updateEvent(events, req.email);
    res.status(200).send(result);
  } catch (error) {
    console.log("error on findByName userController:", error);
    res.status(500).send({
      message: error,
    });
  }
}

async function uclAPIStaffSearch(req, res) {
  try {
    const { searchTerm } = req.query;
    const TOKEN = req.body.token;

    const result = await axios.get(`${UCL_URL_STAFF}?query=${searchTerm}&client_secret=${process.env.CLIENT_SECRET}&token=${TOKEN}`);
    const DATA = result.data;
    
    res.status(200).send(DATA.people);
  } catch (error) {
    console.log("error on uclAPIStaffSearch userController:", error);
    res.status(500).send({
      message: error,
    });
  }
}
module.exports = {
  create,
  findByName,
  updateNote,
  updateEvents,
  uclAPIStaffSearch,
};
