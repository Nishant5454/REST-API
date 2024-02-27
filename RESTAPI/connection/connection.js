import mongoose from "mongoose"; 
const dbConnection=async (MONGO_URL)=>{ 
    try{ 
        const DB_OPTION={ 
             dbname:'HotelChain',
        } 
        await mongoose.connect(MONGO_URL,DB_OPTION);
        console.log("Database setup Sucssessful");
    }
    catch(err){ 
        console.log("Error in the Server");
    }
}
export default dbConnection; 
