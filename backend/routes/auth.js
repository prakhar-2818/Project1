const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req,res)=>{
    try{
        const { name, email, password } = req.body;

        const user = new User({ name, email, password });
        await user.save();

        res.json({ message:"User registered" });

    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

// LOGIN
router.post("/login", async (req,res)=>{
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user || user.password !== password){
            return res.status(400).json({ error:"Invalid credentials" });
        }

        res.json({
            message:"Login success",
            user
        });

    }catch(err){
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;