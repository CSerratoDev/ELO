import { MdAttachMoney, MdFiberNew } from "react-icons/md"
import MobileCard from "./components/MobileCard/MobileCard"
import { BsBox2Heart } from "react-icons/bs"
import { FaHeart } from "react-icons/fa"
import Link from "next/link"
import { GiTakeMyMoney } from "react-icons/gi"
import { PiMoneyBold } from "react-icons/pi"

const transactions = [
    { id: 1, name: "Maquillaje", amount : 100, date: "2026-06-01" },
    { id: 2, name: "Pestañas", amount : 400, date: "2026-06-04" },
    { id: 3, name: "Uñas", amount : 500, date: "2026-06-05" },
    { id: 4, name: "ELF", amount : 200, date: "2026-06-02" },
    { id: 5, name: "NYX", amount : 300, date: "2026-06-03" },
    { id: 6, name: "Labial", amount : 600, date: "2026-06-06" },
]

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
                    <h1 className="title font-bold text-1xl">Transacciones Recientes</h1>
                    <Link href="/dashboard/transactions" className="title underline text-md">Ver más</Link>
                </div>
                <div id="separator"></div>
                <div className="transaction-list">
                    {transactions.map((transaction) => (
                        <article key={transaction.id} className="transaction-item">
                            <PiMoneyBold size={35} className="ml-3 text-pink-400 p-0.5" />
                            <div className="flex flex-col">
                                <h4 id="subtitle">{transaction.name}</h4>
                                <p id="date">{transaction.date}</p>
                            </div>
                            <p id="money">+${transaction.amount} mxn</p>
                        </article>
                    ))}
                </div>
            </article>
        </section>
    )
}