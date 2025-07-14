import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Spinner from "./components/Spinner";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log(API_KEY);

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const searchMovies = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (data.response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovies([]);
        return;
      }
      setMovies(data.results);

      console.log(data);
    } catch (error) {
      setErrorMessage("Error fetching movies, please try again later.");
      console.log("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <main>
        <div className="pattern">
          <div className="wrapper">
            <header>
              <img src="./hero-img.png" alt="Hero Banner" />
              <h1>
                Find <span className="text-gradient">Movies</span> You'll Enjoy
                Without the Hassle
              </h1>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>
            <section className="all-movies">
              <h2 className="mt-10">All Movies</h2>
              {isLoading ? (
                <Spinner />
              ) : errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
              ) : (
                <ul>
                  {movies?.map((movie) => (
                    <p key={movie.id} className="text-white">
                      {movie.title}
                    </p>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
