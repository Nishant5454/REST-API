import express from "express"; 
import bodyParser from "bodyparser"; 
import e from "express";
const app=express(); 
const PORT=4000;  
 let ADMIN=[]; 
 let USERS=[]; 
 let COURSES=[]; 
 app.use(bodyParser.json()); 
 const adminAuthentication=(req,res,next)=>{ 
    const{username,password}=req.headers; 
    const   admin=ADMIN.find(a=>a.username===username&&a.password===password); 
    if(admin){
        next();
    } 
    else{ 
        res.staus(403).json({message:`AUTHENTICATION FAILED`});
    }
 };
const userAuthentication=(req,res,next)=>{ 
    const {username,password}=req.headers; 
    const user=USERS.find(u=>u.username===username&&u.password===password); 
    if(user){ 
        req.user=user;
        next(); // MIDDLEWARE CALLED
    }
    else{ 
        res.staus(401).json({message:`AUTHENTICATION FAILED`});
    }

};  
app.post('/admin/signup',(req,res)=>{  
    const admin=req.header; 
    const existingadmin=ADMIN.find(a=>a.username===username); 
    if(existingadmin){ 
        res.send(403).json({message:`ADMIN ALREADY EXIST`});
    }
    else{ 
        ADMIN.push(admin); 
        res.json({message:`ADMIN SUCSESSFULLY CREATED`})
    }

    

});

