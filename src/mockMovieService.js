// Mock movie data with superhero movies and Google image URLs
const mockMovies = [
  {
    imdbID: "mock-001",
    Year: "2013",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    Title: "Man of Steel",
    Type: "movie"
  },
  {
    imdbID: "mock-002",
    Year: "2022",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
    Title: "The Batman",
    Type: "movie"
  },
  {
    imdbID: "mock-003",
    Year: "2021",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Spider-Man: No Way Home",
    Type: "movie"
  },
  {
    imdbID: "mock-004",
    Year: "2017",
    Poster: "https://m.media-amazon.com/images/M/MV5BNWVhZTBjYjYtODcxOS00MWVmLWI5Y2QtMDM2MmY5MmEyN2FjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Wonder Woman",
    Type: "movie"
  },
  {
    imdbID: "mock-005",
    Year: "2018",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Title: "Black Panther",
    Type: "movie"
  },
  {
    imdbID: "mock-006",
    Year: "2019",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    Title: "Avengers: Endgame",
    Type: "movie"
  },
  {
    imdbID: "mock-007",
    Year: "2011",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MjM0Nw@@._V1_SX300.jpg",
    Title: "Captain America: The First Avenger",
    Type: "movie"
  },
  {
    imdbID: "mock-008",
    Year: "2016",
    Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie"
  },
  {
    imdbID: "mock-009",
    Year: "2021",
    Poster: "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    Title: "Zack Snyder's Justice League",
    Type: "movie"
  },
  {
    imdbID: "mock-010",
    Year: "2018",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Title: "The Avengers",
    Type: "movie"
  }
];

/**
 * Mock function to simulate fetching movies
 * @param {string} searchTerm - The search term for movies
 * @returns {Promise} - A promise that resolves to mock movie data
 */
export const fetchMockMovies = (searchTerm = "") => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      if (!searchTerm) {
        // Return all movies if no search term
        resolve({ Search: mockMovies });
      } else {
        // Filter movies based on search term
        const filteredMovies = mockMovies.filter(movie => 
          movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        resolve({ Search: filteredMovies });
      }
    }, 300); // 300ms delay to simulate network request
  });
};

/**
 * Get random movies from the mock data
 * @param {number} count - Number of random movies to return
 * @returns {Promise} - A promise that resolves to random mock movies
 */
export const getRandomMockMovies = (count = 3) => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      // Shuffle the array and take the first 'count' elements
      const shuffled = [...mockMovies].sort(() => 0.5 - Math.random());
      const randomMovies = shuffled.slice(0, count);
      resolve({ Search: randomMovies });
    }, 300);
  });
};