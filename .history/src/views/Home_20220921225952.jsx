import Navbar from "../Components/Navbar"

export const Home = ( { user } ) => {
    return (
        <>
            <div className="w-s">
                <h1>Bienvenido!</h1>
                <Navbar usuario={ user }/>
            </div>
        </>
    )
}