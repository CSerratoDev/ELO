import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrHomeOption } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { PiMoneyBold } from "react-icons/pi";

export default function Navbar() {
    return(
        <header id="navbar" className="">
            <nav>
                <a href=""><IoIosSettings/></a>
                <a href=""><PiMoneyBold/></a>
                <a href=""><GrHomeOption/></a>
                <a href=""><AiOutlineProduct/></a>
                <a href=""><FaRegUser/></a>
            </nav>
        </header>
    )
}