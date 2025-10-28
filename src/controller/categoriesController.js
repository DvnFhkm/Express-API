const { params } = require("../routes/categories");
const categoriesModel = require("../models/categoriesModel");

const getAllCategories = async (req, res) => {
  try {
    const [data] = await categoriesModel.getAllCategories();
    res.json({
      message: "Get All Categories success",
      data: data,
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createNewCategories = async (req, res) => {
  const { body } = req;
  try {
    await categoriesModel.createNewCategories(body);
    res.json({
      message: "Create Categories success",
      data: body,
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const updateCategories = async (req, res) => {
  const { idCategories } = req.params;
  const { body } = req;
  try {
    await categoriesModel.updateCategories(body, idCategories);
    res.json({
      message: "Update Categories success",
      data: {
        id: idCategories,
        ...body,
      },
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteCategories = async (req, res) => {
  const { idCategories } = req.params;
  try {
    await categoriesModel.deleteCategories(idCategories);
    res.json({
      message: "Delete Categori success",
    });
  } catch (error) {
    res.json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllCategories,
  createNewCategories,
  updateCategories,
  deleteCategories,
};
