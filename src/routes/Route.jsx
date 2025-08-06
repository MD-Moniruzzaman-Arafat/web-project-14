import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import { fetchBooks } from "../fetchData";
import BooksDetailsPage from "../pages/BooksDetailsPage";
import ListedBooks from "../pages/ListedBooks";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: fetchBooks,
      },
      {
        path: "/books-details",
        element: <BooksDetailsPage />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
    ],
  },
]);

export default route;
