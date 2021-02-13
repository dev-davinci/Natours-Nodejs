const express = require("express");
const morgan = require("morgan");

const tourRoutes = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

if (process.env.ENVIRONMENT === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 8000;

app.get("/api/v1/users", userRoutes);

app.get("/api/v1/tours", tourRoutes);

app.listen(PORT, (req, res) => {
  console.log(`App is running on port: ${PORT}`);
});

module.exports = app;
