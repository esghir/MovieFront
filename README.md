# 🎬 MovieLand

A beautiful React application for browsing and saving your favorite superhero movies.

![MovieLand Screenshot](https://i.imgur.com/example.png)

## ✨ Features

- **Sky Blue Theme**: A refreshing and modern UI with a "bleu ciel" color scheme
- **Movie Search**: Search for superhero movies by title
- **Random Movies**: Load random superhero movies with a single click
- **Favorites System**: Save your favorite movies to watch later
- **Persistent Storage**: Your favorites are saved in local storage and persist between sessions
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movieland.git
   cd movieland
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🔧 Usage

### Searching for Movies

1. Type a movie title in the search bar
2. Press Enter or click the search icon
3. Results will display matching superhero movies

### Loading Random Movies

1. Click the "Load Random Movies" button to display a selection of random superhero movies

### Managing Favorites

1. Click the heart icon on any movie card to add it to your favorites
2. Click the heart icon again to remove it from favorites
3. Click the "My Favorites" button to view all your saved movies
4. Your favorites are automatically saved to your browser's local storage

## 🧩 Project Structure

```
movieland/
├── public/                  # Public assets
├── src/                     # Source files
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   ├── MovieCard.jsx        # Movie card component
│   ├── mockMovieService.js  # Mock API service for movie data
│   ├── search.svg           # Search icon
│   ├── heart.svg            # Favorite icon
│   └── index.js             # Application entry point
└── package.json             # Project dependencies and scripts
```

## 🎨 Customization

### Changing the Theme

You can modify the color scheme by editing the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #87CEEB;    /* Sky blue (bleu ciel) */
  --secondary-color: #4682B4;  /* Steel blue - darker shade */
  --text-color: #2c3e50;       /* Dark blue text */
  --accent-color: #3498db;     /* Accent blue */
  --light-color: #ecf0f1;      /* Light background */
  --card-bg: #ffffff;          /* Card background */
  --hover-color: #d6eaf8;      /* Light blue for hover effects */
}
```

### Adding More Movies

You can add more movies to the collection by editing the `mockMovies` array in `src/mockMovieService.js`.

## 📱 Mobile Support

MovieLand is fully responsive and works on various screen sizes:

- Desktop: Full experience with multiple columns of movie cards
- Tablet: Adjusted layout with fewer columns
- Mobile: Single column layout with optimized controls

## 🔄 Future Improvements

- User authentication system
- Movie ratings and reviews
- Advanced filtering options
- Movie details page with additional information
- Dark/light theme toggle

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Movie data and images sourced from various public APIs
- Icons from Feather Icons
- Font families: Roboto Slab and Raleway

---

Made with ❤️ by [Your Name]
