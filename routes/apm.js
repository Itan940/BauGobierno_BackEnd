const express = require("express");
const router = express.Router();
const apm = require("../models/apm");
//get
router.get("/", async (req, res) => {
  try {
    const apms = await apm.find();
    res.send({ apms: apms });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post
router.post("/", (req, res) => {});
module.exports = router;
