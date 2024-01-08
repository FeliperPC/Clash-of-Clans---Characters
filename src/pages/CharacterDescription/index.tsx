import { Character } from "../../typeCharacter"
import CardCharacter from "../../components/CardCharacter"
import './style.css'

function CharacterDescription({name,image,troop,target,targetArea,houseSpace,trainingTime,description}:Character){
  return(
    <div className="description-page">
      <CardCharacter 
          name={name}
          image={image}
          troop = {troop}
          target ={target}
          targetArea ={targetArea}
          houseSpace={houseSpace}
          trainingTime={trainingTime}
        />
        <div className="desc">
          <h1>Descrição</h1>
          <p style={{textAlign:'center', padding:'5px'}}>{description}</p>
        </div>
    </div>
  )
}

export default CharacterDescription