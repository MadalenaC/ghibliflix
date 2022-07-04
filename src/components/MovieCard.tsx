import "../styles/movieList.scss";

interface MovieListProps {
  title: string;
  originalTitle: string;
  originalTitleRomanised: string;
  runningTime: string;
  image: string;
  banner: string;
}

export function MovieCard(props: MovieListProps) {
  return (
    <div className="card" style={{backgroundImage: `url(${props.banner})`}}>
      <div className="opacity">
        <span>
          {props.originalTitleRomanised}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
