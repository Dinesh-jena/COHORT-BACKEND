const express = require('express');
const prisma = require('./db/prisma');
const app = express();

app.use(express.json());

app.post('/',async(req,res)=>{
    await prisma.todo.create({
        data:{
            title:"Exam Preaparation"
        }
    })

    res.status(201).json({
        messages:"Todo created Sucessfully",
    })
})



app.get('/',async(req,res)=>{
    const todo = await prisma.todo.findMany();

    res.status(200).json({
        todo
    })


})


app.delete('/:id',async(req,res)=>{

    // console.log(req.params.id);
   
    const id =Number(req.params.id);

     const deletedTodo = await prisma.todo.delete({
            where: {
                id: id
            }
        });
   
    res.status(201).json({
        messages:`Todo deleted Sucessfully`,
        deletedTodo
    })
})


app.patch('/:id',async(req,res)=>{

    const data = req.body;
    const id =Number(req.params.id);

    
    await prisma.todo.updateMany({
    where: { id:id },
    data: data,
  });

    res.status(200).json({messages:"Todo Updated Sucessfully"},data);
   
})


app.listen(3000,
    console.log("Server is running at port 3000")
)