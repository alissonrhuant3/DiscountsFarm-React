import Espacamento from 'componentes/Espacamento';
import style from './Login.module.css';
import React, { useEffect, useState } from 'react';
import { IJogos } from 'types/jogo';
import axios from 'axios';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { error } from 'console';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';

interface Props {
  setJogos: React.Dispatch<React.SetStateAction<IJogos>>
}

function FormularioJogo({ setJogos }: Props) {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [subTitulo, setSubTitulo] = useState('');
  const [promocao, setPromocao] = useState('');
  const [data, setData] = useState('');
  const [preco, setPreco] = useState(0);
  const [precoAnterior, setPrecoAnterior] = useState(0);
  const [porcentagemDesconto, setPorcentagemDesconto] = useState(0);
  const [urlJogo, setUrlJogo] = useState('');
  const [categoria, setCategoria] = useState<string | number>();
  const [urlImagem, setUrlImagem] = useState('');

  const parametro = useParams();

  useEffect(() => {
    if (parametro.id) {
      axios.get<IJogos>(`http://localhost:8082/discount/jogo/${parametro.id}/`)
        .then(resposta => {
          setTitulo(resposta.data.titulo);
          setSubTitulo(resposta.data.subTitulo);
          setPromocao(resposta.data.promocao);
          setData(resposta.data.data);
          setPreco(resposta.data.preco);
          setPrecoAnterior(resposta.data.precoAnterior);
          setPorcentagemDesconto(resposta.data.porcentagemDesconto);
          setUrlJogo(resposta.data.urlJogo);
          setUrlImagem(resposta.data.urlImagem);
        });
    }
  }, [parametro]);


  function adicionarJogo(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    if (parametro.id) {
      axios.put(`http://localhost:8082/discount/jogo/${parametro.id}/`, {
        titulo: titulo,
        subTitulo: subTitulo,
        promocao: promocao,
        data: data,
        preco: preco,
        precoAnterior: precoAnterior,
        categoria: categoria,
        urlImagem: urlImagem,
        urlJogo: urlJogo,
        porcentagemDesconto: porcentagemDesconto,
      })
        .then(() => {
          alert('Jogo Atualizado com sucesso!'),
          window.location.href = '/administrador';
        }
        );

    } else {
      axios.post('http://localhost:8082/discount/novoJogo', {
        titulo: titulo,
        subTitulo: subTitulo,
        promocao: promocao,
        data: data,
        preco: preco,
        precoAnterior: precoAnterior,
        categoria: categoria,
        urlImagem: urlImagem,
        urlJogo: urlJogo,
        porcentagemDesconto: porcentagemDesconto,
      })
        .then(() => {
          alert('Jogo Inserido com sucesso!'),
          window.location.href = '/administrador';
        }
        );
    }
  }

  return (
    <>
      {/* <div className={style.inserirjogo}>
        <h1>Bem vindo Usuário</h1>
        <form className={style.formulario} onSubmit={adicionarJogo}>
          <div>
            <div className={style.formulario__input} >
              <label htmlFor='titulo'>Titulo</label>
              <br />
              <input type="text" onChange={evento => setTitulo(evento.target.value)} placeholder='titulo do jogo' id='titulo' value={titulo} />
            </div>
            <div className={style.formulario__input}>
              <label htmlFor='subTitulo'>Sub Titulo</label>
              <br />
              <input type="text" onChange={evento => setSubTitulo(evento.target.value)} placeholder='Sub titulo do jogo' id='subTitulo' value={subTitulo} />
            </div>
          </div>
          <div>
            <div className={style.formulario__input}>
              <label htmlFor='promocao'>Promoção</label>
              <br />
              <input type="text" onChange={evento => setPromocao(evento.target.value)} placeholder='Promoção' id='promocao' value={promocao} />
            </div>
            <div className={style.formulario__input}>
              <label htmlFor='data'>Data</label>
              <br />
              <input type="text" onChange={evento => setData(evento.target.value)} placeholder='Data' id='data' value={data} />
            </div>
          </div>
          <div>
            <div className={style.formulario__input}>
              <label htmlFor='preco'>Preço</label>
              <br />
              <input type="text" onChange={evento => setPreco(parseInt(evento.target.value))} placeholder='Preço' id='preco' value={preco} />
            </div>
            <div className={style.formulario__input}>
              <label htmlFor='preco_anterior'>Preço anterior</label>
              <br />
              <input type="text" onChange={evento => setPrecoAnterior(parseInt(evento.target.value))} placeholder='Preço Anterior' id='preco_anterior' value={precoAnterior} />
            </div>
          </div>
          <div>
            <div className={style.formulario__input}>
              <label htmlFor='desconto'>Desconto</label>
              <br />
              <input type="text" onChange={evento => setPorcentagemDesconto(parseInt(evento.target.value))} placeholder='Desconto' id='desconto' value={porcentagemDesconto} />
            </div>
            <div className={style.formulario__input}>
              <label htmlFor='url'>URL do jogo</label>
              <br />
              <input type="text" onChange={evento => setUrlJogo(evento.target.value)} placeholder='insira URL' id='url' value={urlJogo} />
            </div>
          </div>
          <div>
            <div className={style.formulario__input}>
              <label htmlFor='categoria'> Categoria</label>
              <br />
              <input type="text" onChange={evento => setCategoria(parseInt(evento.target.value))} placeholder='insira uma categoria' id='categoria' value={categoria} />
            </div>
            <div className={style.formulario__input}>
              <label htmlFor='imagem'> URL da imagem</label>
              <br />
              <input type="text" onChange={evento => setUrlImagem(evento.target.value)} placeholder='insira Url da imagem' id='imagem' value={urlImagem} />
            </div>
          </div>
          <div>
            <button className={style.formulario__botao} type='submit'>Enviar</button>
          </div>
        </form>
      </div> */}
      <Box>
        <Container maxWidth='lg' sx={{ mt: 1 }}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
              <Typography component='h1' variant='h6' sx={{ color: 'black', fontSize: '2.25rem' }}>Formulario de Jogos</Typography>
              <Box component='form' onSubmit={adicionarJogo} sx={{ width: '100%', display: 'flex', justifyContent: 'center', columnGap: 8, flexWrap: 'wrap' }}>
                <TextField required type='text' id='titulo' value={titulo} onChange={evento => setTitulo(evento.target.value)} variant='standard' margin='dense' label='Titulo' sx={{ width: '25rem', height: 60 }}></TextField>
                <TextField required type='text' id='subTitulo' value={subTitulo} onChange={evento => setSubTitulo(evento.target.value)} variant='standard' margin='dense' label='Sub Titulo' sx={{ width: '25rem', height: 60 }}></TextField>
                <TextField required type='text' id='promocao' value={promocao} onChange={evento => setPromocao(evento.target.value)} variant='standard' margin='dense' label='Promoção' sx={{ width: '25rem', height: 60 }}></TextField>
                <TextField required type='string' helperText='DD/MM/YYYY' id='data' value={data} onChange={evento => setData(evento.target.value)} variant='standard' margin='dense' label='Data' sx={{ width: '25rem', height: 60 }}></TextField>
                <TextField required type='number' id='preco' value={preco} onChange={evento => setPreco(parseInt(evento.target.value))} variant='standard' margin='dense' label='Preço' sx={{ width: '12.5rem', height: 60 }}></TextField>
                <TextField required type='number' id='precoAnterior' value={precoAnterior} onChange={evento => setPrecoAnterior(parseInt(evento.target.value))} variant='standard' margin='dense' label='Preço Anterior' sx={{ width: '12.5rem', height: 60 }}></TextField>
                <TextField required type='number' id='porcentagemDesconto' value={porcentagemDesconto} onChange={evento => setPorcentagemDesconto(parseInt(evento.target.value))} variant='standard' margin='dense' label='Desconto' sx={{ width: '12.5rem', height: 60 }}></TextField>
                <TextField required type='text' id='urlJogo' value={urlJogo} onChange={evento => setUrlJogo(evento.target.value)} variant='standard' margin='dense' label='Insira a url do Jogo' sx={{ width: '25rem', height: 60 }}></TextField>
                <TextField required type='text' id='urlImagem' value={urlImagem} onChange={evento => setUrlImagem(evento.target.value)} variant='standard' margin='dense' label='Insira a url da imagem do jogo' sx={{ width: '25rem', height: 60 }}></TextField>

                <FormControl required sx={{ width: '25rem' }}>
                  <InputLabel id='select-categoria' >Categoria</InputLabel>
                  <Select type='number' labelId='select-categoria' value={categoria} onChange={evento => setCategoria(evento.target.value)}>
                    <MenuItem value='0'>Singleplayer</MenuItem>
                    <MenuItem value='1'>Multiplayer</MenuItem>
                    <MenuItem value='2'>Cooperativo</MenuItem>
                    <MenuItem value='3'>FPS</MenuItem>
                  </Select>
                </FormControl>

                <Button sx={{ width: 150, height: 50 }} type='submit' variant='outlined'>Salvar</Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default FormularioJogo;