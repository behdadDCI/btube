import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <ul className="flex gap-8">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/movie"><li>Movies</li></NavLink>
        </ul>
    );
}

export default Menu;