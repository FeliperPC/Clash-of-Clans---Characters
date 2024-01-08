import { Character } from "../../typeCharacter"
import './style.css'

function CardCharacter({name,image,troop,target,targetArea}:Character){
  return(
    <div className="card-character">
      <strong>{name}</strong>
      <div className="card-character-info">
        <div className="card-character-info-text">
          <p><img className='icon'src="https://static.wikia.nocookie.net/clashofclans/images/0/09/Target.png" alt=""/>{target}</p>
          <p><img className='icon' src="https://static.wikia.nocookie.net/clashofclans/images/4/43/Elixir.png" alt="" />{troop}</p>
          <p><img className='icon' src="https://static.wikia.nocookie.net/clashofclans/images/6/6a/Damage.png" alt="" />{targetArea}</p>
        </div>
        <img className='character-img' src={image} alt={name} />
      </div>
    </div>
  )
}

export default CardCharacter

