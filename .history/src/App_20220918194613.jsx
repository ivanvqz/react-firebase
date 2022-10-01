import { useState } from 'react'
import {Home} from './views/Home'
import {Login} from './views/Login'
import { auth } from './firebase/credenciales'
import { onAuthStateChanged } from 'firebase/auth'//vigila los cambios de seciones
import './styles/tailwind.css'


export default function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, userFireBase => {
    if (userFireBase) {
      setUser(userFireBase)
    } else {
      setUser(null)
    }
  })

  return (
    <>
      {user ?
        <Home 
          user={ user } 
        />
        :
        <Login />
      }
    </>
  )
}