import { AiOutlineProduct } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GrHomeOption } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { PiMoneyBold } from "react-icons/pi";

import Link from "next/link";

const DASH_BASE_PATH = "/dashboard";

const navItems = [
    {
        href: `${DASH_BASE_PATH}/settings`,
        label: 'Configuracion',
        icon: <IoIosSettings size={30} />
    }, 
    {
        href: `${DASH_BASE_PATH}/sales`,
        label: 'Venta',
        icon: <PiMoneyBold size={30}/>
    },
    {
        href: `${DASH_BASE_PATH}/`,
        label: 'Inicio',
        icon: <GrHomeOption size={40}/>
    },
    {
        href: `${DASH_BASE_PATH}/inventory`,
        label: 'Inventario',
        icon: <AiOutlineProduct size={30}/>
    },
    {
        href: `${DASH_BASE_PATH}/profile`,
        label: 'Perfil',
        icon: <FaRegUser size={25}/>
    },
];

export default function Navbar() {
    return (
        <header id="navbar" className="">
            <nav aria-label="Navegacion">
                {
                    navItems.map(({href, label, icon}) => (
                        <Link key={href} href={href}>
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}