import "./styles/style.module.scss";
import "./styles/header.scss";
import "./styles/movieList.scss";
import "./styles/page.scss";

import { api } from "./services/api";
import { useEffect, useState } from "react";
import { MovieCard } from "./components/MovieCard";
import { MovieDetails } from "./components/MovieDetails";

interface IFilmProps {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

export function App() {
  const [movies, setMovies] = useState<IFilmProps[]>([]);

  useEffect(() => {
    async function getList() {
      const response = await api.get("/films");
      const filmList: IFilmProps[] = response.data;
      setMovies(filmList);
    }
    getList();
  }, []);
  return (
    <div className="page">
      <div className="header">
        <span>Ghibliflix</span>
      </div>

      <div className="movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            originalTitle={movie.original_title}
            originalTitleRomanised={movie.original_title_romanised}
            runningTime={movie.running_time}
            image={movie.movie_banner}
            banner={movie.movie_banner}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
