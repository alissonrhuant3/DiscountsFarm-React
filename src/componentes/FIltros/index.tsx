import React, { useState } from 'react';
import style from './Filtros.module.css';
import filtros from './filtros.json';
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filtros({ filtro, setFiltro }: Props) {
  function selecionarFiltro(opcao: IOpcao) {
    if (filtro == opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }
  return (
    <div className={style.botoes}>
      {filtros.map((opcao) => (
        <button className={classNames({
          [style.botoes__item]: true,
          [style['botoes__item--active']]: filtro === opcao.id //Utilizando a Biblioteca classnames 
        })}
        key={opcao.id}
        onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}

    </div>
  );
}

export default Filtros;