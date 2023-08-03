require("dotenv").config();
require("ejs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.set("view engine", "ejs");
const logModel = require("./models/log");

const PORT = process.env.PORT;

app.get("/", async (req, res, next) => {
  const txt = JSON.stringify(req.headers);
  try {
    const newLog = await logModel.create({
      title: `log-${Date.now()}`,
      body: txt,
    });
    res.render("home");
  } catch (err) {
    console.log(err);
  }
});
app.get("/api/getInfo", async (req, res, next) => {
  const txt = JSON.stringify(req.headers);
  try {
    const log = await logModel.find();
    res.send(log);
  } catch (err) {
    console.log(err);
  }
});
connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ghazi:ghazi@cluster0.xbrxn.mongodb.net/test?retryWrites=true&w=majority"
    );
    console.log("db connect");
  } catch (err) {
    console.log(err);
  }
};

connectDb();
app.listen(PORT, () => {
  console.log("server is runiing on port 3000");
});
