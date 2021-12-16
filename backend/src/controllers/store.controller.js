const express = require('express');

const User = require('../models/store.model');

const router = express.Router();

router.post("", async (req,res) =>{
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

// router.get("", async (req,res) =>{
//     try{
//         const user = await User.find().lean().exec();
//         return res.status(201).send(user)
//     }
//     catch (e) {
//         return res.status(500).json({ message: e.message, status: "Failed" })
//     }
// })



router.get("", async (req,res) =>{
    try{

        const page = +req.query.page || 1;
        const size = +req.query.size || 10;

        // page = 1 skip(0) limit(2)
        const skip  = (page - 1) * size;

        const user = await User.find().skip(skip).limit(size).lean().exec();
        const totalPages = Math.ceil(await User.find().countDocuments() / size);        
        // return res.status(201).send(user)
        return res.json({user,totalPages});

    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


module.exports = router;



