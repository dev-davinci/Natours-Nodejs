import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(PORT, (req, res) => {
  console.log(`App is running on port: ${PORT}`);
});
