import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Login from './Login';
import SignUp from './SignUp';
import Root from './Root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./Loginn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/SignUp",
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);