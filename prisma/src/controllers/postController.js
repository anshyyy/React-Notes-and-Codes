const prisma = require('../prisma/index');


const create = async(req,res)=>{

    try {
        const post = await prisma.post.create({
            data : {
                slug : req.body.slug,
                title : req.body.title,
                body : req.body.body,
                authorId : req.body.authorId
            }
        });
        return res.status(200).json({
            success : true,
            data : post,
            message : "successfully created the post"
        })

        
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message:"not able to create the post",
            success : false,
        })
    }
}


const getAllPosts = async(req,res)=> {
    try {
      const posts = await prisma.post.findMany({
        where : {
          id : req.params.id
        }
      });
      return res.status(200).json({
        success : true,
        data : posts,

      })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message: "Not Able to fetch all the posts!",
            success : false,
            error : error,
        })
    }
}


module.exports = {
    create,
    getAllPosts
}