import React, { useState } from 'react';
import style from './paginaprincipal.module.css';
import Slidee from 'componentes/Slidee';
import Filtros from 'componentes/FIltros';
import Conteudo from 'componentes/Conteudo';
import { Outlet } from 'react-router-dom';

function Principal() {
  const [filtro, setFiltro] = useState<number | null>(null);
  return (
    <div className={style.pagina}>
      <Filtros filtro={filtro} setFiltro={setFiltro} />
      <Conteudo filtro={filtro} />
    </div>
  );
}

export default Principal;
