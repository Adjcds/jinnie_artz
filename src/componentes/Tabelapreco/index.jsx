import React from 'react';
import './style.css'

export default function Tabela(props) {
    return(
      <section id="tabela" className={props.ehTemaEscuro ? "tabela-modo-escuro" : "tabela-modo-claro"}>
        <div id="tabela" className={props.ehTemaEscuro ? 'tabela-modo-escuro' : 'tabela-modo-claro'}>
    <div class="tabela">
      <h2>Tabela de Preços</h2>
      <br>
      </br>
      <p>Os preços estão sujeitos a alterações caso seja necessário acrescentar arte adicional, como Desenho Digital.</p>
      <br>
      </br>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Preço por Unidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Emote</td>
            <td>R$ 8,00</td>
          </tr>
          <tr>
            <td>Painel Twitch</td>
            <td>R$ 8,00</td>
          </tr>
          <tr>
            <td>Capa YouTube</td>
            <td>R$ 20,00</td>
          </tr>
          <tr>
            <td>Logo simples</td>
            <td>R$ 10,00</td>
          </tr>
          <tr>
            <td>Cartão digital</td>
            <td>R$ 20,00</td>
          </tr>
          <tr>
            <td>Desenho digital</td>
            <td>R$ 10,00</td>
          </tr>
        </tbody>
        
      </table>
    </div>
    </div>
    </section>
  );

}

