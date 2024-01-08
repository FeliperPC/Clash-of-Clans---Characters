import { troopList } from "../../data"
import CharacterButton from "../../components/CharacterButton"
import CardCharacter from "../../components/CardCharacter"
import './style.css'
import { useState } from "react"
import { Character } from "../../typeCharacter"

function CardList (){
  const [cardCharacter,setCardCharacter] = useState<Character>(troopList[0])
  
  function characterPreview(name:string) {
    const selectedCharacter = troopList.find((character)=>character.name ===name);
    if(selectedCharacter)setCardCharacter(selectedCharacter);
  }

  return( 
    <div className="main-content">
      <CardCharacter 
        name={cardCharacter.name}
        image={cardCharacter.image}
        troop={cardCharacter.troop}
        targetArea={cardCharacter.targetArea}
        target={cardCharacter.target}
      />
      <div className="card-list">
      {troopList.map((character)=>(
        <CharacterButton key={character.name}
          name = {character.name} 
          image={character.image}
          characterPreview={characterPreview}
        />
      ))}
      </div>
    </div>
  )
}

export default CardList