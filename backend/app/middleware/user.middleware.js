const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const userRepository = require("../repository/user.repository");

const UCL_URL = 'https://uclapi.com/oauth/user/data';

async function verifyToken(req, res, next) {
    try {
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

        const NAME = response.data.full_name;
        const DEPARTMENT = response.data.department;
        const EMAIL = response.data.email;

        const userExists = await userRepository.findOne(EMAIL);
        if (!userExists) {
            await userRepository.create({
                name: NAME,
                department: DEPARTMENT,
                email: EMAIL,
            });
        }

        req.fullName = response.data.full_name
        next();
    } catch (error) {
        console.log("Error in middleware()", error);
        return res.status(500).send({
            message: error
        });
    }
}

module.exports = {
    verifyToken
};