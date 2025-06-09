import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function Folha() {
  const supabase = await createClient();
  const { data: dados_pj } = await supabase.from("dados_pj").select("id,nome,rg,cpf")


  return (
    <div className="bg-fuchsia-900 h-full w-full">
      <pre>{JSON.stringify(dados_pj, null, 2)}</pre>
    </div>
    

    /* 
    <section className="flex flex-col h-screen">
      <div className="custom-container flex flex-col">
        <div className="flex justify-center items-center text-4xl">
          <h1>Folha de Pagamento</h1>
        </div>
        <div className="flex justify-center gap-4 mb-4 p-4">
          <Link href="/">
            <button className="custom-button">Início</button>            
          </Link>
          <Link href="/folha/novo">
            <button className="custom-button">Novo Registro</button>
          </Link>
        </div>
        <div className="flex gap-4 float-left">
          <input type="text" placeholder="Pesquisar" className="custom-input" />
          <button className="custom-button">Pesquisar</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table id="myTable" className="min-w-full">
          <thead>
            <tr className="bg-fuchsia-900 sticky top-0">
              {dados_pj && dados_pj.length > 0 &&
                Object.keys(dados_pj[0]).map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-b">
                    {header}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {dados_pj?.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-fuchsia-300' : 'bg-fuchsia-400'}>
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b">
                    {value?.toString() ?? ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    */
  )
} 