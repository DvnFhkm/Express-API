const { param } = require("../routes/users");
const usersModel = require("../models/usersModel");

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await usersModel.createNewUser(body);
    res.status(201).json({
      message: "Create new user success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const [data] = await usersModel.getAllUsers();
    res.status(200).json({
      message: "Get all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await usersModel.updateUsers(body, idUser);
    res.status(200).json({
      message: "UPDATE users success",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  const { idUser } = req.params;
  try {
    await usersModel.deleteUsers(idUser);
    res.status(200).json({
      message: "DELETE users success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  updateUsers,
  deleteUsers,
};
