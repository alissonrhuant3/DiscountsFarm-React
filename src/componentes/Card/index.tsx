import React from 'react';
import style from './Card.module.css';
import conteudo from './card.json';
import { IJogos } from 'types/jogo';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';

function Card(props: IJogos) {
  const { id, titulo, categoria, data, urlImagem, urlJogo, porcentagemDesconto, preco, precoAnterior, promocao, subTitulo, usuario } = props;

  const excluir = (jogo: IJogos) => {
    axios.delete(`http://localhost:8082/discount/delete/${jogo.id}/`)
      .then(() => {
        alert(`Voce excluiu o Jogo ${jogo.titulo}`);
      });
  };

  if (usuario === 'admin') {
    return (
      <>
        <div className={style.paiConteudo}>
          <div className={style.paiConteudo__card}>
            <div className={style.paiConteudo__card_image}>
              <a target='_blank' rel='noreferrer' href={urlJogo}>
                <img src={urlImagem} alt={`imagem de capa do jogo ${titulo}`} />
              </a>
            </div>
            <h3 className={style.conteudo_titulo}>{titulo}</h3>
            <h5 className={style.conteudo_subTitulo}>{subTitulo}</h5>
            <div className={style.conteudo_promocao}><span>{promocao}</span></div>
            <div className={style.conteudo_data}><span>{data}</span></div>
            <div className={style.conteudo_precos}>
              <div className={style.desconto}>
                <h5>R$ {preco.toFixed(2)}</h5>
              </div>
              <div className={style.precoOriginal}>
                <span id={style.precoAnterior}> R$ {precoAnterior.toFixed(2)}</span>
                <span id={style.porcentagemDesconto}> -{porcentagemDesconto}%</span>
              </div>
            </div>
            <div className={style.paiConteudo__card_administrador}>
              <button onClick={() => excluir(props)}>Excluir</button>
              <button><Link to={`/administrador/jogos/${id}`}>Editar</Link></button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={style.paiConteudo}>
        <div className={style.paiConteudo__card}>
          <div className={style.paiConteudo__card_image}>
            <a target='_blank' rel="noreferrer" href={urlJogo}>
              <img src={urlImagem} alt="Foto capa Battlefield2 Company" />
            </a>
          </div>
          <h3 className={style.conteudo_titulo}>{titulo}</h3>
          <h5 className={style.conteudo_subTitulo}>{subTitulo}</h5>
          <div className={style.conteudo_promocao}><span>{promocao}</span></div>
          <div className={style.conteudo_data}><span>{data}</span></div>
          <div className={style.conteudo_precos}>
            <div className={style.desconto}>
              <h5>R$ {preco.toFixed(2)}</h5>
            </div>
            <div className={style.precoOriginal}>
              <span id={style.precoAnterior}> R$ {precoAnterior.toFixed(2)}</span>
              <span id={style.porcentagemDesconto}> -{porcentagemDesconto}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;