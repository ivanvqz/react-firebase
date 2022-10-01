import { useState } from "react"


export const Login = () => {
    //para ver si se crea la cuenta o no
    const [isLogginIn, setIsLogginIn] = useState(false) 

    //metooo onclick para el boton
    const handleLogin = () => {
        setIsLogginIn(!isLogginIn)
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <h1 class>
                    { 
                        isLogginIn 
                        ? "Iniciar seción" 
                        : "Crea una cuenta"
                    }
                </h1>

                <form className="flex flex-col">
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" placeholder="username" />
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password"/>
                    <button 
                        className="bg-blue-500 text-white p-2 rounded-md"
                        type="submit"
                    >
                        { isLogginIn 
                        ? "Accede" 
                        : "Regístrate" }
                    </button>

                </form>
                <button 
                    className="text-blue-500"
                    onClick={handleLogin}
                >
                    { isLogginIn 
                    ? "¿No tienes cuenta? Crea una" 
                    : "¿Ya tienes cuenta? Accede" }
                </button>
            </div>
        </div>

    )
}
// minuto 8:21