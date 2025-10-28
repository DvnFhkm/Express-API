const express = require("express");

const UserController = require("../controller/usersController");

const router = express.Router();

router.post("/", UserController.createNewUser);

router.get("/", UserController.getAllUsers);

router.patch("/:idUser", UserController.updateUsers);

router.delete("/:idUser", UserController.deleteUsers);

module.exports = router;
