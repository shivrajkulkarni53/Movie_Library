import express  from "express";
import {getAllMovie,getMovieById,createMovie,updateMovie,deleteMovie}from"../controllers/MovieController.js"

const router=express.Router();

router.get("/",getAllMovie)
router.get("/:id",getMovieById)
router.post("/",createMovie)
router.put("/:id",updateMovie)
router.delete("/:id",deleteMovie)

export default router;
