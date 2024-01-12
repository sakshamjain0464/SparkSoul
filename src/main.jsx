import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Quotes from "./sections/Quotes/Quotes.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Inspiration from "./sections/Inspiration/Inspiration.jsx";
import Advice from "./sections/Advice/Advice.jsx";
import Error from "./sections/Error/Error.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/*",
      element: <App />,
      children: [
        {
          path: "",
          element: <Hero />,
        },
        {
          path: "quotes",
          element: <Quotes />,
        },
        {
          path: "inspiration",
          element: <Inspiration />,
        },
        {
          path: "advice",
          element: <Advice />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
