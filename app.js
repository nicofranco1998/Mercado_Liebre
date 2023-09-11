const express = require("express");
const app = express();
const path = require("path");

//variable de entorno
const PORT = process.env.PORT || 3030;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
