const dbPool = require("../config/database");

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ("${body.name}", "${body.email}", "${body.address}")`;
  return dbPool.execute(SQLQuery);
};

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const updateUsers = (body, idUser) => {
  const SQLQuery = `UPDATE users 
                    SET name="${body.name}", email="${body.email}", address="${body.address}" 
                    WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

const deleteUsers = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id=${idUser}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  createNewUser,
  getAllUsers,
  updateUsers,
  deleteUsers,
};
