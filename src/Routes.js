import Espacamento from 'componentes/Espacamento';
import Header from 'componentes/Header';
import NotFound from 'componentes/NotFound';
import Principal from 'Pages/Principal';
import PaginaPadrao from 'Pages/PaginaPadrao';
import Rodape from 'componentes/Rodape';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminJogos from 'Pages/Administrador/AdminJogos';
import FormularioJogo from 'Pages/FormularioJogo';

function AppRoutes() {
  return (
    <main className='container'>
      <Router>
        <Espacamento />
        <Header />
        <Espacamento />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Principal />}></Route>
            <Route path='administrador' element={<AdminJogos />}></Route>
            <Route path='administrador/jogos' element={<FormularioJogo />}></Route>
            <Route path='administrador/jogos/:id' element={<FormularioJogo />}></Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Espacamento />
        <Rodape />
      </Router>
    </main>
  );
}

export default AppRoutes;