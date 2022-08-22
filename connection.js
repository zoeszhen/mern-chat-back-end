const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.7xg2i.mongodb.net/chatAppMern?retryWrites=true&w=majority`,
  () => {
    console.log("connect to mongodb");
  }
);
