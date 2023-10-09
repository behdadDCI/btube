import {PiFilmStripBold} from "react-icons/pi"
import {BsFillCalendarDateFill} from "react-icons/bs"
import {IoMdClock} from "react-icons/io"
const Slider = () => {
    return (
        <div className=" relative  ">
          <div className="shadow-sm shadow-zinc-600 rounded-2xl">
          <img className="w-full h-[500px] rounded-2xl" src="../public/images/John-Wick-3.jpg " alt="" />
          </div>
          <div className=" absolute flex left-10  bottom-32 text-md font-bold items-center gap-4">
                <div className="flex items-center gap-2">
                    <PiFilmStripBold className="text-BLUE_500 w-6 h-6"/>
                    <p>Action/Thriller</p>
                </div>
                <div className="flex items-center gap-2">
                    <BsFillCalendarDateFill className="text-BLUE_500 w-6 h-6"/>
                    <p>2019</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoMdClock className="text-BLUE_500 w-6 h-6"/>
                    <p>2h 11m</p>
                </div>
                <div className="flex items-center gap-2 bg-BLUE_500 py-1 px-2 rounded-lg">
                   4K
                </div>
          </div>
          <div className=" absolute left-10 bottom-16 xl:bottom-10 font-bold">
            <h2 className="text-lg md:text-xl xl:text-6xl">John Wick: Chapter 3 - Parabellun</h2>
          </div>
        </div>
    );
}

export default Slider;