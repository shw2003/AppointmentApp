import Home from "../Pages/Home/Home";
import Blog from "../Pages/Extra/Blog/Blog";
import About from "../Pages/Extra/About/About";
import Services from "../Pages/Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/Services",
        element: <Services></Services>,
      },

      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
