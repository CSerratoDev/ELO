'use client'
import { useState } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { GiQueenCrown } from "react-icons/gi";
import { PiMoneyBold } from "react-icons/pi";
import { RiBankFill } from "react-icons/ri";

const inventory = [
    { id: 1, name: "Labial ELF", quantity: 100, price: 100, img: "/img/1.png" },
    { id: 2, name: "Rimel ELF", quantity: 100, price: 200, img: "/img/2.png" },
    { id: 3, name: "Labial ELF", quantity: 100, price: 200, img: "/img/3.png" },
    { id: 4, name: "ELF", quantity: 100, price: 200, img: "/img/4.png" },
    { id: 5, name: "Labial NYX", quantity: 100, price: 250, img: "/img/5.png" },
    { id: 6, name: "Blush NYX", quantity: 100, price: 400, img: "/img/6.png" },
    { id: 7, name: "Gel para cejas", quantity: 100, price: 80, img: "/img/7.png" },
]

type PaymentMethod = 'cash' | 'card' | 'transfer';

export default function Sales() {
    const [quantity, setQuantity] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash');

    const total = 0;

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    return (
        <section className="flex flex-col justify-evenly gap-6">
            <div id="profile-info" className="flex flex-col gap-2">
                <div className="flex gap-2 items-center justify-center">
                    <h2>Nueva Venta</h2>
                    <GiQueenCrown size={30} />
                </div>
                <span id="mini-text">Aqui llevaras el registro de tus ventas corazón</span>
            </div>
            <div aria-label="seguridad" id="profile-card">
                <div className="flex gap-2">
                    <FiPlusCircle size={25} />
                    <h1 id="subtitle">Nueva venta</h1>
                </div>
                <form className="form-profile">
                    <label htmlFor="product">Producto</label>
                    <select id="theme" name="Theme">
                        {inventory.map((item) => (
                            <option
                                key={item.id}
                                value={item.name}>
                                {item.name}
                            </option>
                        ))}
                    </select>

                    <div aria-label="count">
                        <label htmlFor="count">Cantidad</label>
                        <div className="quantity-control">
                            <button
                                type="button"
                                onClick={decreaseQuantity}>
                                -
                            </button>
                            <strong>{quantity}</strong>
                            <button
                                type="button"
                                onClick={increaseQuantity}>
                                +
                            </button>
                        </div>
                    </div>
                    <div aria-label="methods">
                        <label htmlFor="count">Método de Pago</label>
                        <div className="payment-grid">
                            <button
                                type="button"
                                className={`payment-option ${paymentMethod === "cash" ? "active" : ""
                                    }`}
                                onClick={() => setPaymentMethod("cash")}
                            >
                                <PiMoneyBold size={25} />
                                <span id="mini-text">Efectivo</span>
                            </button>
                            <button
                                type="button"
                                className={`payment-option ${paymentMethod === "card" ? "active" : ""
                                    }`}
                                onClick={() => setPaymentMethod("card")}
                            >
                                <FaRegCreditCard size={25}/>
                                    <span id="mini-text">Tarjeta</span>
                            </button>
                            <button
                                type="button"
                                className={`payment-option ${paymentMethod === "transfer" ? "active" : ""
                                    }`}
                                onClick={() => setPaymentMethod("transfer")}
                            >
                                <RiBankFill size={25} />
                                    <span id="mini-text">Transfer</span>
                            </button>
                        </div>
                    </div>

                    <div className="total-box">
                        <span>Total a pagar</span>
                        <strong>${total.toFixed(2)}</strong>
                    </div>

                    <button
                        type="submit"
                        className="btn-pink">
                            Registrar Venta
                    </button>
                </form>
            </div>
        </section>
    )
}