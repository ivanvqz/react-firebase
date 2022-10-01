import Navbar from "../Components/Navbar"
import PendienteForm from "../Components/PendienteForm"

export const Home = ( { user } ) => {
    return (
        <>
            <div className="min-w-screen min-h-screen flex flex-col">
                <h1>Bienvenido!</h1>
                <Navbar usuario={ user.email }/>
                <PendienteForm />
            </div>
        </>
    )
}