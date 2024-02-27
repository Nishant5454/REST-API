 import express from "express"; 
 const router=express.Router();
 import hotelcontroll from "../controller/controll.js"; 
 router.get('/',hotelcontroll.createdoc)   
 router.post('/',hotelcontroll.getdoc) 
 router.get('/:id',hotelcontroll.getdocById) 
 router.put('/:id',hotelcontroll.updatedocById) 
 router.delete('/:id',hotelcontroll.deleteById)

 export default router
