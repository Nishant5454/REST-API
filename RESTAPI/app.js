import express from "express"; 
import mongoose from "mongoose"; 
const PORT=3000; 
const MONGO_URL="mongodb:localhost://27017"; 
const app=express();  
app.use(express.json())
app.listen(PORT,()=>{ 
    console.log(`Server is Listning at http://localhost:${PORT}`);
})