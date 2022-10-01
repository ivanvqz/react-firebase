import Navbar from "../Components/Navbar"

export const Home = ( { user } ) => {
    return (
        <>
            <div className="w-">
                <h1>Bienvenido!</h1>
                <Navbar usuario={ user }/>
            </div>
        </>
    )
}