import { Character } from "../../typeCharacter"
import './style.css'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

function CardCharacter({name,target,troop,targetArea,image,trainingTime,houseSpace}:Character){

  const location = useLocation();

  return(
    <div className="card-character">
      <strong>{name}</strong>
      <div className="card-character-info">
        <div className="card-character-info-text">
          <p><img className='icon'src="https://static.wikia.nocookie.net/clashofclans/images/0/09/Target.png" alt=""/>{target}</p>
          <p><img className='icon' src="https://static.wikia.nocookie.net/clashofclans/images/4/43/Elixir.png" alt="" />{troop}</p>
          <p><img className='icon' src="https://static.wikia.nocookie.net/clashofclans/images/6/6a/Damage.png" alt="" />{targetArea}</p>
          {trainingTime && 
            <div>
            <hr style={{margin: '5px'}} />
            <span>
            <img className='icon' src="https://static.wikia.nocookie.net/clashofclans/images/c/c6/Stopwatch.png" alt="" />Tempo de treino :{trainingTime}
            </span>
            </div>
          }
          {houseSpace && <span><img className='icon' src="https://static.wikia.nocookie.net/clashofclans/images/2/21/Barracks16.png" alt="" />Espaço (Quartel): {houseSpace}</span> 
          }
          
          {location.pathname === '/' &&
            <Link
              to={`/character/${name}`}
            >
              <button>Mais Informações</button>
            </Link>
          }
        </div>
        <img className='character-img' src={image} alt={name} />
      </div>
    </div>
  )
}

export default CardCharacter

