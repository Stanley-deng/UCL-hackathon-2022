const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const UCL_URL = 'https://uclapi.com/oauth/user/data';

async function verifyToken(req, res, next) {
    console.log("middleware: verifyToken()");

    const TOKEN = req.body.token;
    if (typeof TOKEN === 'undefined') {
        return res.status(401).send({
            message: "No token provided."
        });
    }

    const response = await axios.get(`${UCL_URL}?client_secret=${process.env.CLIENT_SECRET}&token=${TOKEN}`);
    if (response.status !== 200) {
        return res.status(500).send({
            message: "Error with provided token."
        });
    }

    req.fullName = response.data.full_name
    next();
}

module.exports = {
    verifyToken
};