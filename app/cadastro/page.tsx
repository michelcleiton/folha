import Link from "next/link";

export default function CadastrarFunc() {
  return (
    <section className="flex flex-col bg-white h-screen">
      <div className="custom-container flex justify-center">
      <Link href="/">
        <button className="custom-button">Ínicio</button>
      </Link>
      </div>
      <div className="flex flex-col justify-center items-center p-8 bg-white">
        <div className="flex flex-col bg-fuchsia-900 p-8 rounded-2xl border-2 border-black justify-center items-center w-80">
          <div className="custom-div-h1">
            <h1>Dados</h1>
          </div>
          <form className="flex flex-col gap-5 p-4 w-80" action="">
            <input type="text" name="name" placeholder="Nome" className="custom-input" />
            <input type="text" name="email" placeholder="Email" className="custom-input" />
            <input type="text" name="cnpj" placeholder="CNPJ" className="custom-input" />
            <button type="submit" className="custom-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}