import ReactDOM from "react-dom/client";
import customRouter from "./routing";
import { RouterProvider } from "react-router-dom";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={customRouter}></RouterProvider>);
