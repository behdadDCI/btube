import {ImBlogger} from "react-icons/im"
const Logo = () => {
    return (
        <div className="flex gap-1 items-center">
            <div>
                <ImBlogger className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-BLUE_400 text-2xl">Tube</h3>
            </div>
        </div>
    );
}

export default Logo;