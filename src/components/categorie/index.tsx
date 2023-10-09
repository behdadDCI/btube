import { getAllcategorie } from "../../data/categorie";
import { SiThemoviedatabase } from "react-icons/si";
const Categorie = () => {
  const categories = getAllcategorie();
  return (
    <div className="flex flex-col gap-4">
      <div className=" bg-SKY_900 rounded-lg shadow-sm shadow-SKY_800 flex my-12 items-center px-5">
      <SiThemoviedatabase className="w-8 h-8"/>
          <h3 className="text-2xl font-Viga px-5 py-3">Categorie</h3>
      
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((categorie, index) => (
          <div className=" relative w-full" key={index}>
            <img
              className="w-full rounded-3xl h-60"
              src={categorie.path}
              alt=""
            />

            <div className="text-3xl font-bold">
              <div className=" absolute w-fit bottom-10 left-10 md:bottom-16">
                <h3>{categorie.gener}</h3>
              </div>
              <div className="w-fit absolute bottom-10 right-10 md:left-10 md:bottom-6">
                <h3>{categorie.score}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorie;
