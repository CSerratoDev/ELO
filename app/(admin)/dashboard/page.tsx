import { MdAttachMoney, MdFiberNew } from "react-icons/md"
import MobileCard from "./components/MobileCard/MobileCard"
import { BsBox2Heart } from "react-icons/bs"
import { FaHeart } from "react-icons/fa"
import Link from "next/link"

export default function Dashboard() {
    return (
        <section className="flex flex-col justify-evenly gap-6">
            <div aria-label="welcome" className="relative mt-10 flex flex-col justify-center items-center text-left">
                <h1 className="title font-bold text-4xl">¡Hola Bienvenida Amor!</h1>
                <FaHeart size={30} className="text-pink-400 absolute right-6"/>
            </div>
            <div aria-label="cards" className="flex flex-col gap-6">
                <MobileCard
                    icon={<MdAttachMoney size={30}/>}
                    title="Total de ventas"
                    description="Ventas totales del Emprendimiento"
                />

                <MobileCard
                    icon={<MdFiberNew size={30}/>}
                    title="Nuevas ventas"
                    description="Ventas de HOY"
                />

                <MobileCard
                    icon={<BsBox2Heart size={30} />}
                    title="Nuevos pedidos"
                    description="Resumen de pedido"
                />
            </div>
            <article aria-label="transactions" className="h-200 bg-white p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                    <h1 className="title font-bold text-1xl">Recent Transactions</h1>
                    <Link href="/dashboard/transactions" className="title underline text-md">Ver más</Link>
                </div>
                <div className="separator"></div>
                <div>

                </div>
            </article>
        </section>
    )
}