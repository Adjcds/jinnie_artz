import { useState } from 'react';
import Topo from './componentes/Topo';
import SecaoBanner from './componentes/SecaoBanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Artes from './componentes/Artes';
import Rodape from './componentes/Rodape';
import './App.css';

export default function App() {

	const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <main>
	    <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
      <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>
      <Artes ehTemaEscuro={ehTemaEscuro} />
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
		</main>
  );
}