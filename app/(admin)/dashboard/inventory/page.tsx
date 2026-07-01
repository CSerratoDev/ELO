import Image from "next/image"
import { TbPencilHeart } from "react-icons/tb"

const inventory = [
    {id: 1, name: "Labial ELF", quantity: 100, price: 100, img: "/img/1.png"},
    {id: 2, name: "Rimel ELF", quantity: 100, price: 200, img: "/img/2.png"},
    {id: 3, name: "Labial ELF", quantity: 100, price: 200, img: "/img/3.png"},
    {id: 4, name: "ELF", quantity: 100, price: 200, img: "/img/4.png"},
    {id: 5, name: "Labial NYX", quantity: 100, price: 250, img: "/img/5.png"},
    {id: 6, name: "Blush NYX", quantity: 100, price: 400, img: "/img/6.png"},
    {id: 7, name: "Gel para cejas", quantity: 100, price: 80, img: "/img/7.png"},
]

export default function Inventory() {
    return (
        <section className="flex flex-col justify-evenly gap-6">
            <div aria-label="inventory" className="h-200 bg-white p-6 rounded-2xl">
                <div className="flex justify-between items-center">
                    <h1 className="title font-bold text-1xl">Inventario</h1>
                    <span id="mini-text">Aqui esta tu inventario mi vida</span>
                </div>
                <div id="separator"></div>
                <div className="inventory-list">
                    {inventory.map((item) => (
                        <article key={item.id} className="inventory-item">
                            <TbPencilHeart size={25}  id="edit-icon" />
                            <Image 
                                src={item.img} 
                                alt={item.name} 
                                width={50} 
                                height={50} 
                                className="product-img"
                            />
                            <div className="product-info">
                                <h4 id="subtitle">{item.name}</h4>
                                <p id="date">Cantidad: {item.quantity}</p>
                                <p id="money">${item.price} mxn</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}