const express = require('express');
const {signup} = require('../controllers/userController')
const router = express.Router();

router.get("/",(req,res)=> {
    try {
        return res.status(200).json({
            data : "Hi from other side",
            success : true
        })
        // res.send("Hi from other side");
    } catch (error) {
        console.log(error);
    }
});

router.post('/signup',signup);
module.exports = router;