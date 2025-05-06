import { nanoid } from 'nanoid';
import logo from './assets/logo.svg';
import { useState } from 'react';
import Item from './components/Item';

export type Item = {
  id: string;
  nome: string;
  quantidade: string;
  comprado: boolean;
}



function App() {
  const [items, setItems] = useState<Item[]>([
    {id: nanoid(), nome: 'Leite Integral', quantidade: '3 caixas', comprado: false},
    {id: nanoid(), nome: 'Maça', quantidade: '500g', comprado: true},
    {id: nanoid(), nome: 'Café', quantidade: '1 pacote', comprado: true}

  ]);

  console.log(items);

  const itemComprado = items.filter(item => item.comprado);
  const itemNaoComprado = items.filter(item => !item.comprado);


  
  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <form className="flex gap-2">
        <div className="flex-shrink">
          <label htmlFor="name" className="block text-xs text-slate-400">
            Item
          </label>
          <input
            type="text"
            id="name"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <div className="flex-shrink">
          <label htmlFor="quantity" className="block text-xs text-slate-400">
            Quantidade
          </label>
          <input
            type="text"
            id="quantity"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <button className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
          +
        </button>
      </form>
      <section className="mt-10 space-y-3 ">
        {itemNaoComprado.map(item => (
          <Item item={item} />
        ))}

        
      </section>
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        {itemComprado.map(item => (
          <Item item={item} />
        ))}
      </section>
    </main>
  );
}

export default App;
