import mongoose from "mongoose"; 
const dbConnection=async (MONGO_URL)=>{ 
    try{ 
        const DB_OPTIONS={ 
             dbname:'HotelChain',
        } 
        await mongoose.connect(MONGO_URL,DB_OPTIONS);
        console.log("Database setup Sucssessful");
    }
    catch(err){ 
        console.log(err);
    }
}
export default dbConnection
