import { logOut } from "../functions/logOut"

const Navbar = ( { usuario } ) => {
    return (
        <div>
            <h1>{ usuario }</h1>
            <p>Prueba de que funciona</p>
            <p>Minutp 10:</p>

            <button 
                    onClick={ logOut }
                    className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                >
                    Cerrar sesión
                </button>
        </div>
    )
}

export default Navbar