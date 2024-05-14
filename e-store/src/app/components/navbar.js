import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div>
            <div className="flex gap-2 py-3 justify-center text-sm bg-black w-full text-white">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a className="underline" href="/" > ShopNow</a>
            </div>
            <div className="flex gap-10 items-center  mt-10 pb-6  justify-around border-b-[1.5px]">
                <div className="text-2xl font-bold">Exclusive</div>
                <div className="flex gap-12">
                    <div className="cursor-pointer hover:border-b-[1.5px]">Home</div>
                    <div className="cursor-pointer hover:border-b-[1.5px]">Contact</div>

                    <div className="cursor-pointer hover:border-b-[1.5px]"> About</div>

                    <div className="cursor-pointer hover:border-b-[1.5px]">Sign Up</div>

                </div>
                <div className="flex items-center gap-5">
                    <div className="relative flex"><input className="bg-[#F5F5F5] border-0 text-xs pl-4 pr-6 py-2 rounded-sm" placeholder="What are you looking for?" type="search"></input><IoSearchOutline className="text-black absolute right-2 top-1.5 h-5 w-5" /></div>
                    <div><CiHeart className="h-6 w-6" /></div>
                    <div><BsCart3 className="h-6 w-6" /></div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;