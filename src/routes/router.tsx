import {createBrowserRouter} from "react-router-dom";
import Home from  "./Home"
import Favorites from "./Favorites";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";
import Root from "./Root";

const router = createBrowserRouter ([{
    path: "/",
    element: <Root/>,
    errorElement: <NotFound />,
    children: [
        {
            path:"/Home",
            element:"<Home/>",
            children: [
                {
                   path:"/Homes/:HomeId",
                   element: <Home />,

                },
            
            ],

        },

        { path: "/", element: <Home /> },
        {path:"searchPage", element:<SearchPage/>},
        { path: "favorites", element: <Favorites /> },
        
        
    ],

},
])

export default router