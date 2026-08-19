import mongoose from "mongoose" 

const connectDB=async()=>{ 
    try { 
    
         await mongoose.connect(process.env.MONGO_URI);
         console.log('Mongodb connected')

    }catch(error) {  
        console.error("Mangodb connection failed",error);
        // program ended with error  exit 0 --> prog ended succesfully else stop  nodejs prgm 
        process.exit(1);


}
    
}
export default connectDB;

 