import { Outlet } from "react-router-dom";

const Main = () => {
   return (
      <>
         <div className="min-h-[calc(100vh-124px)] pt-24 mb-8">
            <Outlet />
         </div>
      </>
   );
};

export default Main;