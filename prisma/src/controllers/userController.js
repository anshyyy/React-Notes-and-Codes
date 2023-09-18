const prisma = require('../prisma/index');
const cookieToken = require('../utils/cookieToken');


const signup = async(req,res,next)=>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password){
            throw new Error('please provide all fields');
        }

     const user = await prisma.user.create({
        data : {
            name:name,
            email:email,
            password:password
        }
     })
     console.log(user);
     cookieToken(user,res);

    } catch (error) {

        console.log(error);
    }
}

module.exports = {
    signup
}
