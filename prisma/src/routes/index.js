const express = require('express');
const {signup,deleteUser,updateUser,getUser} = require('../controllers/userController')
const {create} = require('../controllers/postController');
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

router.delete('/delete',deleteUser);
router.post('/signup',signup);
router.patch('/update',updateUser);
router.get("/getuser",getUser);


router.post("/createPost",create);
module.exports = router;