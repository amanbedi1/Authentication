const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const dbConnector = require("./connection.js");

const routes = require("./Routes/routes.js");

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json({ limit: "16mb" }));

app.use(express.urlencoded({ extended: true, limit: "16mb" }));

app.use(cors());

app.use("/", routes);

dbConnector();

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
