const express = require("express");

const categoriesController = require("../controller/categoriesController");

const router = express.Router();

router.post("/", categoriesController.createNewCategories);
router.get("/", categoriesController.getAllCategories);
router.patch("/:idCategories", categoriesController.updateCategories);
router.delete("/:idCategories", categoriesController.deleteCategories);

module.exports = router;
