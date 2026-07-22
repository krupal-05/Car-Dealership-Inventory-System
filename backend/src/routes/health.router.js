import { Router } from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.status(200).json({
        status:"UP",
        message:"Health check successful"
    })
})

export default router