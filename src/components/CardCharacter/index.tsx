import { Character } from "../../typeCharacter"

function CardCharacter({name,image,troop,target}:Character){
  return(
    <div className="card-character">
      <div className="card=character-info">
        <strong>{name}</strong>
        <p>{target}</p>
        <p>{troop}</p>
      </div>
      <img src={image} alt={name} />
    </div>
  )
}

export default CardCharacter

