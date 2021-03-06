const express = require('express');

const Celebrity = require('../models/celebrity');

const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrity.find({}, (err, result) => {
    if(err){
      return next(err);
    }
    else{
      let celebrities = {
        celeb : result
      }
      res.render('celebrities/index', celebrities)
    }
  })
});

router.get('/new', (req, res, next) => {
  res.render('celebrities/new');
});

router.get('/:id/edit', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, result) => {
    if(err){
      return next(err);
    }
    let celebrity = {
      id : result.id,
      name : result.name,
      occupation : result.occupation ,
      quote : result.catchPhrase
    }
    res.render('celebrities/edit', celebrity);
  })
});

router.get('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findById(celebrityId, (err, result) => {
    if(err){
      return next(err);
    }
    let celebrity = {
      name : result.name,
      occupation : result.occupation ,
      catchPhrase : result.catchPhrase
    }
    res.render('celebrities/show', celebrity)
  })
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
      return next(err);
    }
    res.redirect('celebrities');
  });
});

router.post('/:id/delete', (req, res, next) => {
  const celebrityId = req.params.id;
  Celebrity.findByIdAndRemove(celebrityId, (err, result) => {
    if(err){
      return next(err);
    }
    res.redirect('/celebrities')
  })
});

router.post('/:id', (req, res, next) => {
  const celebrityId = req.params.id;
  let celebrity = {
    name : req.body.name,
    occupation : req.body.occupation ,
    quote : req.body.catchPhrase
  }
  Celebrity.findByIdAndUpdate(celebrityId, celebrity, (err, result) => {
    if(err){
      return next(err);
    }
    res.redirect('/celebrities')
  })
});

module.exports = router;
