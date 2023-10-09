import Logo from "./brand";
import Menu from "./menu";
import Login from "./signIn";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-12">
        <div><Logo /></div>
        <div><Menu /></div>
      </div>
      <div className="flex justify-center gap-12 items-center">
        <div><Login /></div>
      </div>
    </header>
  );
};

export default Header;
