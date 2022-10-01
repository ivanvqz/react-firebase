import { useState } from "react"


export const Login = () => {
    //para ver si se crea la cuenta o no
    const [isLogginIn, setIsLogginIn] = useState(false) 

    //metooo onclick para el boton
    const handleLogin = () => {
        setIsLogginIn(!isLogginIn)
    }
    return (
        <div>
            <h1>
                { 
                    isLogginIn 
                    ? 
                    "Iniciar seción" 
                    : (
                        "Crea una cuenta"
                    )
                }
            </h1>

            <form action="">
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" placeholder="username" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
                <button type="submit">{ isLogginIn ? "Accede" : "Regístrate" }</button>
            </form>
            <button onClick={handleLogin}>
                { isLogginIn ? "¿No tienes cuenta? Crea una" : "¿Ya tienes cuenta? Accede" }</button>
        </div>
    )
}
