const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const usersRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");
const middlewareLogsRequest = require("./middleware/logs");
const upload = require("./middleware/multer");

const app = express();

// app.method(path, handler)
// app.use("/", (req, res, next) => {
//   res.send("Hello World");
// });

app.use(middlewareLogsRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);

app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload success",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan diport: ${PORT}`);
});
