import Navbar from "../Components/Navbar"
import PendienteForm from "../Components/PendienteForm"

export const Home = ( {user} ) => {
    return (
        <>
            <h1>TODOLis</h1>
            <div className="min-w-screen min-h-screen flex flex-row">
                <Navbar usuario={ user.email }/>
                <PendienteForm />
            </div>
        </>
    )
}