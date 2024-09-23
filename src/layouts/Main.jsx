import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Main = () => {
   return (
      <>
         <section className="min-h-screen grid  lg:grid-cols-[1fr,4fr] relative">
            {/* <Sidebar /> */}
            <Sidebar />

            <div>
               {/* navbar */}
               <Navbar />

               {/* outlet */}
               <div className="py-10">
                  <Outlet />
               </div>
            </div>
         </section>
      </>
   );
};

export default Main;
