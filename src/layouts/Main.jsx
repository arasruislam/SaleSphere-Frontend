import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Main = () => {
   return (
      <>
         <section className="min-h-screen grid  lg:grid-cols-[1fr,4fr] relative">
            {/* <Sidebar /> */}
            <Sidebar />

            <div className="py-20">
               <Outlet />
            </div>
         </section>
      </>
   );
};

export default Main;
