import { useNavigate } from "react-router";
import './style.css'
function About () {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }
  return(
    <div className="about">
      <h1 className="item-about">Sobre</h1>
      <p className="item-about" style={{textAlign:'center'}}>Explore o fascinante universo do Clash of Clans com nosso guia abrangente de personagens. Navegue por uma extensa lista de guerreiros, heróis e criaturas místicas que habitam esse mundo estratégico de batalhas épicas.

      Em nosso site, você encontrará detalhes envolventes sobre cada personagem, incluindo suas habilidades únicas, estatísticas de combate e dicas estratégicas para aproveitar ao máximo cada unidade no campo de batalha. Seja você um veterano experiente ou um novato ansioso para descobrir, nosso guia é projetado para todos os entusiastas do Clash of Clans.

      Além disso, proporcionamos uma experiência interativa, permitindo que você pesquise seus personagens favoritos, descubra suas histórias e aprenda a melhor forma de integrá-los em suas estratégias de ataque e defesa.

      </p>
      <img className="item-about" src="https://supercell.com/images/18a9078361acbe63c736e523e183ee30/SUP3533_ClashonPC_October_2023_1920x1080.webp" alt="clash of clans" />

      <button onClick={handleClick}>Voltar</button>
    </div>
  )
}

export default About