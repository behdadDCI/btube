import Categorie from "../components/categorie";
import Slider from "../components/slider";
import TopMovies from "../components/topMovies";

const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <Slider />
      </div>
      <div>
        <Categorie />
      </div>
      <div>
        <TopMovies />
      </div>
    </div>
  );
};

export default HomePage;
