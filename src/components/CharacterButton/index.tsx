import './style.css'
import { Character } from '../../typeCharacter';

function CharacterButton({name,image,characterPreview}:Character){
  function handleClick(name:string){
    if(characterPreview) characterPreview(name);
  }
  return(
      <button 
        className="btn-character"
        onClick={()=>handleClick(name)}
      >
        {name}
        <img src={image}alt={name} />
      </button>
  )
}

export default CharacterButton


