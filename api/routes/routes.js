const express = require("express");
const router = express.Router();

const userController = require("../controllers/users.controller");
const motorcycleController = require("../controllers/motorcycles.controller");

router.get("/api/v1", (request, response) => {
  response.send("sup m8!");
});

router
  .get("/api/v1/users", userController.getUser)
  .post("/api/v1/users", userController.saveUser)
  .put("/api/v1/users/:id", userController.updateUser)
  .delete("/api/v1/users/:id", userController.deleteUser);

router
  .get("/api/v1/motorcycle", motorcycleController.getMotorcycles)
  .post("/api/v1/motorcycle", motorcycleController.saveMotorcycles)
  .put("/api/v1/motorcycle/:id", motorcycleController.updateMotorcycles)
  .delete("/api/v1/motorcycle/:id", motorcycleController.deleteMotorcycles);

module.exports = router;
