const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config();

const CONNECTION_URL = process.env.ConnectionURL;

const dbConnector = () => {
  console.log(mongoose.connection.readyState);
  mongoose.connection.on("connecting", () => {
    console.log("connecting");
    console.log(mongoose.connection.readyState);
  });
  mongoose.connection.on("connected", () => {
    console.log("connected");
    console.log(mongoose.connection.readyState);
  });
  mongoose.connection.on("disconnecting", () => {
    console.log("disconnecting");
    console.log(mongoose.connection.readyState);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("disconnected");
    console.log(mongoose.connection.readyState);
  });

  mongoose
    .connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => console.log(err));

  mongoose.set("useCreateIndex", true);
};

mongoose.set("useFindAndModify", false);

module.exports = dbConnector;
