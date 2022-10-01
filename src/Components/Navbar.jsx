import { logOut } from "../functions/logOut"

const Navbar = ({ user }) => {
    return (
        <div className="w-full flex flex-row justify-between px-10 my-5">
            <h1 className="text-2xl font-bold">TODOList</h1>

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