import { useState } from "react"
import { loginWithEmailPassword } from "../functions/loginWithEmailPassword"
import LoginWithGoogle from "../functions/loginWithGoogle"
import { registerUser } from "../functions/registerUser"


export function Login() {
    //para ver si se crea la cuenta o no
    const [ isLogginIn, setIsLogginIn ] = useState(false)

    //función para crear cuenta
    async function submitHandler(e) {
        e.preventDefault()
        const username = e.target.email.value
        const password = e.target.password.value

        if (isLogginIn) {
            await loginWithEmailPassword(username, password)
        } else {
            await registerUser(username, password)
        }
    }

    //metooo onclick para el boton
    const handleLogin = () => {
        setIsLogginIn(!isLogginIn)
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">
                    {isLogginIn
                        ? "Iniciar seción"
                        : "Crea una cuenta"}
                </h1>

                <form
                    className="flex flex-col"
                    onSubmit={submitHandler}
                >
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="email"
                        placeholder="ej: user@gmail.com" />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password" />
                    <button
                        className="bg-blue-500 text-white p-2 rounded-md mt-2"
                        type="submit"
                    >
                        {isLogginIn
                            ? "Accede"
                            : "Regístrate"}
                    </button>

                </form>

                <button
                    onClick={ LoginWithGoogle }
                    className="bg-red-500 text-white p-2 rounded-md mt-2"
                >
                    Accede con google
                </button>

                <button
                    className="text-blue-500"
                    onClick={handleLogin}
                >
                    {isLogginIn
                        ? "¿No tienes cuenta? Crea una"
                        : "¿Ya tienes cuenta? Accede"}
                </button>
            </div>
        </div>

    )
}
