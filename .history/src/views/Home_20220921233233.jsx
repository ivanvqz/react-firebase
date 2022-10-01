import Navbar from "../Components/Navbar"
import PendienteForm from "../Components/PendienteForm"

export const Home = ( { user } ) => {
    return (
        <>
            <div className="minw-screen minh-screen flex flex-col">
                <h1>Bienvenido!</h1>
                <Navbar usuario={ user }/>
                <PendienteForm />
            </div>
        </>
    )
}