module.exports = (app) => {
  const users = require("../controllers/user.controllers.js");
  const userMiddleware = require("../middleware/user.middleware");

  var router = require("express").Router();

  router.post("/", [userMiddleware.verifyToken], users.findByName);

  router.post("/note", [userMiddleware.verifyToken], users.updateNote);

  router.post("/events", [userMiddleware.verifyToken], users.updateEvents);

  app.use("/api/user", router);
};
