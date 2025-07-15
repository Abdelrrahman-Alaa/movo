# Movo

A modern movie search and discovery app built with React, Vite, Tailwind CSS, and Appwrite. Movo lets you search for movies, view trending titles, and see detailed information about each film—all with a beautiful, responsive UI.

## Features

- 🔍 **Search for Movies:** Instantly search for movies using the Movie Database API.
- 📈 **Trending Movies:** Displays the top 5 trending movies based on user searches (tracked via Appwrite backend).
- 🎬 **Movie Details:** View movie posters, ratings, release year, and language.
- ⚡ **Fast & Responsive:** Built with Vite and styled using Tailwind CSS for a snappy, modern experience.
- ☁️ **Appwrite Integration:** Tracks search popularity and trending movies using Appwrite's database.

## Screenshots

> _Add screenshots here if desired._

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd movo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Usage

- Use the search bar to find movies by title.
- Trending movies (most searched) are displayed at the top.
- Click on a movie card to view its details (poster, rating, language, year).

## Project Structure

```
├── public/           # Static assets (images, icons)
├── src/
│   ├── components/   # React components (MovieCard, Search, Spinner)
│   ├── appwrite.js   # Appwrite integration logic
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # App entry point
│   └── index.css     # Tailwind and custom styles
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

## Environment Variables

| Variable                 | Description                      |
| ------------------------ | -------------------------------- |
| VITE_API_KEY             | TMDb API Bearer token            |
| VITE_APPWRITE_PROJECT_ID | Appwrite project ID              |
| VITE_DATABASE_ID         | Appwrite database ID             |
| VITE_COLLECTION_ID       | Appwrite collection ID           |
| VITE_APPWRITE_ENDPOINT   | Appwrite endpoint URL (with /v1) |

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [The Movie Database API](https://www.themoviedb.org/documentation/api)

## License

MIT
