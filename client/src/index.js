import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// // Load Mongoose from Library
// const  mongoose=require("mongoose");
// // Let's connect to Mongodb
// mongoose.connect("mongodb://127.0.0.1:27017/testdb")
// // it is a asynchronous function
// // .then is a promise
// .then(async()=>{
//     const Person = mongoose.model
//         ("Person",
//         {name:String,age:Number},"person");
//         // INSERT FUNCTION
//         await Person.create({name:"Celsia",age:21});
//         await Person.create({name:"Martin",age:19});
//         await Person.create({name:"Jenissa",age:20});
//         await Person.create({name:"Jessica",age:20});
//         await Person.create({name:"Thanish",age:15});
//         console.log("Persons inserted Successfully.")

//         //Read
//         // const allpeople =await Person.find();
//         // console.log("All People: ",allpeople);

//         //Update
//         // await Person.updateOne({name:"Celsia"},{age:22});
//         // console.log("Manoj age updated.");

//         //Delete
//         // await Person.deleteOne({name:"Celsia"});
//         // console.log("Celsia Deleted");
//         // To find the Youngest and Eldest
//         const youngest=await Person.findOne().sort({age:1})
//         console.log("Youngest age is ",youngest);

//         const eldest=await Person.findOne().sort({age:-1})
//         console.log("Eldest age is ",eldest);


// })

   
// .catch(err=>console.error(err));