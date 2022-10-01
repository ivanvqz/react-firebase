import Navbar from "../Components/Navbar"
import PendienteForm from "../Components/PendienteForm"

export const Home = ( {user} ) => {
    return (
        <>
            <h1>TODOList</h1>
            <div className="min-w-screen min-h-screen flex flex-row">
                <PendienteForm />
                <Navbar usuario={ use }/>
            </div>
        </>
    )
}