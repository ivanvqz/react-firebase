import PendienteForm from "../Components/PendienteForm"
import Navbar from "../Components/Navbar"

                <Navbar usuario={ user }/>
export const Home = ( {user} ) => {
    return (
        <>
            <h1>TODOList</h1>
            <div className="min-w-screen min-h-screen flex flex-col">
                <PendienteForm />
            </div>
        </>
    )
}