import { BiCameraMovie } from "react-icons/bi";
import { getAllTopMovies } from "../../data/topMovies";

const TopMovies = () => {
    const topMovies=getAllTopMovies()
    return (
        <div className="flex flex-col gap-4">
          <div className=" bg-SKY_900 rounded-lg shadow-sm shadow-SKY_800 flex my-12 items-center px-5">
          <BiCameraMovie className="w-8 h-8"/>
              <h3 className="text-2xl font-Viga px-5 py-3">Top Movies 2023</h3>
          
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {topMovies.map((topMovie, index) => (
              <div className=" relative w-full" key={index}>
                <img
                  className="w-full rounded-3xl h-60"
                  src={topMovie.path}
                  alt=""
                />
    
                <div className="text-xl font-bold">
                  <div className=" absolute w-fit bottom-16 left-10 bg-zinc-500/80 px-3 py-2 rounded-lg mb-2">
                    <h3 className="">{topMovie.name}</h3>
                  </div>
                  <div className="w-fit absolute bottom-4 left-10 bg-zinc-600/80 px-3 py-2 rounded-lg">
                    <h3>{topMovie.genre}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default TopMovies;