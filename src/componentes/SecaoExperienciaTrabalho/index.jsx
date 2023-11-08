import './style.css';
import Card from "../Card";

export default function SecaoExperienciaTrabalho(props) {

  return (
    <section id="secaoExpDeTrab" className={props.ehTemaEscuro ? "secao-modo-escuro" : "secao-modo-claro"}>
      <div id="container-texto" className={props.ehTemaEscuro ? "container-texto-modo-escuro" : "container-texto-modo-claro"}>
        <h2>Experiências</h2>
        <p>
        Experiência de longa data no mercado de artes digitais desde cedo: Desde os 15 anos, forneço serviços autônomos na criação de panfletos, cartazes digitais de festas e mais, sempre buscando inovações em design. Atualmente, uso minhas habilidades artísticas para criar desenhos digitais e compartilhar minha paixão por artes digitais.
        </p>
      </div>
      <div className="container-cards">
        <Card
		ehTemaEscuro={props.ehTemaEscuro}
		data="Desde 2018"
		titulo="Design e Photoshop"
		empresa="Autônoma"
		paragrafo="Como designer autônoma apaixonada pelo que faz, sou movida pela criatividade e pelo desejo constante de transformar ideias em experiências visuais significativas. Com uma abordagem única e orientada para o usuário, mergulho profundamente nos projetos, buscando entender as necessidades e desejos dos clientes para criar soluções que realmente ressoem com seu público-alvo. "
        />
        <Card
		ehTemaEscuro={props.ehTemaEscuro}
          data="Desde de Janeiro 2023"
          titulo="Ilustradora"
          empresa="Galaxia_artz"
          paragrafo="Ser uma ilustradora e artista para streamers é uma oportunidade única de combinar paixões criativas com o mundo digital e do entretenimento. Desde a criação de emoticons e overlays exclusivos até ilustrações ao vivo durante as transmissões, meu trabalho contribui diretamente para enriquecer a experiência visual dos espectadores. "
        />
        <Card
		ehTemaEscuro={props.ehTemaEscuro}
  data="Desde de Dezembro 2022"
         titulo="Web designer"
         empresa="Autônoma"
          paragrafo="Durante o curso de UX Design com foco no uso da ferramenta Figma, desenvolvi um projeto centrado na criação de um site de anotações compartilháveis. durante o curso oferecido pela DevMedia sobre desenvolvimento de Front-End, tive a oportunidade de aprofundar meus conhecimentos na construção de interfaces web modernas e responsivas. Durante este projeto, explorei técnicas avançadas de HTML, CSS, Javacript e React"
        />
      </div>
    </section>
  );
}