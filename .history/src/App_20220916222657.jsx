import {Home} from './views/Home'
import {Login} from './views/Login'
import './styles/tailwind.css'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null)
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}

export default App