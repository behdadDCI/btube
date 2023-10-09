import { useParams } from "react-router-dom";
import Movies from "../components/movies/Movies";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Movie from "../components/movies/Movie";

const MoviesPage = () => {
  const { setId } = useContext(AppContext);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setId(id!);
  }, [id, setId]);
  return <div>{id === undefined ? <Movies /> : <Movie />}</div>;
};

export default MoviesPage;
