const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
   
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
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, result) => {
    if(err){
      next();
    }
    else{
      let celebrity = {
        name : result.name,
        occupation : result.occupation ,
        catchPhrase : result.catchPhrase
      }
      res.render('celebrities/show', celebrity)
    }
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', (req, res, next) => {
  let newCelebrity = {
    name : req.body.name,
    occupation : req.body.occupation,
    catchPhrase : req.body.quote
  }
  const celebAdd = new Celebrity(newCelebrity);
  celebAdd.save((err) => {
    if (err) {
      next();
    } else {
      res.redirect('celebrities');
    }
  });
});

router.post('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, result) => {
    if(err){
      next();
    }
    else{
      res.redirect('/celebrities')
    }
  })
});

module.exports = router;
