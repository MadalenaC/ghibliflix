


interface MovieDetailsProps {
    title: string;
    originalTitle: string;
    originalTitleRomanised: string;
    runningTime: string;
    image: string;
    movie_banner: string;
  description: string;
  director: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  }


export function MovieDetails(props: MovieDetailsProps) {
    return(props);
     //   <div className="details">
     // <span>
     //   {props.originalTitleRomanised}  -
     //   {props.originalTitle}  -
     //  {props.runningTime} -
     //   {props.rt_score} -
     //   {props.release_date} -
     //   {props.director}
     // </span>
     // <div style={{backgroundColor: '#707070'}}>
     //   <img src={props.movie_banner} alt={props.title} />
     // </div>
    //</div>

    
}

export default MovieDetails;