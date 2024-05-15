import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <div>
            <div className="flex justify-center my-20 gap-28">
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center"><div className="flex justify-center bg-gray-400 rounded-full w-max p-2">
                        <TbTruckDelivery className="bg-black text-white w-12 h-12 p-2 rounded-full" /></div></div>
                    <p className="flex justify-center mt-5 font-bold">FREE AND FAST DELIVERY</p>
                    <p className="flex justify-center text-xs">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center"><div className="flex justify-center bg-gray-400 rounded-full w-max p-2">
                        <BiSupport className="bg-black text-white w-12 h-12 p-2 rounded-full" /></div></div>
                    <p className="flex justify-center mt-5 font-bold">24/7 CUSTOMER SERVICE</p>
                    <p className="flex justify-center text-xs">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex justify-center"><div className="flex justify-center bg-gray-400 rounded-full w-max p-2">
                        <HiOutlineShieldCheck className="bg-black text-white w-12 h-12 p-2 rounded-full" /></div></div>
                    <p className="flex justify-center mt-5 font-bold">MONEY BACK GUARANTEE</p>
                    <p className="flex justify-center text-xs">We reurn money within 30 days</p>
                </div>
            </div>
            <div className="bg-black text-white py-5 justify-around flex">
                <div>
                    <div>Exclusive</div>
                    <div>Subscribe</div>
                    <div className="text-sm">Get 10% off your first order</div>
                    <div className="relative flex"><input className="bg-[#F5F5F5] text-black border-0 text-xs pl-4 pr-6 py-2 rounded-sm" placeholder="What are you looking for?" type="search"></input>
                    <IoSearchOutline className="text-black absolute right-2 top-1.5 h-5 w-5" /></div>

                </div>
                <div>
                    <div>Exclusive</div>
                    <div>Subscribe</div>
                    <div className="text-sm">Get 10% off your first order</div>
                    <div className="relative flex"><input className="bg-[#F5F5F5] text-black border-0 text-xs pl-4 pr-6 py-2 rounded-sm" placeholder="What are you looking for?" type="search"></input>
                    <IoSearchOutline className="text-black absolute right-2 top-1.5 h-5 w-5" /></div>

                </div>
                <div>
                    <div>Exclusive</div>
                    <div>Subscribe</div>
                    <div className="text-sm">Get 10% off your first order</div>
                    <div className="relative flex"><input className="bg-[#F5F5F5] text-black border-0 text-xs pl-4 pr-6 py-2 rounded-sm" placeholder="What are you looking for?" type="search"></input>
                    <IoSearchOutline className="text-black absolute right-2 top-1.5 h-5 w-5" /></div>

                </div>
                <div>
                    <div>Exclusive</div>
                    <div>Subscribe</div>
                    <div className="text-sm">Get 10% off your first order</div>
                    <div className="relative flex"><input className="bg-[#F5F5F5] text-black border-0 text-xs pl-4 pr-6 py-2 rounded-sm" placeholder="What are you looking for?" type="search"></input>
                    <IoSearchOutline className="text-black absolute right-2 top-1.5 h-5 w-5" /></div>

                </div>
            </div>
        </div>
    )
}