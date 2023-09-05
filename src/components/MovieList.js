import {Link} from react-router-dom


const MovieList = ({movies}) => {
      const renderMovies = Object.keys(movies).map((movieID) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ));
    return ( <div>{renderMovies}
    </div> );
}
 
export default MovieList;