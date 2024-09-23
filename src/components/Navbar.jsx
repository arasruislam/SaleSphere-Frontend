import { LuBellRing } from "react-icons/lu";

const Navbar = () => {
   return (
      <nav className="bg-gray-800 py-2 px-4 border-b border-gray-600">
         <div className="container mx-auto flex justify-end items-center">
            {/* Icon and Avatar Section */}
            <div className="flex items-center space-x-6">
               <LuBellRing className="text-white text-2xl" />
               <div className="avatar online">
                  <div className="w-12 rounded-full">
                     <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
