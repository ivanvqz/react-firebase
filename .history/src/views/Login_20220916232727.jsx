import { useState } from "react"


export const Login = () => {
    //para ver si se crea la cuenta o no
    const [isLogginIn, setIsLoggin] = useState(false) 
    return (
        <div>
            <h1>
                { 
                    isLoggin 
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
                <button type="submit">{ isLoggin ? "Accede" : "Regístrate" }</button>
            </form>
            <button>{ isLoggin ? "¿No tienes cuenta? Crea una" : "¿Ya tienes cuenta? Accede" }</button>
        </div>
    )
}
