const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const UCL_URL_TIMETABLE = 'https://uclapi.com/timetable/personal';
const UCL_URL_STAFF = 'https://uclapi.com/search/people';
//dummy search value
const dummySearchValue = 'jen';

async function getAll(req, res) {
    try {
        console.log("dashboard controller: getAll()");
        const TOKEN = req.body.token;

        /* Getting timetable */
        // let CURRENT_DATE = new Date()
        //CURRENT_DATE.toISOString().split('T')[0]
        let CURRENT_DATE = "2022-11-03"


        const response_timetable = await axios.get(`${UCL_URL_TIMETABLE}?client_secret=${process.env.CLIENT_SECRET}&date=${CURRENT_DATE}&token=${TOKEN}`);
        const response_staff = await axios.get(`${UCL_URL_STAFF}?query=${dummySearchValue}&client_secret=${process.env.CLIENT_SECRET}&token=${TOKEN}`);

        const timetable = response_timetable.data.timetable;
        //const staff = response_staff.data.staff;

        console.log(response_staff);

        res.status(200).send({
            student: {
                name: req.fullName,
                degree: "MSc Software Systems Engineering",
            },
            timetable: timetable[CURRENT_DATE],
            //staff: staff
        });
    } catch (error) {
        // console.log(error)
        res.status(500).send({
            message: error,
        })
    } 
}


module.exports = {
    getAll
}