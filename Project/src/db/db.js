const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connect To DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
