const { Schema, model } = require("mongoose");

const log = new Schema({
  title: String,
  body: String,
});

module.exports = model("log", log);
