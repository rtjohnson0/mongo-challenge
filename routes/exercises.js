
/////////////////////////////////////////////
//// API endpoints for managing exercises //
///////////////////////////////////////////

const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// Your Challenge: Make five routes. Each will use mongojs methods
// to interact with your mongoDB database, as instructed below.
// You will be using express Router and Mongoose
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// 1. get all exercise logs on record
// GET: /
// ========================================
router.get("/", async (req, res) => {
    try{
    const exercise = await Exercise.find();
    res.send(exercise)
    }
    catch{
        return err
    }

})

// 2. add a new exercise log
// POST: /add
// ========================================

router.post("/add", async(req, res) => {
    try{
    const exercise = new Exercise(req.body)
    const result = await exercise.save()
    res.json(result)
    }
    catch{
        return err
    }
 

})
// 3. retrieve a specfic exercise log
// GET: /:id
// ========================================

router.get("/:id", async (req, res) => {
    try{
    const exercise = await Exercise.findById(req.params.id);
    res.send(exercise)
    }
    catch{
        return err
    }

})
// 4. delete a specfic exercise log
// DELETE: /:id
// ========================================
router.delete("/:id", async (req, res) => {
    try{
    const exercise = await Exercise.deleteOne({_id: req.params.id})
    
    res.send(exercise)
    }
    catch{
        return err
    }

})

// 5. retrieve a specific exercise log and update it 
// with information sent by client on req body
// POST: /update/:id
// ========================================
router.put("/update/:id", async (req, res) => {
    try{
    const exercise = await Exercise.findById(req.params.id)

    exercise.set(req.body)
    

        const result = await exercise.save()
        res.send(result)
    }
   
    
    catch(err){
        console.log(err)
    }

})



module.exports = router;