import DataProvider from "./providers/DataProvider.jsx";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import router from "./routes/Routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
   <>
      <DataProvider>
         <RouterProvider router={router} />
      </DataProvider>
   </>
);
