// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default App;