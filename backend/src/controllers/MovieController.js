import Movie from "../models/MovieModel.js";
export async function getAllMovie(_,res){
    try{
        const movies=await Movie.find().sort({createdAt:-1})
        res.status(200).json(movies)
    }catch(error){
        console.error("Error in getAllMovies Controllers",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export async function getMovieById(req,res){
    try{
        const movies=await Movie.findById(req.params.id)
        if(!movies)return res.status(404).json({message:"Movie Not Found"})
        res.status(200).json(movies)
    }catch(error){
        console.error("Error in getMovieById Controller",error)
        res.status(500).json({message:"internal server error"})
    }
}
export async function createMovie(req,res){
    try{
        const {movieTitle,cast,description,genre,runtime,releaseDate,director,budget,imdb_rating}=req.body
        if(!movieTitle||!cast||!description||!genre||!runtime||!releaseDate||!director||!budget||!imdb_rating){
            return res.status(404).json({message:"All fields are required"})
        }
        const movies=new Movie({movieTitle,cast,description,genre,runtime,releaseDate,director,budget,imdb_rating})
        const savedMovie=await movies.save()
        res.status(201).json({savedMovie})
    }catch(error){
        console.error("Error in Create Movie controller",error)
        res.status(500).json({message:"Internal server error"})
    }
}
export async function updateMovie(req,res){
    try{
        const {movieTitle,cast,description,genre,runtime,releaseDate,director,budget,imdb_rating}=req.body
        const updatedMovie=await Movie.findByIdAndUpdate(req.params.id,{movieTitle,cast,description,genre,runtime,releaseDate,director,budget,imdb_rating},{new:true})
        if(!updatedMovie)return res.status(404).json({message:"Movie not Found"})
        res.status(200).json(updatedMovie)
    }catch(error){
        console.error("Error in updatedMovie controller",error)
        res.status(500).json({message:"Internal server Error"})
    }
}
export async function deleteMovie(req,res){
    try{
        const deletedMovie=await Movie.findByIdAndDelete(req.params.id)
        if(!deletedMovie)return  res.status(404).json({message:"Movie not Found"})
        res.status(200).json({message:"Movie Deleted Successfully"})
    }catch(error){
        console.error("Error in deleteMovie Controller",error)
        res.status(500).json({message:"Internal Server Error"})
    }
}