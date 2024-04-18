import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RajvirPlots from "./pages/RajvirPlots.jsx";
import YashPark from "./pages/YashPark.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ProjectLayout from "./pages/ProjectLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />} />
      <Route path="/about" element={<About />} />

      {/* <Route path="/rajvirplots" element={<RajvirPlots />} /> */}
      {/* <Route path="/yashpark" element={<YashPark />} /> */}

      <Route path="/:project" element={<ProjectLayout />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
