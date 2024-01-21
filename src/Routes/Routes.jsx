import Home from "../Pages/Home/Home";
import Blog from "../Pages/Extra/Blog/Blog";
import SingleBlog from "../Pages/Extra/Blog/SingleBlog";
import About from "../Pages/Extra/About/About";
import Services from "../Pages/Services/Services";
import SingleService from "../Pages/Services/SingleService";

import DisplayError from "../Pages/Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
        path: "/Services/:name",
        loader: async ({ params }) =>
          fetch(
            `https://doc-service-server-mocha.vercel.app/services/${params.name}`
          ),
        element: <SingleService></SingleService>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog></SingleBlog>,
        loader: async ({ params }) =>
          fetch(
            `https://doc-service-server-mocha.vercel.app/blogs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
