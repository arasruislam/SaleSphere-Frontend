import {
   Button,
   Dropdown,
   DropdownAction,
   DropdownContent,
   DropdownList,
} from "keep-react";

import { BsShopWindow } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiTreeBranch } from "react-icons/gi";
import { FaTrashArrowUp } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
   return (
      <>
         <div className="px-4 space-y-4">
            {/* tob */}
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-2xl font-semibold">Products</h3>
               </div>
               <div className="flex items-center gap-4 z-50">
                  {/* Brands Dropdown */}
                  <Dropdown>
                     <DropdownAction asChild>
                        <Button
                           className="rounded-full tracking-wide flex items-center gap-2 border-gray-600"
                           variant="outline"
                        >
                           {" "}
                           <BsShopWindow className="text-green-500" /> Brands{" "}
                           <TiArrowSortedDown className="text-gray-500" />
                        </Button>
                     </DropdownAction>
                     <DropdownContent className="bg-gray-800 text-white h-60 ">
                        <DropdownList className="overflow-y-scroll space-y-2">
                           <p>Iphone</p>
                           <p>Samsung</p>
                           <p>Pixel</p>
                        </DropdownList>
                     </DropdownContent>
                  </Dropdown>

                  {/* Category Dropdown */}
                  <Dropdown>
                     <DropdownAction asChild>
                        <Button
                           className="rounded-full tracking-wide flex items-center gap-2 border-gray-600"
                           variant="outline"
                        >
                           {" "}
                           <GiTreeBranch className="text-green-500" /> Category{" "}
                           <TiArrowSortedDown className="text-gray-500" />
                        </Button>
                     </DropdownAction>
                     <DropdownContent className="bg-gray-800 text-white h-60 ">
                        <DropdownList className="overflow-y-scroll space-y-2">
                           <p>Iphone</p>
                           <p>Samsung</p>
                           <p>Pixel</p>
                        </DropdownList>
                     </DropdownContent>
                  </Dropdown>

                  {/* Add product button */}
                  <Button
                     className="rounded-full bg-green-500 text-white font-bold border-green-500 tracking-wide flex items-center gap-2"
                     variant="outline"
                  >
                     + Category
                  </Button>
               </div>
            </div>

            {/* bottom */}
            <div>
               <div className="overflow-x-scroll">
                  <table className="table text-white">
                     {/* head */}
                     <thead className="bg-gray-700 text-white">
                        <tr>
                           <th></th>
                           <th>Product ID</th>
                           <th>SKU</th>
                           <th>Product Name</th>
                           <th>Quantity</th>
                           <th>Price</th>
                           <th>Location</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="hover">
                           <th>
                              <div className="avatar">
                                 <div className="mask mask-squircle w-10">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                 </div>
                              </div>
                           </th>
                           <td>101</td>
                           <td>102391283</td>
                           <td>CTee</td>
                           <td>1200</td>
                           <td>20$</td>
                           <td>Dhaka</td>
                           <td className="flex items-center gap-4 mt-3">
                              <Link to="/product/add_product">
                                 <FaRegEdit
                                    size={20}
                                    className="text-green-500 cursor-pointer"
                                 />
                              </Link>
                              <FaTrashArrowUp
                                 size={20}
                                 onClick={() =>
                                    document
                                       .getElementById("delete")
                                       .showModal()
                                 }
                                 className="text-red-500 cursor-pointer"
                              />
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>

               {/* delete item popup */}
               <dialog
                  id="delete"
                  className="modal modal-bottom sm:modal-middle"
               >
                  <div className="modal-box">
                     <h3 className="font-bold text-lg">Hello!</h3>
                     <p className="py-4">
                        Press ESC key or click the button below to close
                     </p>
                     <div className="modal-action">
                        <form method="dialog">
                           {/* if there is a button in form, it will close the modal */}
                           <button className="btn">Close</button>
                        </form>
                     </div>
                  </div>
               </dialog>
            </div>

            {/* pagination */}
            <div className="join mt-6 text-center flex justify-center mx-auto">
               <button className="join-item btn">1</button>
               <button className="join-item btn">2</button>
               <button className="join-item btn btn-disabled">...</button>
               <button className="join-item btn">99</button>
               <button className="join-item btn">100</button>
            </div>
         </div>
      </>
   );
};

export default Product;
