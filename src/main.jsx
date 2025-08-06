import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./routes/Route.jsx";
import BooksDetailsContextProvider from "./context/BooksDetailsContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksDetailsContextProvider>
      <RouterProvider router={route} />
    </BooksDetailsContextProvider>
  </StrictMode>
);
