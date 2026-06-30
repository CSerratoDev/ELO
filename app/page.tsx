"use client"
export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <main className="grid grid-cols-1 md:grid-cols-3 justify-center items-center h-screen w-screen">
        <section className="default flex-col text-center">
          <h1 id="title">ELO</h1>
          <span>Sistema para Emprendedores</span>
        </section>
        <section className="md:col-span-2 md:default md:gap-4 flex flex-col gap-6 h-full items-center pt-20 bg-white">
          <div className=" flex flex-col justify-center items-center gap-4 w-2/3">
            <button className="btn-pink">Iniciar sesión</button>
            <button className="btn-pink">¡Quiero una cuenta!</button>
          </div>
        </section>
      </main>
    </div>
  );
}
