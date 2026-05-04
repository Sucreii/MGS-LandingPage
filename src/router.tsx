import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import './index.css';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path: "/about-us",
        Component: AboutUs
    }
])