//handles all requests to /api/blogposts endpoint
module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");

  router.get("/", controller.findALL);

  //GET student by ID
  router.get("/:id", controller.findById);

  //   router.get("/", function (req, res) {
  //     res.send("You have reached the router handler for getting all blog posts.");
  //   });
  app.use("/api/blogposts/", router);
};
