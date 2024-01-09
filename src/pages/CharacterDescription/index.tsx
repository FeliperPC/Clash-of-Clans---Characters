import CardCharacter from "../../components/CardCharacter"
import { troopList } from "../../data"
import './style.css'
import { useNavigate, useParams } from "react-router"

function CharacterDescription(){
  const param = useParams();
  
  const selectedCharacter = troopList.find((character)=>character.name === param.character);

  const navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }
  return(
    <div>
    {selectedCharacter &&
      <div className="description-page">
        <CardCharacter 
          name={selectedCharacter.name}
          image={selectedCharacter.image}
          troop = {selectedCharacter.troop}
          target ={selectedCharacter.target}
          targetArea ={selectedCharacter.targetArea}
          houseSpace={selectedCharacter.houseSpace}
          trainingTime={selectedCharacter.trainingTime}
          />
        <div className="desc">
          <h1>Descrição</h1>
          <p style={{textAlign:'center', padding:'5px'}}>{selectedCharacter.description}</p>
        </div>
        <button onClick={handleClick}>Voltar</button>
      </div>
    }
    </div>
  )
}

export default CharacterDescription