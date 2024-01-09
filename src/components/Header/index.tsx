import { useNavigate } from 'react-router'
import './style.css'
function Header(){
  const navigate = useNavigate();
  return(
    <header className='header'>
      <img onClick={()=>navigate('/')} src="src/images/clash-of-clans-logo.png" alt="clash of clans logo" />
    </header>
  )
}

export default Header