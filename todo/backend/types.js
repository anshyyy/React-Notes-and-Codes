const zod = require("zod");

/*
 
{
    title : string,
    description : string,
    completed : bool
}


*/

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string(),
    completed : zod.boolean(),
})

const updatedTodo = zod.object({
    id : zod.string()
})
module.exports={createTodo,updatedTodo}
