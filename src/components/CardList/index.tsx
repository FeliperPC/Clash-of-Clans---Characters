import { troopList } from "../../data"
import CharacterButton from "../CharacterButton"
function CardList (){
  return(
    <div className="card-list">
    {troopList.map((character)=>(
      <CharacterButton characterName = {character.name} 
      characterImg={character.image}/>
    ))}
    </div>
  )
}

export default CardList