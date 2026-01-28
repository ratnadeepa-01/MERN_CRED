//import the libraries of express moongose cors
require("dotenv").config();
const express= require("express");
const mongoose = require("mongoose");
const cors=require("cors");

//create express server
const app=express();
app.use(cors());
app.use(express.json());

//connect to mongoDB
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("mongoDB connected"))
.catch(err=> console.error(err))

//create a model
const Person = mongoose.model("Person", {name:String, age: Number}, "product_one");
//read all the people
app.get("/",async(req,res)=>{
    const people=await Person.find();
    res.json(people);
});

//add new people
app.post("/",async(req,res)=>{
    const newPerson=await Person.create(req.body);
    res.json(newPerson);
})

app.put("/:id",async(req,res)=>{
    const updated=await Person.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );
    res.status(201).json(updated);
});


//delete person
app.delete("/:id",async(req,res)=>{
    await Person.findByIdAndDelete(req.params.id);
})
//connection 
app.listen(process.env.PORT || 5000,()=>{
    console.log("server is running on http://localhost:5000");
})