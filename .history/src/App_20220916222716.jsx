import {Home} from './views/Home'
import {Login} from './views/Login'
import './styles/tailwind.css'
import { useState } from 'react'

const App = () => {

  const [user, setUser] = useState(null)
  return (
    {user ? <Home /> : <Login />}
  )
}

export default App