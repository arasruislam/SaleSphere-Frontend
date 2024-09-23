import {
   Button,
   Checkbox,
   Dropdown,
   DropdownAction,
   DropdownContent,
   DropdownItem,
   DropdownList,
   TableHeader,
} from "keep-react";
import {
   Avatar,
   Badge,
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableRow,
} from "keep-react";

import {
   ArrowsDownUp,
   Calendar,
   CalendarBlank,
   Crown,
   Cube,
   CurrencyDollar,
   DotsNine,
   DotsThreeOutline,
   DotsThreeOutlineVertical,
   Flag,
   Funnel,
   NavigationArrow,
   Pencil,
   Plus,
   Spinner,
   Tag,
   Trash,
} from "phosphor-react";

import { BsShopWindow } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiTreeBranch } from "react-icons/gi";

const Product = () => {
   
   return (
      <>
         <div className="px-4 space-y-4">
            {/* tob */}
            <div className="flex justify-between items-center">
               <div>
                  <h3 className="text-2xl font-semibold">Products</h3>
               </div>
               <div className="flex items-center gap-4">
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
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>
                           <Checkbox />
                        </TableHead>
                        <TableHead>
                           <p className="flex w-[100px] items-center gap-1.5">
                              <ArrowsDownUp className="size-4 fill-metal-900 dark:fill-white" />
                              Type
                           </p>
                        </TableHead>
                        <TableHead>
                           <p className="flex w-[100px] items-center gap-1.5">
                              <Calendar className="size-4 fill-metal-900 dark:fill-white" />
                              Date
                           </p>
                        </TableHead>
                        <TableHead>
                           <p className="flex items-center gap-1.5">
                              <Flag className="size-4 fill-metal-900 dark:fill-white" />
                              Country
                           </p>
                        </TableHead>
                        <TableHead>
                           <p className="flex items-center gap-1.5">
                              <Spinner className="size-4 fill-metal-900 dark:fill-white" />
                              Status
                           </p>
                        </TableHead>
                        <TableHead>
                           <p className="flex items-center gap-1.5">
                              <DotsNine className="size-4 fill-metal-900 dark:fill-white" />
                              Quant.
                           </p>
                        </TableHead>
                        <TableHead>
                           <p className="flex w-[100px] items-center gap-1.5">
                              <CurrencyDollar className="size-4 fill-metal-900 dark:fill-white" />
                              Total Price
                           </p>
                        </TableHead>
                        <TableHead>
                           <p className="flex w-[120px] items-center gap-1.5">
                              <NavigationArrow className="size-4 fill-metal-900 dark:fill-white" />
                              Location
                           </p>
                        </TableHead>
                        <TableHead></TableHead>
                     </TableRow>
                  </TableHeader>
                  {/* <TableBody>
                     <TableRow key={item.id}>
                        <TableCell>
                           <Checkbox />
                        </TableCell>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>
                           <div>
                              <p>{item.date.day}</p>
                              <p className="text-body-5 font-normal text-metal-600 dark:text-metal-300">
                                 {item.date.time}
                              </p>
                           </div>
                        </TableCell>
                        <TableCell className="flex items-center justify-center">
                           <img src={item.country} alt="flag" />
                        </TableCell>
                        <TableCell>
                           <Badge
                              showIcon
                              className="text-body-4"
                              color={
                                 item.status === "Delivered"
                                    ? "success"
                                    : item.status === "In Transit"
                                    ? "error"
                                    : "warning"
                              }
                           >
                              {item.status}
                           </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                           {item.quant}
                        </TableCell>
                        <TableCell className="text-center">
                           {item.price.toLocaleString()}
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>
                           <Dropdown>
                              <DropdownAction asChild>
                                 <button>
                                    <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                                 </button>
                              </DropdownAction>
                              <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                                 <DropdownList>
                                    <DropdownItem>Edit</DropdownItem>
                                    <DropdownItem>Move</DropdownItem>
                                    <DropdownItem>Delete</DropdownItem>
                                 </DropdownList>
                              </DropdownContent>
                           </Dropdown>
                        </TableCell>
                     </TableRow>
                  </TableBody> */}
               </Table>
            </div>
         </div>
      </>
   );
};

export default Product;
