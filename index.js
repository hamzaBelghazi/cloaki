require("dotenv").config();
require("ejs");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.static(__dirname + "/views"));
app.use(express.json());
app.set("view engine", "ejs");
const crawlersArr = require("./utils/crawlers/crawlers");
const userEgentsArr = require("./utils/crawlers/userEgent");

const headersValidate = async (req, res, next) => {
  const headerObj = Object.assign(req.headers);
  let matching = false;
  for (let i = 0; i < crawlersArr.length; i++) {
    for (let j = 0; j < userEgentsArr.length; j++) {
      const x = userEgentsArr[j].toLowerCase();

      if (headerObj.hasOwnProperty(x)) {
        matching = RegExp(crawlersArr[i], "g").test(headerObj[x]);
        if (matching) {
          break;
        }
      }
    }
    if (matching) {
      return res.redirect("https://asia.loaloat.com/");
    } else {
      continue;
    }
  }
  return next();
};

app.use(headersValidate);
app.get("/", (req, res, next) => {
  res.send("loaloat Maroc");
});
// moon sa
app.get("/new-hair", async (req, res, next) => {
  res.redirect("https://asia.loa-loat.com/new-hair");
});

// moon maroc
app.get("/moon-mar", async (req, res, next) => {
  res.redirect("https://sa.loaloat.com/moon-mar");
});

// spiruline
app.get("/sulidin", async (req, res, next) => {
  res.redirect("https://asia.loa-loat.com/sulidin");
});

app.get("/spiruline-fr", async (req, res, next) => {
  res.redirect("https://afr.loa-loat.com/spirulina-fr");
});

// API
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
