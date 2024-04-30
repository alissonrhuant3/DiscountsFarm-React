import React, { useEffect, useState } from 'react';
import style from './conteudo.module.css';
import Card from '../Card';
// import conteudo from '../Card/card.json';
import Espacamento from 'componentes/Espacamento';
import axios from 'axios';
import { IJogos } from 'types/jogo';

interface Props {
  filtro: number | null,
  usuario?: string,
}

function Conteudo(props: Props,) {
  const [lista, setLista] = useState<IJogos[]>([]);
  const { filtro, usuario } = props;

  function testarFiltro(categoria: number) {
    if (filtro !== null) return filtro === categoria;
    return true;
  }

  useEffect(() => {
    // Obter jogos
    axios.get('http://localhost:8082/discount')
      .then(resposta => {
        setLista(resposta.data);
      });
  }, []);

  // useEffect(() => {
  //   const novaLista = lista.filter(item =>testarFiltro(item.categoria));
  //   setLista(novaLista);
  // }, [ filtro]);

  return (
    <>
      <Espacamento />
      <Espacamento />
      {/* <div className={style.input}>
        <form action="">
          <input value={busca} onChange={evento => setBusca(evento.target.value)} type="text" />
        </form>
      </div> */}
      <section className={style.secao}>
        <div className={style.secao__titulo}>
          <h2>Games</h2>
        </div>
        <div className={style.secao__conteudo}>
          {lista.map(jogo => (
            <Card
              key={jogo.id}
              usuario={usuario}
              {...jogo}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Conteudo;