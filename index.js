const express= require('express');
const mongoose = require('mongoose');
const cors= require('cors');

const app=express();
const PORT=3002;

mongoose.connect('mongodb://localhost:27017/todolist',{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useFindAndModify:false
})
.then(()=>console.log("connected successfully"))
.catch((err)=>console.error(err));

app.use(express.json());
app.use(cors());
const todoRoutes= require('./Routes/todoRoutes')
app.use("/todo",todoRoutes);


app.listen(PORT,()=>{
    console.log("server started..");
});