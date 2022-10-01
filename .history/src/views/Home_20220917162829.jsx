import { logOut } from "../functions/logOut"


export const Home = () => {
    return (
        <div>
            <h1>Bienvenido!</h1>
            <button 
                onClick={ logOut }
                className="bg-blue-500 text-white p-2 rounded mt-2"
            >
                Cerrar sesión
            </button>
        </div>
    )
}