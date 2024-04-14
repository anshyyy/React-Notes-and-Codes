const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const {createTodo,updatedTodo} = require("../types")

const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title : {
        type :String,
        required :true
    },
    description : {
        type : String,
    },
    completed : {
        type : Boolean
    }
});

const Todo = mongoose.model("todo",todoSchema);

app.use(bodyParser.urlencoded({extended:true}));

// app.get("/check",(req,res)=>{
//     return res.status(200).json({serverStatus:"ok"})
// });


// body {
//  title : string
//  description : string
//  completed : bool
//}

app.post("/todo",async(req,res)=>{
    try {
       let payload = req.body;
       payload.completed = payload.completed==="true";
       console.log(payload);
       const parsedPayload = createTodo.safeParse(payload);
       console.log(parsedPayload);
       if(!parsedPayload.success){
          return res.status(401).json({
            msg :"you sent the wrong inputs!!",
            success : false  
        })
       }
     const todo = await Todo.create(parsedPayload.data);
     return res.status(200).json({
        msg : "Successfully created the todo",
        success:true,
        data : todo
     });
    } catch (error) {
        return res.status(500).json({
            message : "Request Failed",
            success : false,
            err:error
          });
    }
});

app.get("/",async(req,res)=>{
    try {
        const todo = await Todo.find();
        return res.status(200).json({
            success:true,
            msg:"Successfully fetched the data",
            data:todo
        })
    } catch (error) {
     // console.log(error.message);
       return res.status(500).json({
         message : "Request Failed",
         success : false,
         err:error.message
       });
    }
 });
app.delete("/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const parsedPayload = updatedTodo.safeParse(id);
        if(!parsedPayload.success){
            return res.status(401).json({
              msg :"you sent the wrong inputs!!",
              success : false  
          })
         }
       await Todo.deleteOne(id);
       return res.status(200).json({
        success:true,
        msg:"Successfully deleted the data",
    })
    } catch (error) {
        return res.status(500).json({
            message : "Request Failed",
            success : false,
            err:error
          });
    }
});
app.patch("/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const parsedPayload = updatedTodo.safeParse(id);
        if(!parsedPayload.success){
            return res.status(401).json({
              msg :"you sent the wrong inputs!!",
              success : false  
          })
         }
        const todo = await Todo.update({
            _id:id
        },
       {
        completed : true
       }
    );
    return res.status(200).json({
        success:true,
        msg:"Successfully updated the data",
        data:todo
    });

    } catch (error) {
        return res.status(500).json({
            message : "Request Failed",
            success : false,
            err:error
          });
    }
});

 (async()=>{
    await mongoose.connect("mongodb://localhost:27017/todo");
     app.listen(3000,()=>{
        console.log("Server started on port 3000")
     })
})();

