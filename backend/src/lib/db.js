import mongoose from "mongoose"

export const dbConnect= async (params) => {
    try {
        const conn = await mongoose.connect(process.env.URI)
        console.log(`MongoDB Connected :${conn.connection.host}`)
        // console.log(conn.connection);
    } catch (error) {
        console.log("error in connecting to MongoDB", error);
        process.exit(1);
        
    }
} 