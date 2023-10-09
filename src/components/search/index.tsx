import React, { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AppContext } from "../../context/AppContext";

const Search = () => {
  const { searchInputValue,setSearchInputValue } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between bg-zinc-100 px-4 py-3 rounded-2xl w-96 border-2 border-PURPLE">
      <input
        className=" bg-transparent outline-none text-md font-Poppins placeholder-zinc-700 placeholder:focus:text-zinc-400 text-BACKGROUND text-lg font-bold"
        placeholder="I'm looking for..."
        value={searchInputValue}
        onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{
            setSearchInputValue(event.target.value)
            console.log(searchInputValue)
        }}
      />
      <BiSearchAlt2 className="w-6 h-6 text-BLUE_500" />
    </div>
  );
};

export default Search;
