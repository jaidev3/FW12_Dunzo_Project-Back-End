

const express = require('express');

const Location = require('../models/location.model');

const router = express.Router();

router.post("/", async (req,res) =>{
    try{
        const location = await Location.create(req.body);
        return res.status(201).send(location)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


router.get("/", async (req,res) =>{
    try{
        const location = await Location.find().lean().exec();
        return res.status(201).send(location)
  
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


module.exports = router;

