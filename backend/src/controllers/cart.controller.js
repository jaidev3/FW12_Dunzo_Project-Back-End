const express = require('express');

const User = require('../models/cart.model');
const { use } = require('./item.controller');

const router = express.Router();

router.post("/:item_id", async (req,res) =>{
    try{
        const user = await User.find({item_id: req.params.item_id}).lean().exec();
        if (!user.length){
            const cart_item = await User.create({item_id: req.params.item_id, qty: 1});
            // return res.status(201).send(cart_item);
        } else{
            const cart_item = await User.findOneAndUpdate({item_id: req.params.item_id}, {qty: user[0].qty + 1}, {new: true}).lean().exec();
        }
        const cart_items = await User.find().populate('item_id').lean().exec();
        return res.status(201).send(cart_items);
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


router.get("", async (req,res) =>{
    try{
        const user = await User.find().populate('item_id').lean().exec();
        return res.status(201).send(user)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})

router.delete("/:id", async (req,res) =>{
    try{
        const user = await User.find({item_id: req.params.id}).lean().exec();
        if (user[0].qty === 1){
            await User.findOneAndDelete({item_id: req.params.id}).lean().exec();
        } else {
            await User.findOneAndUpdate({item_id: req.params.id}, {qty: user[0].qty - 1}).lean().exec();
        }
        const cart_items = await User.find().populate('item_id').lean().exec();
        return res.status(201).send(cart_items)
    }
    catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
})


module.exports = router;





