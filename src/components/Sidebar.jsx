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
         <Link to={"/"} className="p-4 text-3xl text-center font-black">
            <span className="text-green-500">Sale</span>
            <span className="text-lime-500">Sphere</span>
         </Link>

         {/* Navigation Items */}
         <div className="flex-grow flex flex-col justify-center items-start space-y-4 pl-4">
            {/* staff */}
            <NavLink
               to="/staff"
               className={({ isActive }) =>
                  isActive
                     ? `nav-style border-b-2 border-green-500`
                     : `nav-style hover:border-b-2 hover:border-green-500`
               }
            >
               <LuUsers2 size={25} className="text-green-500" /> Staff
            </NavLink>
            {/* product */}
            <NavLink
               to="/product"
               className={({ isActive }) =>
                  isActive
                     ? `nav-style border-b-2 border-green-500`
                     : `nav-style hover:border-b-2 hover:border-green-500`
               }
            >
               <AiOutlineProduct size={25} className="text-green-500" />{" "}
               Products
            </NavLink>
            {/* brands */}
            <NavLink
               to="/brand"
               className={({ isActive }) =>
                  isActive
                     ? `nav-style border-b-2 border-green-500`
                     : `nav-style hover:border-b-2 hover:border-green-500`
               }
            >
               <BsShopWindow size={25} className="text-green-500" /> Brands
            </NavLink>

            {/* Categories */}
            <NavLink
               to="/categories"
               className={({ isActive }) =>
                  isActive
                     ? `nav-style border-b-2 border-green-500`
                     : `nav-style hover:border-b-2 hover:border-green-500`
               }
            >
               <GiTreeBranch size={25} className="text-green-500" /> Categories
            </NavLink>

            {/* Invoice */}
            <NavLink
               to="/invoice"
               className={({ isActive }) =>
                  isActive
                     ? `nav-style border-b-2 border-green-500`
                     : `nav-style hover:border-b-2 hover:border-green-500`
               }
            >
               <FaFileInvoiceDollar size={25} className="text-green-500" />{" "}
               Invoice
            </NavLink>

            {/* Suppliers */}
            <NavLink
               to="/suppliers"
               className={({ isActive }) =>
                  isActive
                     ? `nav-style border-b-2 border-green-500`
                     : `nav-style hover:border-b-2 hover:border-green-500`
               }
            >
               <PiVan size={25} className="text-green-500" /> Suppliers
            </NavLink>
         </div>
      </div>
   );
};

export default Sidebar;
