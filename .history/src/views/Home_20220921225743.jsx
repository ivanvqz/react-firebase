import Navbar from "../Components/Navbar"

export const Home = ( {usuario: user} ) => {
    return (
        <>
        <title>Bienvenido</title>
            <div>
                <h1>Bienvenido!</h1>
                <Navbar usuario={ user }/>
            </div>
        </>
    )
}