const express = require("express");
const mongoose = require("mongoose");
const Apm = require("./models/apm");

const app = express();
const uri =
  "mongodb+srv://mike:mike@cluster01.2vefe.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster01";
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));

db.once("open", () => console.log("connected to db"));

app.use(express.json());

const apmRouter = require("./routes/apm");
app.use("/apm", apmRouter);
app.listen(3000, () => console.log("server started"));

const apm = new Apm([{ name: "eeea", email: "aaaa", password: "eeeeew" }]);

apm.save();
