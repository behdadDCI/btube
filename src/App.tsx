import { Outlet } from "react-router-dom";
import Header from "./components/header";


const App = () => {
  return (
    <div className="wrapper bg-gray-900 min-h-screen text-FOREGROUND">
      <div className="container px-5">
        <div className="flex flex-col">
          <div className="py-12 text-xl font-Viga">
            <Header />
          </div>
        </div>
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default App;
