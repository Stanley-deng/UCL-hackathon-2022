module.exports = (app) => {
  const users = require("../controllers/user.controllers.js");
  const userMiddleware = require("../middleware/user.middleware");

  var router = require("express").Router();

  router.get("/", [userMiddleware.verifyToken], users.findByName);

  router.put("/note", [userMiddleware.verifyToken], users.updateNote);

  router.post("/events", [userMiddleware.verifyToken], users.updateEvents);

  app.use("/api/user", router);
};
