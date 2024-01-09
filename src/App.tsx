import './App.css'
import CardList from './pages/CardList'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'
import CharacterDescription from './pages/CharacterDescription'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'

function App() {
  return (
    <div className='App'>
      <Header />
      <Menu/>
      <Routes>
        <Route path='/' element={<CardList />}/>
        <Route path='/character/:character' element={<CharacterDescription/>}/>
        <Route path='/*' element={<NotFound/>}/>
     </Routes>
    </div>
  )
}

export default App
