import { logOut } from "../functions/logOut"

export const Home = () => {
    return (
        <div>
            <h1>Bienvenido! {user}</h1>
            <button 
                onClick={ logOut }
                className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            >
                Cerrar sesión
            </button>
        </div>
    )
}