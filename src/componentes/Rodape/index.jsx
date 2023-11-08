import "./style.css";
import Logo from '../../assets/logo.png';
import iconeLinkedin from '../../assets/linkedin.png';


export default function Rodape(props) {

  return(
    <footer className={props.ehTemaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
      <img className="logorodape" src={Logo} alt="logomarca"/>
      <p className="paragrafo">
        Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.
      </p>
      <div className="iconesRodape">
        <img src={iconeLinkedin} alt="linkedin"/>
      </div>
      <div>
        <p className="copyright">Copyright 2022 &copy; <span>AdrielleJcds</span></p>
      </div>
    </footer>
  )
}