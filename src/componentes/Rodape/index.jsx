import "./style.css";
import Logo from '../../assets/logo.png';


export default function Rodape(props) {

  return(
    <footer className={props.ehTemaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
      <img className="logorodape" src={Logo} alt="logomarca"/>
      <p className="paragrafo">
      Em cada pixel, eu desenho o universo digital. Bem-vindo à Galaxia Artz, onde a criatividade encontra a tecnologia.
      </p>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>AdrielleJcds</span></p>
      </div>
    </footer>
  )
}