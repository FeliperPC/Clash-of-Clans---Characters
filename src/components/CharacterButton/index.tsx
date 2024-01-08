import './style.css'

function CharacterButton({characterName,characterImg}:Record<string,string>){
  return(
    <div>
      <button className="btn-character">
        {characterName}
        <img src={characterImg}alt={characterName} />
      </button>
    </div>
  )
}

export default CharacterButton


