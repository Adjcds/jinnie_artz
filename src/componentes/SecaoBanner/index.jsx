import React from 'react';

import './style.css'

export default function SecaoBanner(props) {

  return(
    <section id="secaoBanner">
      <div id="imagemDeFundo" className={props.ehTemaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}></div>
      <div className="texto-secaoBanner">
        <p>Design Gráfico / UI / UX / Front-End</p>
        <h2>Criação Digital</h2>
        <span>e Identidade</span>
        <br>
        </br>
        <br>
        </br>
        <div class="icons">
         <a href="https://www.instagram.com/galaxia_artz" target="_blank" rel="noreferrer" class="Instagram">Instagram</a>
                </div>
      </div>
    </section>
  )
}