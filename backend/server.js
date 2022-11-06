const express = require("express");
const cors = require("cors");
const ical = require("node-ical");
const fetch = require("node-fetch");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:5173",
// };

// app.use(cors(corsOptions));

app.use(cors({require: true}))

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to UCL Dash Service application." });
});
//https://moodle.ucl.ac.uk/calendar/
/* export_execute.php?
userid=567503&
authtoken=ba85708d59725b9db2bb9420aa76305d537850ab&
preset_what=user&preset_time=custom */
app.get("/events", async (req, res) => {
  const { userid, authtoken, preset_what, preset_time } = req.query;
  const i_cal =
    "https://moodle.ucl.ac.uk/calendar/export_execute.php?userid=" +
    userid +
    "&authtoken=" +
    authtoken +
    "&preset_what=" +
    preset_what +
    "&preset_time=" +
    preset_time;
  const txt = await fetch(i_cal).then((a) => a.text());
  const cal = Object.values(await ical.async.parseICS(txt))
    .filter((a) => {
      return new Date(a.end) > new Date();
    })
    .sort((a, b) => {
      return new Date(a.start) - new Date(b.start);
    });
  res.send(cal);
});

require("./app/routes/user.routes")(app);
require("./app/routes/dashboard.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
