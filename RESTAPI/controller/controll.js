import Hotelmodel from "../models/models.js";  
class hotelcontroll{ 
    static createdoc=async(req,res)=>{  
        try{
        const {name,location,price}=req.body;
        const doc=new Hotelmodel({ 
            name:name, 
            price:price, 
            location:location
        })
        const result=await doc.save(); 
        res.status(201).send(result);
    }
    catch(err){ 
        console.log("Error");
    }
} 
static getdoc=async(req,res)=>{ 
    try{ 
        const result=await Hotelmodel.find(); 
        res.send(result)
    }
    catch(err){ 
    console.log("Cannot get the document");
    }
} 
static getdocById=async(req,res)=>{ 
    try{ 
        const result=await Hotelmodel.findById(req.params.id); 
        res.send(result)
    } 
    catch(err){ 
        console.log("Cannot find by ID");
    }
} 
static updatedocById=async(req,res)=>{ 
    try{ 
        const result=await Hotelmodel.findByIdAndUpdate(req.params.id,req.body) 
        res.status(201).send(result)
    } 
    catch(err){ 
        console.log("Unable to update docs");
    }
} 
static deleteById=async(req,res)=>{ 
    try{ 
        const result=await Hotelmodel.deleteById(req.params.id) 
        res.status(204).send(result)
    } 
    catch(err){ 
        console.log("Cant delete the item");
    }
}



} 
export default hotelcontroll
