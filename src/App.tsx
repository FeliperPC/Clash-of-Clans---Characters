import './App.css'
import CardList from './pages/CardList'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import CharacterDescription from './pages/CharacterDescription'

import { troopList } from './data'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<CardList />}/>
        <Route path='/test' element={<CharacterDescription 
          name={troopList[0].name}
          image={troopList[0].image}
          troop={troopList[0].troop}
          description={troopList[0].description}
          target={troopList[0].target}
          targetArea={troopList[0].targetArea}
          houseSpace={troopList[0].houseSpace}
          trainingTime={troopList[0].trainingTime}
        />}/>
     </Routes>
    </div>
  )
}

export default App
