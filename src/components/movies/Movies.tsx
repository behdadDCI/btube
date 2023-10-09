import { BiCameraMovie } from "react-icons/bi";
import { getAllMovies } from "../../data/allMovies";
import Search from "../search";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { NavLink } from "react-router-dom";

const Movies = () => {
    const movies=getAllMovies()
    const{searchInputValue}=useContext(AppContext)
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-center">
                <Search />
            </div>
          <div className=" bg-SKY_900 rounded-lg shadow-sm shadow-SKY_800 flex my-12 items-center px-5">
          <BiCameraMovie className="w-8 h-8"/>
              <h3 className="text-2xl font-Viga px-5 py-3">All Movies in Archive</h3>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {movies.filter((movie)=>movie.name.toLowerCase().includes(searchInputValue.toLowerCase()) || movie.genre.toLowerCase().includes(searchInputValue))
            .map((movie, index) => (
              <NavLink to={`/movie/${movie.id}`} className=" relative w-full" key={index}>
                <img
                  className="w-full rounded-3xl h-60"
                  src={movie.path}
                  alt=""
                  
                />
   
                <div className="text-xl font-bold">
                  <div className=" absolute w-fit bottom-16 left-10 bg-zinc-500/80 px-3 py-2 rounded-lg mb-2">
                    <h3 className="">{movie.name}</h3>
                  </div>
                  <div className="w-fit absolute bottom-4 left-10 bg-zinc-600/80 px-3 py-2 rounded-lg">
                    <h3>{movie.genre}</h3>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      );
}

export default Movies;