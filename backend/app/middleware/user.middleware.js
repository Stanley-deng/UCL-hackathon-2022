const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const UCL_URL = 'https://uclapi.com/oauth/user/data';

async function verifyToken(req, res, next) {
    const TOKEN = req.body.token;

    console.log("middleware: verifyToken()");
    console.log("TOKEN: ", TOKEN);

    if (typeof TOKEN === 'undefined') {
        return res.status(401).send({
            message: "No token provided."
        });
    }

    const response = await axios.get(`${UCL_URL}?client_secret=${process.env.CLIENT_SECRET}&token=${TOKEN}`);
    console.log(response.status);
    console.log(response.data);
    return;
}

module.exports = {
    verifyToken
};