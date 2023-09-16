const express = require('express');
const Movie = require('../schemas/movie');
const router = express.Router();
router.get("/",async (req,res)=>{
    const movies = await Movie.find({});
    res.send(movies);
});

router.post("/",async (req,res)=>{
     const body = req.body;
    const newMovie = new Movie({
        title:body.title,
        description:body.description,
        year:body.year,
        rate:body.rate
    });
    newMovie.save();
    res.send(newMovie);
});

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    if(!id){
        res.send({error:true,message:"id not defined"});
        return;
    }
    const movie = await Movie.findOneAndUpdate({_id:id},{...body},{new:true});
    res.send(movie);

})

router.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    if(!id){
        res.send({error:true,message:"id not defined"});
        return;
    }
    await Movie.findByIdAndDelete(id);
    res.send("deleted successfully");
});

module.exports = router;