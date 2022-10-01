

export const Home = () => {
    return (
        <>
        <title>Bienvenido</title>
            <div>
                <h1>Bienvenido!</h1>
                <button 
                    onClick={ logOut }
                    className="bg-red-900 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                >
                    Cerrar sesión
                </button>
            </div>
        </>
    )
}