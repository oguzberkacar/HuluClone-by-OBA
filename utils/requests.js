
const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchTV: {
    title: 'TV',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10765`,
  },
    fetchWestern: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
    },
    fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    },
    fetchDocumentary: {
    title: 'Documentary',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    },
    fetchAdventure: {
    title: 'Adventure',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`,
    },
    fetchFantasy: {
    title: 'Fantasy',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
    },
    fetchSuspense: {
    title: 'Suspense',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10759`,
    },
    fetchThriller: {
    title: 'Thriller',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`,
    },
};
