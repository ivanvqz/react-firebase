import {Home} from './views/Home'
import {Login} from './views/Login'
import './styles/tailwind.css'
import { useState } from 'react'
import { auth } from './firebase'
onA

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <>
      {user ? 
        <Home user={ user } /> 
        : 
        <Login />
      }
    </>
  )
}

export default App