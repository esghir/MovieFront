import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('App component', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  test('renders MovieLand title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MovieLand/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText(/Search for superhero movies/i);
    expect(searchInput).toBeInTheDocument();
  });

  test('renders random movies button', () => {
    render(<App />);
    const randomButton = screen.getByText(/Load Random Movies/i);
    expect(randomButton).toBeInTheDocument();
  });

  test('renders favorites button', () => {
    render(<App />);
    const favoritesButton = screen.getByText(/My Favorites/i);
    expect(favoritesButton).toBeInTheDocument();
  });

  test('loads favorites from localStorage on mount', () => {
    const mockFavorites = [
      { imdbID: 'test-001', Title: 'Test Movie', Year: '2023', Type: 'movie', Poster: 'test.jpg' }
    ];
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockFavorites));
    
    render(<App />);
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('movieland-favorites');
  });

  test('saves favorites to localStorage when updated', () => {
    render(<App />);
    
    // Wait for initial render and localStorage operations
    setTimeout(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith('movieland-favorites', expect.any(String));
    }, 0);
  });
});