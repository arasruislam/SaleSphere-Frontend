import { Link, NavLink } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { GiTreeBranch } from "react-icons/gi";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { PiVan } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";

const Sidebar = () => {
   return (
      <div className="flex flex-col h-screen bg-gray-800 text-white border-r border-gray-600">
         {/* Logo Section */}
         <Link to={'/'} className="p-4 text-3xl text-center font-black">
            <span className="text-green-500">Sale</span>
            <span className="text-lime-500">Sphere</span>
         </Link>

         {/* Navigation Items */}
         <div className="flex-grow flex flex-col justify-center items-start space-y-4 pl-4">
            <NavLink className="text-white text-lg uppercase tracking-wide flex items-center gap-4  hover:border-b-2 hover:border-green-500 transition-all duration-100 w-full pb-2">
               <LuUsers2 size={25} className="text-green-500" /> Staff
            </NavLink>
            <NavLink className="text-white text-lg uppercase tracking-wide flex items-center gap-4 hover:border-b-2 hover:border-green-500 transition-all duration-100 w-full pb-2">
               <AiOutlineProduct size={25} className="text-green-500" />{" "}
               Products
            </NavLink>
            <NavLink className="text-white text-lg uppercase tracking-wide flex items-center gap-4 hover:border-b-2 hover:border-green-500 transition-all duration-100 w-full pb-2">
               <BsShopWindow size={25} className="text-green-500" /> Brands
            </NavLink>
            <NavLink className="text-white text-lg uppercase tracking-wide flex items-center gap-4 hover:border-b-2 hover:border-green-500 transition-all duration-100 w-full pb-2">
               <GiTreeBranch size={25} className="text-green-500" /> Categories
            </NavLink>
            <NavLink className="text-white text-lg uppercase tracking-wide flex items-center gap-4 hover:border-b-2 hover:border-green-500 transition-all duration-100 w-full pb-2">
               <FaFileInvoiceDollar size={25} className="text-green-500" />{" "}
               Invoice
            </NavLink>
            <NavLink className="text-white text-lg uppercase tracking-wide flex items-center gap-4 hover:border-b-2 hover:border-green-500 transition-all duration-100 w-full pb-2">
               <PiVan size={25} className="text-green-500" /> Suppliers
            </NavLink>
         </div>
      </div>
   );
};

export default Sidebar;
