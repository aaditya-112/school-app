import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./lib/db.js";
import authRoutes from "./routes/auth.Routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Routes
app.use("/api/authUser",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is runing on ${PORT}`);
    dbConnect();
})