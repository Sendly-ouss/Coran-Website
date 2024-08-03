import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Surah from "./Pages/Surah/Surah.jsx";
import Reciters from "./Pages/Reciters/Reciters.jsx";
import AudioReciter from "./Pages/AudioReciter/AudioReciter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/surah/:id",
    element: <Surah />,
  },
  {
    path: "/reciters",
    element: <Reciters />,
  },
  {
    path: "/reciters/:id",
    element: <AudioReciter />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
