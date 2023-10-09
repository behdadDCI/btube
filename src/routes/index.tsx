import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";

const router=createBrowserRouter([
    {
        path:"/",
        element:<App />,
        errorElement:<div>Not Found Page</div>,
        children:[
            {
                path:"/",
                element:<HomePage />,
            },
            {
                path:"/home",
                element:<HomePage />,
            },
            {
                path:"/movie",
                element:<MoviesPage />,
            },
            {
                path:"/movie/:id",
                element:<MoviesPage />,
            },
        ]
    }
])

export default router