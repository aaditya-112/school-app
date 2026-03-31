import express from "express";

const router = express.Router();

router.post("/signup",(req, res)=>{
    res.send("hi it's signup route");
})
router.post("/login",(req,res)=>{
    res.send("hi it's login route")
})
router.post("/logout",(req, res)=>{
    res.send("hi it's logout route")
})

export default router;