const dbPool = require("../config/database");

const getAllCategories = () => {
  const SQLQuery = "SELECT * FROM categories";
  return dbPool.execute(SQLQuery);
};

const createNewCategories = (body) => {
  const SQLQuery = `INSERT INTO categories 
                    (name, description) 
                    VALUES ("${body.name}", "${body.description}")`;
  return dbPool.execute(SQLQuery);
};

const updateCategories = (body, idCategories) => {
  const SQLQuery = `UPDATE categories 
                    SET name="${body.name}", description="${body.description}" 
                    WHERE id=${idCategories}`;
  return dbPool.execute(SQLQuery);
};

const deleteCategories = (idCategories) => {
  const SQLQuery = `DELETE FROM categories WHERE id=${idCategories}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllCategories,
  createNewCategories,
  updateCategories,
  deleteCategories,
};
