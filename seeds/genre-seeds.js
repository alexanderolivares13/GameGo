const { Genre } = require('../models');

const genreData = [
  {
    genre_name: 'Action',
  },
  {
    genre_name: 'Sports',
  },
  {
    genre_name: 'RPG',
  },
  {
    genre_name: 'Survival Horror',
  }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;
