import mongoose from "mongoose"; 
const hotelSchema=new mongoose.Schema({ 
    name:{ 
        type:String,
        default:true,
        require:true,
        lowercase:true, 
    },
    location:{ 
        type:String,
        default:true, 
        require:true, 
        lowercase:true, 
    },
    price:{ 
        type:Number,
        require:true,
    }

}) 
const Hotelmodel=mongoose.model("hotel",hotelSchema) 
export default Hotelmodel; 
