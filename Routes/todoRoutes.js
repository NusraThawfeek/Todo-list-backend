const router = require('express').Router();
const Todo = require('../models/Todo')


router.get("/", (req, res) => {
    Todo.find((err, result) => {
        if (err) {
            throw new Error(err);
        }
      res.json(result);
    })

})

router.post("/", (req, res) => {
    const { title, completed } = req.body;
    console.log(title);
    const addlist = new Todo({
        title: title,
        completed: completed
    })
    addlist.save((err,result) => {
        if (!err) {
            console.log("Successfully added");
            res.json(result);
        }
        else{
        throw new Error(err);
        }
    })
})

router.put("/:id",(req,res)=>{
    Todo.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,result)=>{
        if(err){
            throw new Error(err);
        }
       
        res.json(result);
    })


})

router.delete("/:id",(req,res)=>{
    Todo.findOneAndRemove({_id:req.params.id},(err,result)=>{
        if(err){
            throw new Error(err);
        }

        console.log(result);
        res.end();
    })
})


module.exports = router;