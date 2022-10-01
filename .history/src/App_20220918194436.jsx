import {Home} from './views/Home'
import {Login} from './views/Login'
import './styles/tailwind.css'
import { useState } from 'react'
import { auth } from './firebase/credenciales'
import { onAuthStateChanged } from 'firebase/auth'//vigila los cambios de seciones


export default function App( {} ) {

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