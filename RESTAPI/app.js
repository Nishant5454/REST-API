import express from "express"; 
import mongoose from "mongoose";
import dbConnection from "./connection/connection.js"; 
import web from "./routes/web.js";
const app=express();  
const PORT=3000; 
const MONGO_URL= "mongodb://localhost:27017" 
import body Parser from 'body-parser' //for Middlware



dbConnection(MONGO_URL)

app.use(express.json())
app.use("/hotel",web)

app.listen(PORT,()=>{ 
    console.log(`Server is Listning at http://localhost:${PORT}`);
})
