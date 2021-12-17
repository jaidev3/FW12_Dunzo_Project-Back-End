const express = require('express');

const Item = require('../models/item.model');

const router = express.Router();

router.post("", async (req,res) =>{
    try{
        const item = await Item.create(req.body);
        return res.status(201).send(item)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


router.get("", async (req,res) =>{
    try{
        const items = await Item.find().lean().exec();
        return res.status(201).send(items)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.get('/:id', async(req, res) => {
    try{
        const item = await Item.find().lean().exec();
        const product = {name: 'adnan'}
        return res.render('singleProduct',{product})
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


module.exports = router;





