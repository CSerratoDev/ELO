'use client'

import Image from "next/image"
import { GiQueenCrown } from "react-icons/gi"
import { MdSecurity } from "react-icons/md"
import { TbPencilHeart } from "react-icons/tb"

const profile = {id: 1, name: "Alejandra Chavéz", email: "elo@gmail.com", role: 'Emprendedora'}

export default function Profile() {
    return (
        <section className="flex flex-col justify-evenly gap-6">
            <div id="profile-info" className="flex flex-col gap-2">
                <div className="flex gap-2 items-center justify-center">
                    <h2>Tu Perfil Princesa</h2>
                    <GiQueenCrown size={30} />
                </div>
                <span id="mini-text">Aqui tienes la gestión de tu Perfil Princesa y preferencias de la cuenta.</span>
            </div>
            <div aria-label="profile" id="profile-card">                
                <div className="img-container">
                    <Image
                        src="/img/ella.png"
                        alt="profile picture"
                        width={100}
                        height={100}
                        className="profile-img"
                    />
                    <TbPencilHeart size={25}  id="edit-icon-2" />
                </div>
                <div aria-label="Datos del perfil" className="w-full flex flex-col justify-center items-center">
                    <h1 id="subtitle">{profile.name}</h1>
                    <h2 id="mini-text">{profile.role}</h2>
                    <form className="form-profile">
                        <label htmlFor="name">Nombre Completo</label>
                        <input type="text" id="name" name="name" value={profile.name}></input>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="text" id="email" name="email" value={profile.email}></input>
                        <button type="submit" className="btn-pink">Guardar Cambios</button>
                    </form>
                </div>
            </div>
            <div aria-label="seguridad" id="profile-card">
                <div className="flex gap-2">
                    <MdSecurity size={25} />
                    <h1 id="subtitle">Seguridad</h1>
                </div>
                <span id="mini-text">Gestiona tu contraseña mi vida.</span>
                <form className="form-profile">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="********"></input>
                    <label htmlFor="confirm-password">Confirmar Contraseña</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="********"></input>
                    <button type="submit" className="btn-pink">Guardar Cambios</button>
                </form>
            </div>
            <div aria-label="preferencias" id="profile-card">
                <div className="flex gap-2">
                    <h1 id="subtitle">Preferencias</h1>
                </div>
                <span id="mini-text">Gestiona tus temas e idioma corazón.</span>
                <form className="form-profile">
                    <label htmlFor="theme">Tema</label>
                    <select id="theme" name="Theme">
                        <option value="pink">Rosa Pastel</option>
                        <option value="blue">Azul Pastel</option>
                        <option value="white">Blanco</option>
                    </select>
                    <label htmlFor="language">Idioma</label>
                    <select id="language" name="language">
                        <option value="es">Español</option>
                        <option value="en">Inglés</option>
                    </select>
                    <button type="submit" className="btn-pink">Guardar Cambios</button>
                </form>
            </div>
        </section>
    )
}