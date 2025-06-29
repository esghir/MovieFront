import { fetchMockMovies, getRandomMockMovies } from './mockMovieService';

// Test the fetchMockMovies function
describe('fetchMockMovies', () => {
  test('returns all movies when no search term is provided', async () => {
    const result = await fetchMockMovies();
    expect(result).toHaveProperty('Search');
    expect(Array.isArray(result.Search)).toBe(true);
    expect(result.Search.length).toBeGreaterThan(0);
  });

  test('filters movies based on search term', async () => {
    const result = await fetchMockMovies('Batman');
    expect(result).toHaveProperty('Search');
    expect(Array.isArray(result.Search)).toBe(true);
    
    // All returned movies should contain 'Batman' in their title
    result.Search.forEach(movie => {
      expect(movie.Title.toLowerCase()).toContain('batman');
    });
  });

  test('returns empty array when no matches found', async () => {
    const result = await fetchMockMovies('NonExistentMovie');
    expect(result).toHaveProperty('Search');
    expect(Array.isArray(result.Search)).toBe(true);
    expect(result.Search.length).toBe(0);
  });
});

// Test the getRandomMockMovies function
describe('getRandomMockMovies', () => {
  test('returns the specified number of random movies', async () => {
    const count = 3;
    const result = await getRandomMockMovies(count);
    expect(result).toHaveProperty('Search');
    expect(Array.isArray(result.Search)).toBe(true);
    expect(result.Search.length).toBe(count);
  });

  test('returns different movies on subsequent calls', async () => {
    // This test might occasionally fail due to randomness, but it's unlikely
    const result1 = await getRandomMockMovies(2);
    const result2 = await getRandomMockMovies(2);
    
    // Check if at least one movie is different between the two calls
    const titles1 = result1.Search.map(movie => movie.Title);
    const titles2 = result2.Search.map(movie => movie.Title);
    
    // Either the first movies are different or the second movies are different
    const atLeastOneDifferent = 
      titles1[0] !== titles2[0] || 
      (titles1.length > 1 && titles2.length > 1 && titles1[1] !== titles2[1]);
    
    // This assertion might occasionally fail due to randomness
    expect(atLeastOneDifferent).toBe(true);
  });
});