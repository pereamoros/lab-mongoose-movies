const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
  const Celebrity = require('../models/celebrity'); 
  Celebrity.find({}, (err, result) => {
    if(err){
      next();
    }
    else{
      let celebrities = {
        celeb : result
      }
      res.render('celebrities/index', celebrities)
    }
  })
});
router.get('/:id', (req, res, next) => {
  const Celebrity = require('../models/celebrity'); 
  const celebrityId = req.8.id;
  console.log(celebrityId);
  Celebrity.findOne(celebrityId, (err, result) => {
    if(err){
      next();
    }
    else{
      let celebrity = {
        name,
        occupation,
        catchPhrase
      }
      res.redirect('celebrities/show', celebrity)
    }
  })
});

// router.get('/new', (req, res, next) => {
//   res.render('drones/new');
// });

// router.post('/', (req, res, next) => {
//   let newDrone = {
//     name : req.body.name,
//     propellers : req.body.propeller,
//     maxSpeed : req.body.maxspeed
//   }
  
//   const droneNew = new Drone(newDrone);

//   droneNew.save((err) => {
//     if (err) {
//       next();
//     } else {
//       res.redirect('drones');
//     }
//   });


// });

module.exports = router;
