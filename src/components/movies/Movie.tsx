import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { getMovie } from "../../data/allMovies";

const Movie = () => {
  const { id } = useContext(AppContext);
  const movie = getMovie(id);
  if (movie) {
    return (
      <div className="w-full mt-12 flex flex-col justify-center items-center">
        <div className=" relative flex flex-col justify-center items-center  w-full lg:w-1/3 xl:w-1/4">
          <img
            className="rounded-3xl shadow-md shadow-PURPLE w-full"
            src={movie?.path}
            alt=""
          />
          <div className=" absolute shadow-sm shadow-black top-0 bg-zinc-600/90 rounded-3xl left-0 right-0 w-full ">
            <h3 className="text-2xl font-Viga text-center py-4">
              {movie.name}
            </h3>
          </div>
        
        </div>
        <div className="mt-12 bg-zinc-500 px-5 py-3 rounded-3xl w-full lg:w-1/2">
            <p>{movie.desc}</p>
          </div>
      </div>
    );
  } else return <div>Not Fount Movie</div>;
};

export default Movie;
