const API_KEY = '03c401eef8db0902a7c4f144fd59f09e';

export default API_KEY;

const genresData = [
  {
    id: 28,
    genre: 'Action'
  },
  {
    id: 12,
    genre: 'Adventure'
  },
  {
    id: 16,
    genre: 'Animation'
  },
  {
    id: 35,
    genre: 'Comedy'
  },
  {
    id: 80,
    genre: 'Crime'
  },
  {
    id: 99,
    genre: 'Documentary'
  },
  {
    id: 18,
    genre: 'Drama'
  },
  {
    id: 10751,
    genre: 'Family'
  },
  {
    id: 14,
    genre: 'Fantasy'
  },
  {
    id: 36,
    genre: 'History'
  },
  {
    id: 27,
    genre: 'Horror'
  },
  {
    id: 10402,
    genre: 'Music'
  },
  {
    id: 9648,
    genre: 'Mystery'
  },
  {
    id: 10749,
    genre: 'Romance'
  },
  {
    id: 878,
    genre: 'Science Fiction'
  },
  {
    id: 10770,
    genre: 'TV Movie'
  },
  {
    id: 53,
    genre: 'Thriller'
  },
  {
    id: 10752,
    genre: 'War'
  },
  {
    id: 37,
    genre: 'Western'
  }
];

export const generateGenre = id => {
  const genreName = genresData.filter(obj => Object.values(obj).includes(id))[0]
    .genre;
  return [genreName, id];
};

export const addCommas = intNum =>
  (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,');

///////$RECYCLE

const genreObj = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
};

export const generateGenreName = id => {
  return genreObj[id];
};
