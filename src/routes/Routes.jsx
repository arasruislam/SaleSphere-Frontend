import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Account/Login";
import Product from "../pages/Product/Product";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/product",
            element: <Product />,
         },
      ],
   },
   {
      path: "login",
      element: <Login />,
   },
]);

export default router;
