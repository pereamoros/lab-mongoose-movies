const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrities-movies');

const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name : 'Nicolas Cage',
    occupation:  'actor',
    catchPhrase: 'Despite all my rage, I am still Nicolas Cage'
  },
  {
    name : 'Satanàs Jr.',
    occupation:  'fighter',
    catchPhrase: 'Sometimes, we have to look beyond what we want and do what\'s best.'
  },
  {
    name : 'Morty',
    occupation:  'adventurer',
    catchPhrase: 'Nobody exists on purpose, nobody belongs anywhere. We\'re all going to die. Come watch TV'
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((product) => {
    console.log(product.name)
  });
  mongoose.connection.close();
});