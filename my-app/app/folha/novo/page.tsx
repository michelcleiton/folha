import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default function NovoPagamento() {
  async function handleSubmit(formData: FormData) {
    'use server'
    
    const supabase = await createClient();
    
    const novoDado = {
      nome: formData.get('nome'),
      cargo: formData.get('cpf'),
      rg: formData.get('rg'),
      endere: formData.get('endereco'),
      cidade: formData.get('bairro'),
      estado: formData.get('estado'),
    };

    const { error } = await supabase
      .from('dados_pj')
      .insert([novoDado]);

    if (error) {
      console.error('Erro ao inserir:', error);
      return;
    }

    revalidatePath('/folha');
    redirect('/folha');
  }

  return (
    <section className="flex flex-col min-h-screen bg-gray-50">
      <div className="custom-container flex flex-col">
      <h1 className="flex justify-center items-center text-4xl">
        Novo Registro de Pagamento
      </h1>
      </div>      
      <div className="flex justify-center mb-4 p-4">
        <Link href="/folha">
          <button className="custom-button">Voltar</button>
        </Link>
      </div>

      <div className="w-full max-w-2xl mx-auto text-black p-8 bg-white rounded-lg shadow-md">
        <form action={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="nome" className="text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="cpf" className="text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="rg" className="text-sm font-medium text-gray-700">
              RG
            </label>
            <input
              type="text"
              id="rg"
              name="rg"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="endereco" className="text-sm font-medium text-gray-700">
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="bairro" className="text-sm font-medium text-gray-700">
              Bairro
            </label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="cidade" className="text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="estado" className="text-sm font-medium text-gray-700">
              Estado
            </label>
            <input
              type="text"
              id="estado"
              name="estado"
              required
              className="p-2 border border-gray-300 rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-fuchsia-600 text-white py-2 px-4 rounded-md hover:bg-fuchsia-700 transition-colors"
          >
            Salvar
          </button>  


        </form>
      </div>
    </section>
  );
} 