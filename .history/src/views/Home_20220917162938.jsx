import { logOut } from "../functions/logOut"


export const Home = () => {
    return (
        <div>
            <h1>Bienvenido!</h1>
            <button 
                onClick={ logOut }
                className="bg-red-300 hover:"
            >
                Cerrar sesión
            </button>
        </div>
    )
}