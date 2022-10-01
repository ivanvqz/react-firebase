import Navbar from "../Components/Navbar"

export const Home = ( { user } ) => {
    return (
        <>
            <div className="w-screen h-screen flex flex-col">
                <h1>Bienvenido!</h1>
                <Navbar usuario={ user }/>
            </div>
        </>
    )
}