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
        return res.status(501).json({
            message:"not able to create the user",
            success : false,
        })

       
    }
}
const deleteUser = async(req,res) => {
    try {
        const id = req.body.id;
        console.log(id);
        await prisma.user.delete({
            where : {
                id:id
            }
        });

      return res.status(200).json({
        success : true,
        message : "deleted the user"
      })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message:"not able to delete the user",
            success : false,
        })
    }
}

const updateUser = async(req,res)=> {
    try {
        // console.log("helllllllllllllllllllllooooooooo");
       // console.log(req);
        const id = req.query.id;
        const data = req.body;
        console.log(id);
        console.log(data);
        const user = await prisma.user.update({
            where: {
                id: id
              },
            data: data
        });
        return res.status(200).json({
            success : true,
            data : user,
            message : "deleted the user"
          })
     
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message:"not able to update the user",
            success : false,
        })
    }
}

const getUser = async(req,res)=> {
    try {
        const id = req.query.id;
        const user = await prisma.user.findUnique({
            where : {
                id : id
            }
        });
        return res.status(200).json({
            success : true,
            data : user,
            message : "fetched the user"
          });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message:"not able to fetch the user",
            success : false,
        });
    }
}
const getUserWithPosts = async(req,res)=> {
    try {
        const id = req.query.id;
        const user = await prisma.user.findUnique({
            where : {
                id : id
            },
            include: {
                posts: true, 
            },
        });
        return res.status(200).json({
            success : true,
            data : user,
            message : "fetched the user"
          });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message:"not able to fetch the user",
            success : false,
        });
    }
}



module.exports = {
    signup,
   // login,
    deleteUser,
    getUserWithPosts,
    updateUser,
    getUser,
}
