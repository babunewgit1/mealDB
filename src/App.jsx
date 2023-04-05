import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home/Home";
import Food from "./components/Food/Food";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Catagory from "./components/Catagory/Catagory";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      loader: () =>
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
        },
        {
          path: "/food",
          element: <Food></Food>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/food/:id",
          element: <Details></Details>,
          loader: ({ params }) =>
            fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
            ),
        },
        { path: "/food", element: <Food></Food> },
        {
          path: "/cata/:item",
          element: <Catagory></Catagory>,
          loader: ({ params }) =>
            fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.item}`
            ),
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
