const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
/*test*/


const UCL_URL_TIMETABLE = 'https://uclapi.com/timetable/personal';

function flattenEvent(e) {
	let event = {};
	for(let i=0;i<e[1].length;i++) {
		let prop = e[1][i];
		event[prop[0]] = prop[3];
		//console.log('e',prop);
	} 
	return event;
}

async function getAll(req, res) {
    try {
        console.log("dashboard controller: getAll()");
        const TOKEN = req.body.token;

        /*test here*/
        //const resultJSON = await axios.get("https://moodle.ucl.ac.uk/calendar/export_execute.php?userid=819368&authtoken=90005c974bc1d92e88ccb2b41b44f8f71c66193b&preset_what=all&preset_time=weeknext");
        /*test here*/

        /* Getting timetable */
        // let CURRENT_DATE = new Date()
        // CURRENT_DATE.toISOString().split('T')[0]
        let CURRENT_DATE = "2022-11-03"

        const response = await axios.get(`${UCL_URL_TIMETABLE}?client_secret=${process.env.CLIENT_SECRET}&date=${CURRENT_DATE}&token=${TOKEN}`);

        // const response = await axios.get("https://uclapi.com/timetable/personal?client_secret=0a2eb6400a02cb27c3fa05d2fcae6caaecd03da0d37a3bc3bdb682b8c8264abb&date=2022-09-28&token=uclapi-user-bc81a10a069e589-e6614ad9d9956c0-cf4b32e70097f92-102349296dc1413");

        const timetable = response.data.timetable;

        res.status(200).send({
            student: {
                name: req.fullName,
                degree: "MSc Software Systems Engineering",
            },
            //timetable: timetable,
            resultJSON: resultJSON

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