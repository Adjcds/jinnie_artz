import './style.css'


export default function Artes(props) {

    return(
    <footer className={props.ehTemaEscuro ? 'artes-modo-escuro' : 'artes-modo-claro'}>
    <section className="secao-nossos-sabores">
    <img src="/src/assets/kreewhait.png" alt="Emotes Kreewhait" />
    <div className="texto-secao-nossos-sabores">
    <h2>Emotes Twitch</h2>
    <span>Talon e Simples</span>
    <p>
    Como artista , tenho o prazer de criar emoticons personalizados, trazendo um toque único ao canal de Kreewhait. Cada emote é uma representação artística, adicionando personalidade e diversão às transmissões.
    </p>
    <a href="" className="Twitch" target="_blank" rel="noreferrer" >Twitch</a>
   </div>
  </section>

  <section className="secao-nossos-eventos">
  <div className="texto-secao-nossos-eventos">
    <h2>Ilustrações</h2>
    <span>Galaxia_artz</span>
    <p>
    Minha jornada como ilustradora me permite criar ilustrações cativantes, adicionando um toque único à estética visual do meu perfil Galaxia_artz.
    </p>
    
    <a href="" className="Instagram" target="_blank" rel="noreferrer" >Instagram</a>
  </div>
  <img src="assets/talin.png" alt="Emotes talon" />
  </section>

 <section className="secao-sobre-nos">
<img src="assets/3.png" alt="Emotes Wesker" />
<div className="texto-secao-sobre-nos">
  <h2>Emotes Twitch</h2>
  <span>Wesker</span>
  <p>
  Emoticons baseados no personagem Wesker de Resident Evil, crio emotes que acrescentam uma dose de ação e mistério às transmissões de Luhk.
  </p>
  <a href="" className="Twitch" target="_blank" rel="noreferrer"> Twitch</a>
</div>
 </section>
</footer>
 )
}
