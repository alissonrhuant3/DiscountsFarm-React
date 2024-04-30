import Conteudo from 'componentes/Conteudo';
import Filtros from 'componentes/FIltros';
import { useState } from 'react';

function AdminJogos() {
  const [filtro, setFiltro] = useState<number | null>(null);


  return (
    <>
      <Filtros filtro={filtro} setFiltro={setFiltro} />
      <Conteudo usuario={'admin'} filtro={filtro}/>
    </>
  );
}

export default AdminJogos;