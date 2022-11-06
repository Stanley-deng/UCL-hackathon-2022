module.exports = app => {
    const dashboards = require("../controllers/dashboard.controllers.js");
    const userMiddleware = require("../middleware/user.middleware");

    var router = require("express").Router();

    router.post(
        "/",
        [
            userMiddleware.verifyToken
        ],
        dashboards.getAll
    )

    app.use('/api/dashboard', router);
};