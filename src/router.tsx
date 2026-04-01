import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import './index.css';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Home
    }
])