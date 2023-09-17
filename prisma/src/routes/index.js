const express = require('express');

const router = express.Router();

router.get("/",(req,res)=> {
    try {
        res.status(200).json({
            data : "Hi from other side",
            success : true
        })
        // res.send("Hi from other side");
    } catch (error) {
        console.log(error);
    }
});




module.exports = router;